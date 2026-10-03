import { accessSync, constants, existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { spawnSync } from 'node:child_process'
import { getAtsResumes } from './ats-resume-config.mjs'

const projectRoot = resolve(import.meta.dirname, '..')
const resumes = getAtsResumes()

const candidates = [
  process.env.CHROME_BIN,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

const chromePath = candidates.find((candidate) => {
  try {
    accessSync(candidate, constants.X_OK)
    return true
  } catch {
    return false
  }
})

if (!chromePath) {
  throw new Error('Google Chrome ou Chromium não encontrado. Defina CHROME_BIN e tente novamente.')
}

for (const resume of resumes) {
  const sourcePath = resolve(projectRoot, resume.source)
  const outputPath = resolve(projectRoot, resume.pdf)
  const result = spawnSync(
    chromePath,
    [
      '--headless=new',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-sandbox',
      '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=1000',
      '--print-to-pdf=' + outputPath,
      pathToFileURL(sourcePath).href,
    ],
    { encoding: 'utf8' },
  )

  if (result.status !== 0) {
    process.stderr.write(result.stderr)
    process.exit(result.status ?? 1)
  }

  if (!existsSync(outputPath) || statSync(outputPath).size === 0) {
    throw new Error('O PDF não foi criado em ' + outputPath + '.')
  }

  console.log('PDF gerado (' + resume.locale + '): ' + outputPath)
}

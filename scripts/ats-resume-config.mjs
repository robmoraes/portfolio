const resumes = [
  {
    locale: 'pt-BR',
    source: 'public/ats-resume/index.html',
    pdf: 'public/carlos-moraes-rodrigues-devops-senior.pdf',
  },
  {
    locale: 'en-US',
    source: 'public/ats-resume/en-US/index.html',
    pdf: 'public/carlos-moraes-rodrigues-devops-senior-en-us.pdf',
  },
]

export function getAtsResumes(args = process.argv.slice(2)) {
  if (args.length === 0) return resumes

  const resume = resumes.find(({ locale }) => locale === args[0])
  if (args.length !== 1 || !resume) {
    throw new Error('Informe somente um idioma suportado: pt-BR ou en-US; omita para ambos.')
  }

  return [resume]
}

import { existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { getAtsResumes } from './ats-resume-config.mjs'

const projectRoot = resolve(import.meta.dirname, '..')
const resumes = getAtsResumes()
const labelsByLocale = {
  'pt-BR': {
    summary: 'Resumo profissional',
    skills: 'Competências técnicas',
    experience: 'Experiência profissional',
    currentRole: 'Desenvolvedor Sênior — Software, DevOps e Platform Engineering',
    freelanceRole: 'Desenvolvedor Web Freelancer',
    automation: 'Infrastructure as Code (IaC) e automação',
    observability: 'Observabilidade',
    projects: 'Projetos selecionados',
    episodes: '10 episódios',
    education: 'Formação',
    training: 'DevOps Ninja: Docker, Kubernetes e Rancher',
  },
  'en-US': {
    summary: 'Professional summary',
    skills: 'Technical skills',
    experience: 'Professional experience',
    currentRole: 'Senior Developer - Software, DevOps and Platform Engineering',
    freelanceRole: 'Freelance Web Developer',
    automation: 'Infrastructure as Code (IaC) and automation',
    observability: 'Observability',
    projects: 'Selected projects',
    episodes: '10 episodes',
    education: 'Education',
    training: 'DevOps Ninja: Docker, Kubernetes and Rancher',
  },
}

function run(command, args) {
  const result = spawnSync(command, args, { encoding: 'utf8' })

  if (result.error?.code === 'ENOENT') {
    throw new Error(command + ' não encontrado. Instale o pacote poppler-utils.')
  }

  if (result.status !== 0) {
    throw new Error(command + ' falhou:\n' + result.stderr)
  }

  return result.stdout
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

for (const resume of resumes) {
  const pdfPath = resolve(projectRoot, resume.pdf)
  const labels = labelsByLocale[resume.locale]

  assert(
    existsSync(pdfPath),
    'PDF não encontrado: ' + pdfPath + '. Execute npm run resume:generate.',
  )
  assert(statSync(pdfPath).size > 0, 'O PDF está vazio.')

  const info = run('pdfinfo', [pdfPath])
  const pageMatch = info.match(/^Pages:\s+(\d+)$/m)
  assert(pageMatch, 'Não foi possível identificar a quantidade de páginas.')

  const pageCount = Number(pageMatch[1])
  assert(pageCount <= 2, 'O currículo tem ' + pageCount + ' páginas; o limite é 2.')

  const text = run('pdftotext', ['-layout', pdfPath, '-'])
  const textLowerCase = text.toLocaleLowerCase(resume.locale)
  const normalizedTextLowerCase = textLowerCase.replace(/\s+/g, ' ')
  const requiredTerms = [
    'Carlos R Moraes Rodrigues',
    'Senior Software & DevOps Engineer',
    labels.summary,
    'Go',
    'Python',
    'PHP',
    'Vue',
    'PostgreSQL',
    'RabbitMQ',
    'Elasticsearch',
    'Logstash',
    'k6',
    'spec-driven development',
    'AWS',
    'Docker',
    labels.automation,
    'Terraform',
    'CI/CD',
    labels.observability,
    'FinOps',
    labels.experience,
    labels.currentRole,
    labels.freelanceRole,
    'aws-swarm-lab',
    'Distributed Systems Lab',
    labels.episodes,
    'Quick Quiz',
    'Pinleaf',
    labels.training,
  ]

  for (const term of requiredTerms) {
    assert(
      normalizedTextLowerCase.includes(term.toLocaleLowerCase(resume.locale)),
      'Conteúdo obrigatório ausente na extração: ' + term,
    )
  }

  const orderedTerms = [
    labels.summary,
    labels.skills,
    labels.experience,
    'Seventh',
    'Conectaa Sistemas',
    labels.freelanceRole,
    'Fundação CEEE',
    'Sapient AG2',
    labels.projects,
    'aws-swarm-lab',
    'Distributed Systems Lab',
    labels.episodes,
    'Quick Quiz',
    'Pinleaf',
    labels.education,
  ]

  let previousPosition = -1
  for (const term of orderedTerms) {
    const position = normalizedTextLowerCase.indexOf(
      term.toLocaleLowerCase(resume.locale),
      previousPosition + 1,
    )
    assert(position > previousPosition, 'Ordem textual incorreta em: ' + term)
    previousPosition = position
  }

  assert(!/[a-záàâãéêíóôõúç][.!?][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ]/u.test(text), 'Há frases coladas no texto.')

  for (const unsupportedTerm of ['EKS', 'GitLab CI', 'Datadog', 'Black Friday']) {
    assert(
      !text.includes(unsupportedTerm),
      'Experiência prática não sustentada encontrada: ' + unsupportedTerm,
    )
  }

  const kubernetesOccurrences = text.match(/Kubernetes/g) ?? []
  assert(
    kubernetesOccurrences.length === 1,
    'Kubernetes deve aparecer somente uma vez, na formação.',
  )
  const educationPosition = text.search(new RegExp('^\\s*' + labels.education + '\\s*$', 'im'))
  assert(
    educationPosition >= 0 && text.indexOf('Kubernetes') > educationPosition,
    'Kubernetes deve aparecer somente depois do título ' + labels.education + '.',
  )

  const html = run('pdftohtml', ['-stdout', '-i', '-noframes', pdfPath])
  const requiredLinks = [
    'mailto:carlos.moraes.as@gmail.com',
    'tel:+5548998314627',
    'https://www.linkedin.com/in/carlosmoraesjr',
    'https://github.com/robmoraes',
    'https://portfolio.robmoraes.dev.br/',
    'https://github.com/robmoraes/aws-swarm-lab',
    'https://youtube.com/playlist?list=PLd8XIvm0GJ7U&si=IDsqCRy5Kcmpr5e3',
    'https://dslab.quickquiz.com.br/#/',
    'https://github.com/robmoraes/pinleaf',
  ]

  for (const link of requiredLinks) {
    assert(html.includes(link), 'Link clicável ausente do PDF: ' + link)
  }

  console.log(
    'PDF ATS válido (' +
      resume.locale +
      '): ' +
      pageCount +
      ' páginas, texto ordenado e ' +
      requiredLinks.length +
      ' links.',
  )
}

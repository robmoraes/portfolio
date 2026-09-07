import { existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const projectRoot = resolve(import.meta.dirname, '..')
const pdfPath = resolve(projectRoot, 'public/carlos-moraes-rodrigues-devops-senior.pdf')

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

assert(existsSync(pdfPath), 'PDF não encontrado: ' + pdfPath + '. Execute npm run resume:generate.')
assert(statSync(pdfPath).size > 0, 'O PDF está vazio.')

const info = run('pdfinfo', [pdfPath])
const pageMatch = info.match(/^Pages:\s+(\d+)$/m)
assert(pageMatch, 'Não foi possível identificar a quantidade de páginas.')

const pageCount = Number(pageMatch[1])
assert(pageCount <= 2, 'O currículo tem ' + pageCount + ' páginas; o limite é 2.')

const text = run('pdftotext', ['-layout', pdfPath, '-'])
const textLowerCase = text.toLocaleLowerCase('pt-BR')
const requiredTerms = [
  'Carlos R Moraes Rodrigues',
  'Senior DevOps Engineer',
  'Resumo profissional',
  'AWS',
  'Docker',
  'Infrastructure as Code (IaC) e automação',
  'Terraform',
  'CI/CD',
  'Observabilidade',
  'FinOps',
  'Experiência profissional',
  'Desenvolvedor Sênior — atuação em DevOps e Platform Engineering',
  'Desenvolvedor Web Freelancer',
  'aws-swarm-lab',
  'Pinleaf',
  'DevOps Ninja: Docker, Kubernetes e Rancher',
]

for (const term of requiredTerms) {
  assert(
    textLowerCase.includes(term.toLocaleLowerCase('pt-BR')),
    'Conteúdo obrigatório ausente na extração: ' + term,
  )
}

const orderedTerms = [
  'Resumo profissional',
  'Competências técnicas',
  'Experiência profissional',
  'Seventh',
  'Conectaa Sistemas',
  'Desenvolvedor Web Freelancer',
  'Fundação CEEE',
  'Sapient AG2',
  'Projetos selecionados',
  'aws-swarm-lab',
  'Pinleaf',
  'Formação',
]

let previousPosition = -1
for (const term of orderedTerms) {
  const position = textLowerCase.indexOf(term.toLocaleLowerCase('pt-BR'))
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
assert(kubernetesOccurrences.length === 1, 'Kubernetes deve aparecer somente uma vez, na formação.')
assert(
  text.indexOf('Kubernetes') > text.indexOf('Formação'),
  'Kubernetes deve aparecer somente depois do título Formação.',
)

const html = run('pdftohtml', ['-stdout', '-i', '-noframes', pdfPath])
const requiredLinks = [
  'mailto:carlos.moraes.as@gmail.com',
  'tel:+5548998314627',
  'https://www.linkedin.com/in/carlosmoraesjr',
  'https://github.com/robmoraes',
  'https://portfolio.robmoraes.dev.br/',
  'https://github.com/robmoraes/aws-swarm-lab',
  'https://github.com/robmoraes/pinleaf',
]

for (const link of requiredLinks) {
  assert(html.includes(link), 'Link clicável ausente do PDF: ' + link)
}

console.log(
  'PDF ATS válido: ' + pageCount + ' páginas, texto ordenado e ' + requiredLinks.length + ' links.',
)

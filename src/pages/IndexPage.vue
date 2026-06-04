<template>
  <q-page class="index-page column items-center">
    <!-- PAGE 1 -->
    <div class="row justify-center items-start content-start page page-1">
      <div class="col-12 header">
        <div class="header-content">
          <div>
            <div id="myName">
              Carlos <span class="text-bold">Rob</span>erto
              <span class="text-bold">Moraes</span> Rodrigues Jr.
            </div>
            <div id="myOccupation">Software Engineer</div>
          </div>
        </div>
      </div>
      <div class="col-3 column-one">
        <div id="pictureContainer">
          <div id="picture"></div>
        </div>
        <div class="social-links">
          <a
            class="social-link"
            href="https://www.linkedin.com/in/carlosmoraesjr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-icon name="fa-brands fa-linkedin" size="18px" />
            <span>carlosmoraesjr</span>
          </a>
          <a
            class="social-link"
            href="https://github.com/robmoraes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-icon name="fa-brands fa-github" size="18px" />
            <span>robmoraes</span>
          </a>
          <a
            class="social-link"
            href="https://hub.docker.com/u/robmoraes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-icon name="fa-brands fa-docker" size="18px" />
            <span>robmoraes</span>
          </a>
          <a
            class="social-link"
            href="https://wa.me/5548998314627"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-icon name="fa-brands fa-whatsapp" size="18px" />
            <span>+55 48 99831-4627</span>
          </a>
          <a
            class="social-link"
            href="https://about.robmoraes.dev.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-icon name="fa-solid fa-globe" size="18px" />
            <span>about.robmoraes.dev.br</span>
          </a>
        </div>
        <hr class="q-ma-md q-mt-md" />

        <div class="text-center q-my-sm text-subtitle2">Core Skills</div>
        <div class="skill-list">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <div class="skill-label text-caption text-weight-medium">{{ skill.name }}</div>
            <q-linear-progress
              :value="skill.value"
              size="7px"
              color="grey-8"
              track-color="grey-4"
              rounded
            />
          </div>
        </div>
        <hr class="q-ma-md" />
        <div class="text-center q-mb-sm text-subtitle2">Áreas de atuação</div>
        <div class="core-skill-tags">
          <q-chip
            v-for="skill in coreSkills"
            :key="skill"
            dense
            square
            color="grey-3"
            text-color="grey-10"
            class="core-skill-chip"
          >
            {{ skill }}
          </q-chip>
        </div>
      </div>
      <div class="col-9 q-pa-lg column-two">
        <div id="portfolio">
          <div class="text-subtitle1">Trajetória Profissional</div>
          <hr />
          <q-timeline color="secondary">
            <q-timeline-entry
              title="Formação Superior"
              subtitle="Fevereiro de 1998 Dezembro de 2000"
              ><div class="text-caption text-justify">
                Tecnólogo em Processamento de Dados na Universidade Católica de Pelotas (UCPel) com
                Programação e base para Análise de Sistemas. Projeto de conclusão de curso voltado à
                gestão hoteleira.
              </div></q-timeline-entry
            >

            <q-timeline-entry
              title="Data Bank do Brasil LTDA"
              subtitle="Maio de 2001 à Julho de 2001"
            >
              <div class="text-caption text-justify">
                Início da trajetória profissional como Desktop Developer, bancos de dados e
                integração de sistemas com dispositivos eletrônicos.
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title="Fundação Educational de S. V. do Palmar"
              subtitle="Outubro de 2001 à Março de 2003"
            >
              <div class="text-caption text-justify">
                Atuando como Laboratorista na Fundação manteve atividades paralelas de programação
                criando sistema para Biblioteca da Fundação e distribuiu o sistema em Escola
                Estadual e Bibliotecas Municipais.
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title="AG2 Agência de Inteligência Digital"
              subtitle="Março de 2003 à Novembro de 2007"
              ><div class="text-caption text-justify">
                Atuação em projetos para clientes como Embraer, Bradesco, Renner e Grupo Martins.
                Período marcado pela transição das tecnologias clássicas da Microsoft para .NET.
                Desenvolveu portais de internet, intranet, extranet, e-commerces. Migrou para
                ASP.NET/C# enquanto escalava domínio sobre JS, jQuery, AJAX, SQLServer e MySQL.
              </div></q-timeline-entry
            >
            <q-timeline-entry
              title="Formação de Analistas e Projetistas Orientado a Objetos"
              subtitle="Outubro de 2006 à Novembro de 2007"
              ><div class="text-caption text-justify">
                Formação com duração de 140h e destaque para UML, Análise e projeto Orientado a
                Objetos e Mapeamento de Modelos OO para Modelos de Entidade e Relacionamento.
                <q-btn
                  flat
                  round
                  dense
                  size="sm"
                  icon="image"
                  class="certificate-entry-link no-print"
                  @click="openCertificate(certificates[0])"
                >
                  <q-tooltip>Abrir certificado</q-tooltip>
                </q-btn>
              </div></q-timeline-entry
            >
            <q-timeline-entry></q-timeline-entry>
          </q-timeline>
        </div>
      </div>
    </div>
    <!-- / PAGE 1 -->

    <!-- PAGE 2 -->
    <div class="row justify-center items-start content-start page page-2">
      <div class="col-3 column-one">
        <div class="tag-cloud">
          <VueWordCloud
            class="trajectory-word-cloud"
            style="height: 400px; width: 100%"
            :words="trajectoryTags"
            :font-size-ratio="3"
            :spacing="0.2"
            font-family="Arial"
            font-weight="700"
          />
        </div>
      </div>
      <div class="col-9 q-pa-lg column-two">
        <div class="page-2-content">
          <q-timeline color="secondary">
            <q-timeline-entry
              title="Fundação CEEE de Seguridade Social"
              subtitle="Novembro de 2007 à Abril de 2011"
            >
              <div class="text-caption text-justify">
                Após capacitações em administração de servidores Linux iniciou migração definitiva
                do ecossistema Microsoft para plataformas open source, direcionando a carreira para
                PHP, PostgreSQL e MySQL. Na Fundação consolidou essa transição, atuando em projetos
                de intranet, internet e autoatendimento. Aprofundou conhecimentos em PostgreSQL,
                backend, APIs, JavaScript, AJAX e jQuery.
              </div>
            </q-timeline-entry>
            <q-timeline-entry
              title="Conectaa Desenvolvimento de Sistemas LTDA"
              subtitle="Agosto de 2014 à Fevereiro de 2021"
              ><div class="text-caption text-justify">
                Atuação no desenvolvimento e sustentação de sistemas web em PHP. Adoção de Laravel
                para Backend e Vue.js/Quasar.dev para Frontend. Estudou Clean Code, Design Patterns
                e testes automatizados. Atuação em projetos para o Poder Legislativo. Adoção de
                Docker e primeiro contato com cluster Kubernetes.
              </div></q-timeline-entry
            >
            <q-timeline-entry title="Seventh LTDA" subtitle="Abril de 2021 até hoje"
              ><div class="text-caption text-justify"></div>
              <div class="text-caption text-justify">
                Atuação em sistemas web com PHP/Laravel; APIs e automações em Go; Manutenção e
                sustentabilidade de sistema críticos de alto impacto; Atuação multidisciplinar com
                DotNet, Python, Node.js colaborando com projetos de outros setores; Adoção de AI
                para mentoria e uso com critério para soluções de software; Destaque para:
              </div>
              <q-list dense class="highlight-list q-mt-sm">
                <q-item class="highlight-item">
                  <q-item-section avatar>
                    <q-icon name="cloud" size="16px" color="grey-8" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-caption text-weight-medium">AWS, Cloud</q-item-label>
                    <q-item-label caption>
                      Responsável pela sustentação, monitoramento e evolução de sistemas críticos em
                      infraestrutura AWS.
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item class="highlight-item">
                  <q-item-section avatar>
                    <q-icon name="terminal" size="16px" color="grey-8" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-caption text-weight-medium">Go, Python</q-item-label>
                    <q-item-label caption class="text-justify">
                      Automações para openSIPS e FreeSWITCH viabilizando integração entre as
                      soluções da empresa com o ecossistema VoIP.
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item class="highlight-item">
                  <q-item-section avatar>
                    <q-icon name="hub" size="16px" color="grey-8" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-caption text-weight-medium">DevOps</q-item-label>
                    <q-item-label caption class="text-justify">
                      Construção de cluster HA com Docker Swarm, DNS Wildcard, Traefik na borda,
                      Grafana Stack para observabilidade, WAF e migração do inventário de sistemas
                      monolíticos legados do setor para containers sob o princípio de Single
                      Responsibility com secrets e deploys automatizados.
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list></q-timeline-entry
            >
          </q-timeline>
        </div>
        <q-card flat bordered class="quote-card">
          <q-card-section class="q-pa-md">
            <div class="row no-wrap items-start">
              <q-icon name="format_quote" size="28px" color="grey-7" class="q-mr-sm" />
              <div class="text-caption text-italic text-grey-8">
                Tenho forte compromisso com a ética, a responsabilidade técnica e o impacto real do
                software na vida de quem o utiliza. Valorizo soluções que respeitam o usuário final,
                resolvem problemas concretos e entregam confiança no uso diário. Há uma satisfação
                especial em ver algo que construí com minha inteligência, experiência e minhas
                próprias mãos fazer diferença na rotina de alguém, tornando um processo melhor, mais
                simples ou mais eficiente.
              </div>
            </div>
            <div class="quote-author text-caption text-weight-medium text-grey-8">
              Carlos R Moraes
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- /PAGE 2 -->

    <!-- PAGE 3 -->
    <div class="row justify-center items-start content-start page page-3">
      <div class="col-3 column-one">
        <div class="certificates-sidebar">
          <q-icon name="school" size="42px" color="grey-8" />
          <div class="text-subtitle2 q-mt-sm">Cursos e certificações</div>
          <div class="text-caption text-grey-7 q-mt-xs">
            Formação complementar, treinamentos técnicos e capacitações relevantes.
          </div>
        </div>
      </div>
      <div class="col-9 q-pa-lg column-two">
        <div class="certificates-section">
          <div class="text-subtitle1">Cursos e Certificações</div>
          <hr />
          <q-list bordered separator class="certification-list">
            <q-expansion-item
              v-for="record in sortedCertificationRecords"
              :key="record.name"
              dense
              group="certification-records"
              expand-icon="keyboard_arrow_down"
              class="certification-item"
            >
              <template #header>
                <q-item-section avatar class="certification-icon-section">
                  <div class="certification-icon">
                    <q-icon :name="record.icon" size="20px" />
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-caption text-weight-medium">
                    {{ record.name }}
                  </q-item-label>
                  <q-item-label caption class="certification-summary">
                    <span class="certification-summary-item">
                      <q-icon name="event" size="12px" />
                      {{ record.date }}
                    </span>
                    <span class="certification-summary-item">
                      <q-icon name="business" size="12px" />
                      {{ record.provider }}
                    </span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-badge outline color="grey-8" class="certification-workload">
                    {{ record.workload }}
                  </q-badge>
                </q-item-section>
              </template>

              <q-card flat class="certification-detail">
                <q-card-section class="q-pa-sm">
                  <div v-if="record.topics?.length" class="certification-topics">
                    <q-chip
                      v-for="topic in record.topics"
                      :key="topic"
                      dense
                      square
                      color="grey-3"
                      text-color="grey-10"
                      class="certification-topic-chip"
                    >
                      {{ topic }}
                    </q-chip>
                  </div>

                  <div v-if="record.certificate" class="certification-certificate-action no-print">
                    <q-btn
                      flat
                      dense
                      no-caps
                      size="sm"
                      icon="image"
                      label="Ver certificado"
                      class="certification-certificate-button"
                      @click="openCertificate(record.certificate)"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- /PAGE 3 -->

    <q-dialog v-model="certificateDialogOpen">
      <q-card class="certificate-dialog">
        <q-card-section class="row items-center justify-between q-pa-sm">
          <div class="text-subtitle2">
            {{ selectedCertificate?.year }} - {{ selectedCertificate?.name }}
          </div>
          <q-btn v-close-popup flat round dense icon="close" />
        </q-card-section>
        <q-separator />
        <q-card-section class="q-pa-none">
          <q-carousel
            v-if="selectedCertificate"
            v-model="selectedCertificateSlide"
            animated
            swipeable
            :arrows="selectedCertificate.images.length > 1"
            :navigation="selectedCertificate.images.length > 1"
            control-color="grey-9"
            class="certificate-carousel"
          >
            <q-carousel-slide
              v-for="image in selectedCertificate.images"
              :key="image.src"
              :name="image.src"
              class="certificate-slide"
            >
              <img
                class="certificate-original"
                :src="image.src"
                :alt="`${selectedCertificate.name} certificate ${image.label}`"
              />
            </q-carousel-slide>
          </q-carousel>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'
import VueWordCloud from 'vuewordcloud'
import certDevops from 'src/assets/certs/2022-01-30-devops.jpg'
import certGolang from 'src/assets/certs/2021-03-16-golang.jpg'
import certLinuxSslxpc from 'src/assets/certs/2008-05-linux-sslxpc.jpg'
import certLinuxSslxpi from 'src/assets/certs/2008-08-linux-sslxpi.jpg'
import certOopAnalystTraining from 'src/assets/certs/2006-10-oop-analyst-training.jpg'
import certOopAnalystTrainingBack from 'src/assets/certs/2006-10-oop-analyst-training-back.jpg'
import certOracle from 'src/assets/certs/2008-07-oracle.jpg'
import certWindows2003Training from 'src/assets/certs/2007-03-windows-2003-training.jpg'
import certWindows2003TrainingBack from 'src/assets/certs/2007-03-windows-2003-training-back.jpg'
import certificationRecordsSource from 'src/data/certification-records.json'

const certificates = [
  {
    key: 'oop-analyst-training',
    year: '2006',
    name: 'OOP Analyst Training',
    src: certOopAnalystTraining,
    images: [
      {
        label: 'front',
        src: certOopAnalystTraining,
      },
      {
        label: 'back',
        src: certOopAnalystTrainingBack,
      },
    ],
  },
  {
    key: 'windows-2003-training',
    year: '2007',
    name: 'Windows 2003 Training',
    src: certWindows2003Training,
    images: [
      {
        label: 'front',
        src: certWindows2003Training,
      },
      {
        label: 'back',
        src: certWindows2003TrainingBack,
      },
    ],
  },
  {
    key: 'linux-sslxpc',
    year: '2008',
    name: 'Linux SSLXPC',
    src: certLinuxSslxpc,
    images: [
      {
        label: 'front',
        src: certLinuxSslxpc,
      },
    ],
  },
  {
    key: 'oracle-1',
    year: '2008',
    name: 'Oracle',
    src: certOracle,
    images: [
      {
        label: 'front',
        src: certOracle,
      },
    ],
  },
  {
    key: 'linux-sslxpi',
    year: '2008',
    name: 'Linux SSLXPI',
    src: certLinuxSslxpi,
    images: [
      {
        label: 'front',
        src: certLinuxSslxpi,
      },
    ],
  },
  {
    key: 'go-1',
    year: '2021',
    name: 'Go (Golang)',
    src: certGolang,
    images: [
      {
        label: 'front',
        src: certGolang,
      },
    ],
  },
  {
    key: 'devops',
    year: '2022',
    name: 'DevOps Ninja',
    src: certDevops,
    images: [
      {
        label: 'front',
        src: certDevops,
      },
    ],
  },
]

const skills = [
  {
    name: 'Laravel',
    value: 1,
  },
  {
    name: 'PHP',
    value: 1,
  },
  {
    name: 'Go',
    value: 0.65,
  },
  {
    name: 'Docker',
    value: 0.85,
  },
  {
    name: 'AWS',
    value: 0.65,
  },
  {
    name: 'JS|Vue',
    value: 0.85,
  },
  {
    name: 'Symfony',
    value: 0.3,
  },
  {
    name: 'DevOps',
    value: 0.6,
  },
]

const coreSkills = [
  'Backend',
  'Frontend',
  'Infraestrutura',
  'DevOps',
  'Cloud',
  'Automações',
  'VoIP',
  'Bancos de dados',
  'Sistemas críticos',
  'Evolução arquitetural',
]

const trajectoryTags = [
  {
    text: 'PHP',
    weight: 10,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#202124',
  },
  {
    text: 'Laravel',
    weight: 10,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#202124',
  },
  {
    text: 'Vue.js',
    weight: 8,
    rotation: -90,
    rotationUnit: 'deg',
    color: '#333333',
  },
  {
    text: 'Quasar',
    weight: 6,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#4a4a4a',
  },
  {
    text: 'Go',
    weight: 8,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#333333',
  },
  {
    text: 'Docker',
    weight: 8,
    rotation: 90,
    rotationUnit: 'deg',
    color: '#333333',
  },
  {
    text: 'AWS',
    weight: 7,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#3f3f3f',
  },
  {
    text: 'DevOps',
    weight: 7,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#3f3f3f',
  },
  {
    text: 'Linux',
    weight: 6,
    rotation: -90,
    rotationUnit: 'deg',
    color: '#4a4a4a',
  },
  {
    text: 'PostgreSQL',
    weight: 5,
    rotation: 90,
    rotationUnit: 'deg',
    color: '#5c5c5c',
  },
  {
    text: 'MySQL',
    weight: 4,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#666666',
  },
  {
    text: 'APIs',
    weight: 5,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#5c5c5c',
  },
  {
    text: 'VoIP',
    weight: 4,
    rotation: -90,
    rotationUnit: 'deg',
    color: '#666666',
  },
  {
    text: 'OpenSIPS',
    weight: 4,
    rotation: 90,
    rotationUnit: 'deg',
    color: '#666666',
  },
  {
    text: 'FreeSWITCH',
    weight: 4,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#666666',
  },
  {
    text: 'Clean Code',
    weight: 3,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#777777',
  },
  {
    text: 'Design Patterns',
    weight: 3,
    rotation: -90,
    rotationUnit: 'deg',
    color: '#777777',
  },
  {
    text: 'AI',
    weight: 3,
    rotation: 0,
    rotationUnit: 'deg',
    color: '#777777',
  },
]

const certificatesByKey = Object.fromEntries(
  certificates.map((certificate) => [certificate.key, certificate]),
)

const certificationRecords = certificationRecordsSource.map((record) => ({
  ...record,
  certificate: certificatesByKey[record.certificateKey],
}))

const sortedCertificationRecords = computed(() =>
  [...certificationRecords].sort((a, b) => a.sortDate.localeCompare(b.sortDate)),
)

const certificateDialogOpen = ref(false)
const selectedCertificate = ref(null)
const selectedCertificateSlide = ref(null)

function openCertificate(certificate) {
  selectedCertificate.value = certificate
  selectedCertificateSlide.value = certificate.images[0].src
  certificateDialogOpen.value = true
}
</script>

<style scoped>
.page {
  position: relative;
  z-index: 0;
  width: 210mm;
  min-width: 210mm;
  height: 300mm;
  background-color: #ffffff;
  border: 1px solid #404040;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
  margin: 10px 0 10px 0;
}

div {
  border-style: none;
}

.header {
  display: grid;
  place-items: center;
  height: 150px;
  background-color: #404040;
}

.header .header-content {
  text-align: center;
}

#myName,
#myOccupation {
  color: #ffffff;
}

#myName {
  font-size: 32px;
}

#myOccupation {
  font-size: 18px;
}

.column-one {
  background-color: #e6e6e6;
}

.column-one {
  height: calc(100%);
}

.page-1 .column-one {
  height: calc(100% - 150px);
}

#pictureContainer {
  display: flex;
  justify-content: center;
}

#picture {
  border-radius: 60%;
  width: 140px;
  height: 140px;
  margin-top: 40px;
  background-image: url('/src/assets/about-me-2.png');
  background-size: 140px 140px;
  border: 1px solid;
}

.social-links {
  display: grid;
  gap: 10px;
  margin-top: 34px;
  padding: 0 12px;
  color: #404040;
}

.social-link {
  display: grid;
  grid-template-columns: 22px 1fr;
  align-items: center;
  column-gap: 6px;
  font-size: 11px;
  line-height: 1.3;
  color: inherit;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.cert-thumbnails {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 0 12px;
}

.cert-thumbnail {
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.cert-thumbnail img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border: 1px solid #c6c6c6;
  background-color: #ffffff;
}

.skill-list {
  display: grid;
  gap: 8px;
  padding: 0 12px;
  color: #404040;
}

.skill-item {
  display: grid;
  grid-template-columns: 54px 1fr;
  align-items: center;
  column-gap: 8px;
}

.skill-label {
  line-height: 1;
}

.core-skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 0 12px;
}

.core-skill-chip {
  margin: 0;
  min-height: 20px;
  font-size: 11px;
  line-height: 1.1;
}

.tag-cloud {
  padding: 34px 12px 0;
  color: #404040;
}

.trajectory-word-cloud {
  width: 100%;
  height: 470px;
  animation: word-cloud-drift 7s ease-in-out infinite alternate;
  transform-origin: center;
  will-change: transform;
}

@keyframes word-cloud-drift {
  0% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-4px) scale(1.015);
  }

  100% {
    transform: translateY(3px) scale(0.995);
  }
}

.highlight-list {
  border-left: 2px solid #d0d0d0;
  color: #404040;
}

.highlight-item {
  min-height: 0;
  padding: 4px 8px;
}

.highlight-item :deep(.q-item__section--avatar) {
  min-width: 28px;
  padding-right: 8px;
}

.highlight-item :deep(.q-item__label--caption) {
  color: #505050;
  line-height: 1.35;
}

.certificate-entry-link {
  margin-left: 4px;
  vertical-align: middle;
}

.certificate-dialog {
  width: min(92vw, 900px);
  max-width: 92vw;
}

.certificate-carousel {
  height: 82vh;
  background-color: #ffffff;
}

.certificate-slide {
  display: grid;
  place-items: center;
  padding: 0;
  background-color: #ffffff;
}

.certificate-original {
  display: block;
  max-width: 100%;
  max-height: 82vh;
  object-fit: contain;
  background-color: #ffffff;
}

#itsMe {
  width: 100%;
}

/* COLUMN 2 */

.column-two {
  height: calc(100% - 150px);
}

.page-2 .column-two {
  display: flex;
  flex-direction: column;
}

.page-2-content {
  flex: 1;
}

.quote-card {
  border-color: #d0d0d0;
  border-left: 4px solid #707070;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.quote-author {
  margin-top: 10px;
  padding-top: 8px;
  text-align: right;
  border-top: 1px solid #dddddd;
}

.certificates-sidebar {
  padding: 34px 16px 0;
  color: #404040;
}

.certification-list {
  border-color: #d0d0d0;
  border-radius: 4px;
}

.certification-item {
  background-color: #ffffff;
}

.certification-item :deep(.q-item) {
  padding: 8px 10px;
}

.certification-icon-section {
  min-width: 44px;
  padding-right: 8px;
}

.certification-icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 30px;
  color: #404040;
}

.certification-workload {
  max-width: 64px;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  white-space: normal;
}

.certification-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 2px 8px;
  font-size: 10px;
  line-height: 1.2;
}

.certification-summary-item {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.certification-detail {
  background-color: #f8f8f8;
}

.certification-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

.certification-topic-chip {
  font-size: 10px;
}

.certification-certificate-action {
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
}

.certification-certificate-button {
  color: #404040;
  font-size: 10px;
  padding: 0 4px;
  min-height: 22px;
}

.certification-certificate-button :deep(.q-icon) {
  font-size: 14px;
}

/* COLUMN 2 */

@media (max-width: 210mm) {
  .index-page {
    justify-content: flex-start;
  }
}

@media print {
  :global(html),
  :global(body),
  :global(#q-app),
  :global(.q-layout),
  :global(.q-page-container),
  .index-page {
    background-color: #fff;
    min-height: 0;
    margin: 0;
    padding: 0;
  }

  div.page {
    box-shadow: unset;
    margin: 0 0 0 0;
    border: none;
  }

  div.header {
    background-color: #fff;
  }

  #myName,
  #myOccupation {
    color: #000;
  }

  #certificates {
    display: none;
  }

  .tag-cloud {
    display: none;
  }

  .no-print {
    display: none;
  }
}
</style>

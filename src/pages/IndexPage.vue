<template>
  <q-page class="index-page column items-center q-my-lg">
    <q-page-sticky position="top-right" :offset="[18, 18]" class="language-toggle-sticky no-print">
      <q-btn
        unelevated
        rounded
        no-caps
        icon="language"
        :label="nextLanguageLabel"
        class="language-toggle"
        @click="toggleLocale"
      >
        <q-tooltip>{{ $t('languageToggle.tooltip') }}</q-tooltip>
      </q-btn>
    </q-page-sticky>

    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="no-print">
      <q-btn fab icon="help" color="gray" @click="systemInfoDialogOpen = true" />
    </q-page-sticky>

    <!-- PAGE 1 -->
    <div class="row justify-center items-start content-start page page-1">
      <div class="col-12 header">
        <div class="header-content">
          <div>
            <div id="myName">
              Carlos <span class="text-bold">Rob</span>erto
              <span class="text-bold">Moraes</span> Rodrigues Jr.
            </div>
            <div id="myOccupation">{{ $t('header.occupation') }}</div>
          </div>
        </div>
      </div>
      <div class="col-3 column-one">
        <div id="pictureContainer">
          <img id="picture" :src="profilePicture" alt="Carlos Roberto Moraes" />
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

        <div class="text-center q-my-sm text-subtitle2">{{ $t('sections.mainSkills') }}</div>
        <div class="main-skill-list">
          <div v-for="skill in mainSkills" :key="skill.name" class="main-skill-item">
            <div class="main-skill-label text-caption text-weight-medium">{{ skill.name }}</div>
            <q-linear-progress
              class="screen-skill-bar"
              :value="skill.value"
              size="7px"
              color="grey-8"
              track-color="grey-4"
              rounded
            />
            <div class="print-skill-bar">
              <span :style="{ width: `${skill.value * 100}%` }"></span>
            </div>
          </div>
        </div>
        <hr class="q-ma-md" />
        <div class="text-center q-mb-sm text-subtitle2">
          {{ $t('sections.areasOfExpertise') }}
        </div>
        <div class="area-of-expertise-tags">
          <q-chip
            v-for="skill in areasOfExpertise"
            :key="skill"
            dense
            square
            color="grey-3"
            text-color="grey-10"
            class="area-of-expertise-chip"
          >
            {{ skill }}
          </q-chip>
        </div>
        <div class="portfolio-qr">
          <img :src="portfolioQrCode" alt="Portfolio QR Code" />
        </div>
      </div>
      <div class="col-9 q-pa-lg column-two">
        <div id="portfolio">
          <div class="text-subtitle1">{{ trajectoryPage1.sectionTitle }}</div>
          <hr />
          <q-timeline color="secondary">
            <q-timeline-entry
              v-for="entry in trajectoryPage1.entries"
              :key="`${entry.title}-${entry.subtitle}`"
              :title="entry.title"
              :subtitle="entry.subtitle"
            >
              <div class="text-caption text-justify">
                {{ entry.body }}
                <q-btn
                  v-if="entry.certificateKey"
                  flat
                  round
                  dense
                  size="sm"
                  icon="image"
                  class="certificate-entry-link no-print"
                  @click="openCertificate(certificatesByKey[entry.certificateKey])"
                >
                  <q-tooltip>{{ $t('certificates.open') }}</q-tooltip>
                </q-btn>
              </div>
            </q-timeline-entry>
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
              v-for="entry in trajectoryPage2.entries"
              :key="`${entry.title}-${entry.subtitle}`"
              :title="entry.title"
              :subtitle="entry.subtitle"
            >
              <div class="text-caption text-justify">
                {{ entry.body }}
              </div>

              <q-list v-if="entry.highlights?.length" dense class="highlight-list q-mt-sm">
                <q-item
                  v-for="highlight in entry.highlights"
                  :key="highlight.title"
                  class="highlight-item"
                >
                  <q-item-section avatar>
                    <q-icon :name="highlight.icon" size="16px" color="grey-8" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-caption text-weight-medium">
                      {{ highlight.title }}
                    </q-item-label>
                    <q-item-label caption class="text-justify">
                      {{ highlight.body }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-timeline-entry>
          </q-timeline>
        </div>
        <q-card flat bordered class="quote-card">
          <q-card-section class="q-pa-md">
            <div class="row no-wrap items-start">
              <q-icon name="format_quote" size="28px" color="grey-7" class="q-mr-sm" />
              <div class="text-caption text-italic text-grey-8">
                {{ $t('personalManifesto.quote') }}
              </div>
            </div>
            <div class="quote-author text-caption text-weight-medium text-grey-8">
              {{ $t('personalManifesto.author') }}
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
          <div class="text-subtitle2 q-mt-sm">
            {{ $t('sections.coursesAndCertifications') }}
          </div>
          <div class="text-caption text-grey-7 q-mt-xs">
            {{ $t('certificates.sidebarDescription') }}
          </div>
        </div>
      </div>
      <div class="col-9 q-pa-lg column-two">
        <div class="certificates-section">
          <div class="text-subtitle1">{{ $t('sections.coursesAndCertifications') }}</div>
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
                      :label="$t('certificates.view')"
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

    <q-dialog v-model="systemInfoDialogOpen">
      <q-card class="system-info-dialog">
        <q-card-section class="row items-center justify-between q-pb-sm">
          <div>
            <div class="text-subtitle1 text-weight-medium">{{ $t('systemInfo.title') }}</div>
            <div class="text-caption text-grey-7">{{ $t('systemInfo.subtitle') }}</div>
          </div>
          <q-btn v-close-popup flat round dense icon="close" />
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pa-none">
          <q-list separator>
            <q-item>
              <q-item-section avatar>
                <q-icon name="commit" color="grey-8" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('systemInfo.version') }}</q-item-label>
                <q-item-label caption>v{{ appVersion }} ({{ appCommit }})</q-item-label>
                <q-item-label caption>
                  {{ $t('systemInfo.builtAt') }}: {{ formattedAppBuiltAt }}
                </q-item-label>
                <q-item-label caption>
                  {{ $t('systemInfo.timeZone') }}: {{ browserTimeZone }}
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="fa-brands fa-github" color="grey-8" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('systemInfo.repository.label') }}</q-item-label>
                <q-item-label caption>{{ $t('systemInfo.repository.description') }}</q-item-label>
                <div class="system-info-links q-mt-xs">
                  <a
                    href="https://github.com/robmoraes/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/robmoraes/portfolio
                  </a>
                </div>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="account_tree" color="grey-8" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('systemInfo.workflow.label') }}</q-item-label>
                <q-item-label caption>{{ $t('systemInfo.workflow.description') }}</q-item-label>
                <div class="system-info-links q-mt-xs">
                  <a
                    href="https://github.com/robmoraes/engineering-playbook/blob/main/github/branches-commits-and-pull-requests.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ $t('systemInfo.workflow.link') }}
                  </a>
                </div>
              </q-item-section>
            </q-item>

            <q-item v-for="item in systemInfoItems" :key="item.label">
              <q-item-section avatar>
                <q-icon :name="item.icon" color="grey-8" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
                <q-item-label caption>{{ item.description }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="language" color="grey-8" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('systemInfo.urls.label') }}</q-item-label>
                <q-item-label caption>
                  {{ $t('systemInfo.urls.description') }}
                </q-item-label>
                <div class="system-info-links q-mt-xs q-pt-md">
                  <div v-for="url in systemInfoUrls" :key="url.href" class="text-caption">
                    {{ url.label }}:
                    <a :href="url.href" target="_blank" rel="noopener noreferrer">{{ url.href }}</a>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
/* global __APP_BUILT_AT__, __APP_COMMIT__, __APP_VERSION__ */
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import VueWordCloud from 'vuewordcloud'
import profilePicture from 'src/assets/about-me-2.png'
import portfolioQrCode from 'src/assets/portfolio-qr.png'
import certDevops from 'src/assets/certs/2022-01-30-devops.jpg'
import certGolang from 'src/assets/certs/2021-03-16-golang.jpg'
import certGolangFromScratch from 'src/assets/certs/2026-06-04-golang.jpg'
import certLinuxSslxpc from 'src/assets/certs/2008-05-linux-sslxpc.jpg'
import certLinuxSslxpi from 'src/assets/certs/2008-08-linux-sslxpi.jpg'
import certOopAnalystTraining from 'src/assets/certs/2006-10-oop-analyst-training.jpg'
import certOopAnalystTrainingBack from 'src/assets/certs/2006-10-oop-analyst-training-back.jpg'
import certOracle from 'src/assets/certs/2008-07-oracle.jpg'
import certWindows2003Training from 'src/assets/certs/2007-03-windows-2003-training.jpg'
import certWindows2003TrainingBack from 'src/assets/certs/2007-03-windows-2003-training-back.jpg'
import areasOfExpertiseEnUS from 'src/data/en-US/areas-of-expertise.json'
import certificationRecordsEnUS from 'src/data/en-US/certification-records.json'
import professionalTrajectoryEnUS from 'src/data/en-US/professional-trajectory.json'
import areasOfExpertisePtBR from 'src/data/pt-BR/areas-of-expertise.json'
import certificationRecordsPtBR from 'src/data/pt-BR/certification-records.json'
import professionalTrajectoryPtBR from 'src/data/pt-BR/professional-trajectory.json'
import mainSkills from 'src/data/main-skills.json'
import trajectoryTags from 'src/data/trajectory-tags.json'

const languageStorageKey = 'portfolio.locale'
const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()
const supportedLocales = ['en-US', 'pt-BR']
const appVersion = __APP_VERSION__
const appCommit = __APP_COMMIT__
const appBuiltAt = __APP_BUILT_AT__

const areasOfExpertiseByLocale = {
  'en-US': areasOfExpertiseEnUS,
  'pt-BR': areasOfExpertisePtBR,
}

const certificationRecordsByLocale = {
  'en-US': certificationRecordsEnUS,
  'pt-BR': certificationRecordsPtBR,
}

const professionalTrajectoryByLocale = {
  'en-US': professionalTrajectoryEnUS,
  'pt-BR': professionalTrajectoryPtBR,
}

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
  {
    key: 'go-2',
    year: '2026',
    name: 'Learn Golang from Scratch',
    src: certGolangFromScratch,
    images: [
      {
        label: 'front',
        src: certGolangFromScratch,
      },
    ],
  },
]

const certificatesByKey = Object.fromEntries(
  certificates.map((certificate) => [certificate.key, certificate]),
)

const areasOfExpertise = computed(
  () => areasOfExpertiseByLocale[locale.value] ?? areasOfExpertiseByLocale['en-US'],
)

const certificationRecords = computed(() =>
  (certificationRecordsByLocale[locale.value] ?? certificationRecordsByLocale['en-US']).map(
    (record) => ({
      ...record,
      certificate: certificatesByKey[record.certificateKey],
    }),
  ),
)

const professionalTrajectory = computed(
  () => professionalTrajectoryByLocale[locale.value] ?? professionalTrajectoryByLocale['en-US'],
)

const trajectoryPage1 = computed(
  () =>
    professionalTrajectory.value.find((page) => page.page === 1) ?? {
      sectionTitle: '',
      entries: [],
    },
)

const trajectoryPage2 = computed(
  () =>
    professionalTrajectory.value.find((page) => page.page === 2) ?? {
      entries: [],
    },
)

const sortedCertificationRecords = computed(() =>
  [...certificationRecords.value].sort((a, b) => a.sortDate.localeCompare(b.sortDate)),
)

const nextLocale = computed(() => (locale.value === 'en-US' ? 'pt-BR' : 'en-US'))
const nextLanguageLabel = computed(() => (nextLocale.value === 'pt-BR' ? 'PT-BR' : 'EN-US'))
const browserTimeZone = computed(
  () => Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Local timezone',
)
const formattedAppBuiltAt = computed(() =>
  new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(new Date(appBuiltAt)),
)

const certificateDialogOpen = ref(false)
const selectedCertificate = ref(null)
const selectedCertificateSlide = ref(null)
const systemInfoDialogOpen = ref(false)

const systemInfoItems = computed(() => [
  {
    icon: 'fa-brands fa-github',
    label: t('systemInfo.ci.label'),
    description: t('systemInfo.ci.description'),
  },
  {
    icon: 'cloud_upload',
    label: t('systemInfo.cd.label'),
    description: t('systemInfo.cd.description'),
  },
  {
    icon: 'dns',
    label: t('systemInfo.domain.label'),
    description: t('systemInfo.domain.description'),
  },
  {
    icon: 'code',
    label: t('systemInfo.builtWith.label'),
    description: t('systemInfo.builtWith.description'),
  },
])

const systemInfoUrls = computed(() => [
  {
    label: t('systemInfo.urls.portuguese'),
    href: 'https://portfolio.robmoraes.dev.br/#/pt-BR',
  },
  {
    label: t('systemInfo.urls.english'),
    href: 'https://portfolio.robmoraes.dev.br/#/en-US',
  },
  {
    label: t('systemInfo.urls.englishFallback'),
    href: 'https://portfolio.robmoraes.dev.br',
  },
])

function toggleLocale() {
  locale.value = nextLocale.value
  localStorage.setItem(languageStorageKey, locale.value)
}

function normalizeLocale(value) {
  return typeof value === 'string' && supportedLocales.includes(value) ? value : null
}

function openCertificate(certificate) {
  selectedCertificate.value = certificate
  selectedCertificateSlide.value = certificate.images[0].src
  certificateDialogOpen.value = true
}

onMounted(async () => {
  const routeLocale = normalizeLocale(route.params.locale)

  if (!routeLocale) {
    return
  }

  locale.value = routeLocale
  localStorage.setItem(languageStorageKey, routeLocale)
  await router.replace('/')
})
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

.language-toggle-sticky {
  z-index: 20;
}

.language-toggle {
  min-width: 104px;
  padding: 8px 14px;
  color: #ffffff;
  background-color: #404040;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
}

.language-toggle :deep(.q-icon) {
  font-size: 18px;
}

.system-info-sticky {
  z-index: 20;
}

.system-info-dialog {
  width: min(92vw, 520px);
  max-width: 92vw;
  border-radius: 8px;
}

.system-info-dialog :deep(.q-item) {
  padding: 14px 18px;
}

.system-info-dialog :deep(.q-item__label--caption) {
  color: #666666;
  line-height: 1.4;
}

.system-info-links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.system-info-links a {
  color: #404040;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #9a9a9a;
}

.system-info-links a:hover {
  border-color: #404040;
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
  display: flex;
  flex-direction: column;
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
  object-fit: cover;
  object-position: center;
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

.main-skill-list {
  display: grid;
  gap: 8px;
  padding: 0 12px;
  color: #404040;
}

.main-skill-item {
  display: grid;
  grid-template-columns: 54px 1fr;
  align-items: center;
  column-gap: 8px;
}

.main-skill-label {
  line-height: 1;
}

.print-skill-bar {
  display: none;
}

.area-of-expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 0 12px;
}

.area-of-expertise-chip {
  margin: 0;
  min-height: 20px;
  font-size: 11px;
  line-height: 1.1;
}

.portfolio-qr {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 22px;
}

.portfolio-qr img {
  width: 104px;
  height: 104px;
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
  color: #4f4f4f;
  font-size: 10px;
  line-height: 1.2;
}

.certification-summary :deep(.q-icon) {
  color: #555555;
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

  .certification-item :deep(.q-expansion-item__toggle-icon) {
    display: none;
  }

  .screen-skill-bar {
    display: none;
  }

  .print-skill-bar {
    display: block;
    width: 100%;
    height: 7px;
    border-bottom: 1px solid #b0b0b0;
  }

  .print-skill-bar span {
    display: block;
    height: 0;
    border-bottom: 6px solid #404040;
  }
}
</style>

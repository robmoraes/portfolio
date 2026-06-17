<template>
  <q-page class="resume-page column items-center q-my-lg">
    <q-page-sticky position="top-left" :offset="[18, 18]" class="nav-toggle-sticky no-print">
      <q-btn
        unelevated
        rounded
        no-caps
        icon="account_tree"
        :label="$t('navigation.portfolio')"
        class="nav-toggle"
        @click="openPortfolio"
      >
        <q-tooltip>{{ $t('navigation.openPortfolio') }}</q-tooltip>
      </q-btn>
    </q-page-sticky>

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

    <div class="resume-sheet">
      <header class="resume-header">
        <div>
          <div class="resume-eyebrow">{{ resumeProfile.eyebrow }}</div>
          <h1>{{ resumeProfile.name }}</h1>
          <p>{{ resumeProfile.role }}</p>
        </div>
      </header>

      <aside class="resume-sidebar">
        <div class="picture-container">
          <img class="picture" :src="profilePicture" alt="Carlos Roberto Moraes" />
        </div>

        <section class="sidebar-section contact-section">
          <h2>{{ $t('resume.contact') }}</h2>
          <a
            v-for="contact in contacts"
            :key="contact.href"
            class="contact-link"
            :href="contact.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-icon :name="contact.icon" size="15px" />
            <span>{{ contact.label }}</span>
          </a>
        </section>

        <section class="sidebar-section">
          <h2>{{ $t('sections.mainSkills') }}</h2>
          <div class="resume-skill-list">
            <div v-for="skill in mainSkills" :key="skill.name" class="resume-skill-item">
              <div class="resume-skill-label">{{ skill.name }}</div>
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
        </section>

        <section class="sidebar-section">
          <h2>{{ resumeProfile.selectedTraining.title }}</h2>
          <ul class="compact-list">
            <li v-for="item in resumeProfile.selectedTraining.items" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="sidebar-section portfolio-section">
          <img :src="resumeQrCode" alt="Resume QR Code" />
          <p>{{ resumeProfile.portfolioCallout }}</p>
        </section>
      </aside>

      <main class="resume-content">
        <section class="summary-section">
          <h2>{{ resumeProfile.title }}</h2>
          <p>{{ resumeProfile.summary }}</p>
          <ul class="positioning-list">
            <li v-for="item in resumeProfile.positioning" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="impact-grid" :aria-label="$t('resume.highlights')">
          <article
            v-for="item in resumeProfile.impactHighlights"
            :key="item.title"
            class="impact-item"
          >
            <q-icon :name="item.icon" size="22px" />
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </div>
          </article>
        </section>

        <section class="section-block">
          <h2>{{ $t('resume.currentSkills') }}</h2>
          <div class="skill-group-grid">
            <article
              v-for="group in resumeProfile.skillGroups"
              :key="group.title"
              class="skill-group"
            >
              <h3>{{ group.title }}</h3>
              <div class="skill-tags">
                <q-chip
                  v-for="item in group.items"
                  :key="item"
                  dense
                  square
                  color="grey-3"
                  text-color="grey-10"
                  class="skill-chip"
                >
                  {{ item }}
                </q-chip>
              </div>
            </article>
          </div>
        </section>

        <section class="section-block experience-section">
          <h2>{{ $t('resume.selectedExperience') }}</h2>
          <article
            v-for="entry in resumeProfile.experience"
            :key="entry.company"
            class="experience-item"
          >
            <div class="experience-heading">
              <div>
                <h3>{{ entry.company }}</h3>
                <p>{{ entry.role }}</p>
              </div>
              <span>{{ entry.period }}</span>
            </div>
            <p>{{ entry.body }}</p>
            <ul v-if="entry.bullets.length" class="compact-list">
              <li v-for="bullet in entry.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </article>
        </section>

        <section class="education-strip">
          <q-icon name="school" size="20px" />
          <div>
            <h2>{{ resumeProfile.education.title }}</h2>
            <p>{{ resumeProfile.education.body }}</p>
          </div>
        </section>
      </main>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import profilePicture from 'src/assets/about-me-2.png'
import resumeQrCode from 'src/assets/resume-qr.png'
import resumeProfileEnUS from 'src/data/en-US/resume-profile.json'
import resumeProfilePtBR from 'src/data/pt-BR/resume-profile.json'
import mainSkills from 'src/data/main-skills.json'

const languageStorageKey = 'portfolio.locale'
const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const supportedLocales = ['en-US', 'pt-BR']

const resumeProfileByLocale = {
  'en-US': resumeProfileEnUS,
  'pt-BR': resumeProfilePtBR,
}

const resumeProfile = computed(
  () => resumeProfileByLocale[locale.value] ?? resumeProfileByLocale['en-US'],
)
const nextLocale = computed(() => (locale.value === 'en-US' ? 'pt-BR' : 'en-US'))
const nextLanguageLabel = computed(() => (nextLocale.value === 'pt-BR' ? 'PT-BR' : 'EN-US'))

const contacts = [
  {
    icon: 'fa-brands fa-linkedin',
    label: 'linkedin.com/in/carlosmoraesjr',
    href: 'https://www.linkedin.com/in/carlosmoraesjr',
  },
  {
    icon: 'fa-brands fa-github',
    label: 'github.com/robmoraes',
    href: 'https://github.com/robmoraes',
  },
  {
    icon: 'fa-brands fa-whatsapp',
    label: '+55 48 99831-4627',
    href: 'https://wa.me/5548998314627',
  },
  {
    icon: 'fa-solid fa-globe',
    label: 'about.robmoraes.dev.br',
    href: 'https://about.robmoraes.dev.br',
  },
]

function toggleLocale() {
  locale.value = nextLocale.value
  localStorage.setItem(languageStorageKey, locale.value)
}

function openPortfolio() {
  router.push('/')
}

function normalizeLocale(value) {
  return typeof value === 'string' && supportedLocales.includes(value) ? value : null
}

onMounted(async () => {
  const routeLocale = normalizeLocale(route.params.locale)

  if (!routeLocale) {
    return
  }

  locale.value = routeLocale
  localStorage.setItem(languageStorageKey, routeLocale)
  await router.replace('/resume')
})
</script>

<style scoped>
.resume-sheet {
  display: grid;
  grid-template-columns: 66mm 1fr;
  grid-template-rows: 32mm minmax(0, 1fr);
  box-sizing: border-box;
  width: 210mm;
  min-width: 210mm;
  height: 297mm;
  max-height: 297mm;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid #404040;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
  color: #303030;
}

.nav-toggle-sticky,
.language-toggle-sticky {
  z-index: 20;
}

.nav-toggle,
.language-toggle {
  min-width: 104px;
  padding: 8px 14px;
  color: #ffffff;
  background-color: #404040;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
}

.nav-toggle :deep(.q-icon),
.language-toggle :deep(.q-icon) {
  font-size: 18px;
}

.resume-header {
  grid-column: 1 / -1;
  display: grid;
  place-items: center;
  padding: 6mm 14mm;
  background-color: #404040;
  color: #ffffff;
  text-align: center;
}

.resume-eyebrow {
  margin-bottom: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.resume-header h1 {
  margin: 0;
  font-size: 24px;
  line-height: 1.15;
  font-weight: 700;
}

.resume-header p {
  margin: 4px 0 0;
  font-size: 12px;
}

.resume-sidebar {
  grid-row: 2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 11px;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding: 7mm 5mm 5mm;
  background-color: #e6e6e6;
}

.picture-container {
  display: flex;
  justify-content: center;
}

.picture {
  width: 96px;
  height: 96px;
  border: 1px solid #404040;
  border-radius: 60%;
  object-fit: cover;
  object-position: center;
}

.sidebar-section {
  display: grid;
  gap: 7px;
}

h2,
h3,
p {
  margin: 0;
}

.sidebar-section h2,
.resume-content h2 {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 700;
  color: #252525;
}

.contact-section {
  gap: 8px;
}

.contact-link {
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 5px;
  color: #404040;
  font-size: 10px;
  line-height: 1.25;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.resume-skill-list {
  display: grid;
  gap: 7px;
}

.resume-skill-item {
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: center;
  gap: 7px;
}

.resume-skill-label {
  font-size: 10px;
  line-height: 1;
  font-weight: 600;
}

.print-skill-bar {
  display: none;
}

.compact-list {
  display: grid;
  gap: 5px;
  margin: 0;
  padding-left: 14px;
  font-size: 10px;
  line-height: 1.35;
}

.portfolio-section {
  margin-top: auto;
  justify-items: center;
  text-align: center;
}

.portfolio-section img {
  width: 82px;
  height: 82px;
}

.portfolio-section p {
  font-size: 9px;
  line-height: 1.35;
  color: #505050;
}

.resume-content {
  grid-row: 2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding: 7mm 8mm;
}

.summary-section {
  display: grid;
  gap: 6px;
}

.summary-section p,
.experience-item p,
.education-strip p {
  font-size: 11px;
  line-height: 1.45;
  color: #404040;
  text-align: justify;
}

.positioning-list {
  display: grid;
  gap: 4px;
  margin: 0;
  padding-left: 16px;
  font-size: 10.5px;
  line-height: 1.35;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.impact-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 6px;
  padding: 6px;
  border: 1px solid #d0d0d0;
  border-left: 4px solid #707070;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.impact-item :deep(.q-icon) {
  color: #404040;
}

.impact-item h3,
.skill-group h3,
.experience-heading h3 {
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  color: #252525;
}

.impact-item p {
  margin-top: 3px;
  font-size: 9px;
  line-height: 1.32;
  color: #505050;
}

.section-block {
  display: grid;
  gap: 6px;
}

.section-block h2,
.summary-section h2 {
  padding-bottom: 4px;
  border-bottom: 1px solid #b8b8b8;
}

.skill-group-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 10px;
}

.skill-group {
  display: grid;
  gap: 5px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.skill-chip {
  margin: 0;
  min-height: 20px;
  font-size: 10px;
  line-height: 1.1;
}

.experience-section {
  gap: 5px;
}

.experience-item {
  display: grid;
  gap: 4px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e1e1e1;
}

.experience-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.experience-heading {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.experience-heading p {
  margin-top: 2px;
  font-size: 10px;
  line-height: 1.2;
  color: #505050;
  text-align: left;
}

.experience-heading span {
  flex: 0 0 auto;
  max-width: 34%;
  font-size: 9px;
  line-height: 1.25;
  color: #606060;
  text-align: right;
}

.education-strip {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 6px;
  align-items: baseline;
  margin-top: auto;
  padding-top: 6px;
  border-top: 1px solid #b8b8b8;
}

.education-strip :deep(.q-icon) {
  color: #404040;
}

.education-strip > div {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: baseline;
}

.education-strip h2 {
  font-size: 11px;
  line-height: 1.2;
}

.education-strip p {
  flex: 1 1 260px;
  font-size: 10px;
  line-height: 1.3;
  text-align: left;
}

@media (max-width: 210mm) {
  .resume-page {
    justify-content: flex-start;
  }
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }

  :global(html),
  :global(body),
  :global(#q-app),
  :global(.q-layout),
  :global(.q-page-container),
  .resume-page {
    background-color: #fff;
    min-height: 0;
    margin: 0;
    padding: 0;
  }

  .resume-sheet {
    box-shadow: unset;
    border: none;
  }

  .resume-header {
    background-color: #fff;
    color: #000;
  }

  .no-print {
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

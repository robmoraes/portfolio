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

    <main class="resume-document">
      <section class="resume-sheet resume-sheet-primary" :aria-label="$t('resume.firstPage')">
        <header class="resume-header">
          <div class="resume-heading">
            <div class="resume-eyebrow">{{ resumeProfile.eyebrow }}</div>
            <h1>{{ resumeProfile.name }}</h1>
            <p class="resume-role">{{ resumeProfile.role }}</p>
            <p class="resume-tagline">{{ resumeProfile.tagline }}</p>
          </div>
          <span class="page-number" aria-hidden="true">01 / 02</span>
        </header>

        <aside class="resume-sidebar">
          <div class="picture-container">
            <img class="picture" :src="profilePicture" :alt="resumeProfile.name" />
          </div>

          <section class="sidebar-section contact-section">
            <h2>{{ $t('resume.contact') }}</h2>
            <div class="contact-link contact-location">
              <q-icon name="place" size="15px" />
              <span>{{ resumeProfile.location }}</span>
            </div>
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

          <section class="sidebar-section foundation-section">
            <h2>{{ $t('resume.technicalFoundation') }}</h2>
            <p>{{ resumeProfile.technicalFoundation }}</p>
            <ul class="compact-list">
              <li v-for="item in resumeProfile.foundationSkills" :key="item">{{ item }}</li>
            </ul>
          </section>

          <a
            class="ats-download"
            href="/carlos-moraes-rodrigues-devops-senior.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <q-icon name="download" size="22px" />
            <span>
              <strong>{{ $t('resume.downloadAts') }}</strong>
              <small>{{ resumeProfile.atsCallout }}</small>
            </span>
          </a>
        </aside>

        <div class="resume-content">
          <section class="summary-section">
            <h2>{{ $t('resume.profile') }}</h2>
            <p>{{ resumeProfile.summary }}</p>
            <ul class="positioning-list">
              <li v-for="item in resumeProfile.positioning" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section class="impact-section">
            <h2>{{ $t('resume.highlights') }}</h2>
            <div class="impact-grid">
              <article
                v-for="item in resumeProfile.impactHighlights"
                :key="item.title"
                class="impact-item"
              >
                <div class="impact-heading">
                  <q-icon :name="item.icon" size="18px" />
                  <strong>{{ item.metric }}</strong>
                </div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.body }}</p>
              </article>
            </div>
          </section>

          <section class="section-block capabilities-section">
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
                    color="blue-grey-1"
                    text-color="blue-grey-10"
                    class="skill-chip"
                  >
                    {{ item }}
                  </q-chip>
                </div>
              </article>
            </div>
          </section>

          <section v-if="featuredExperience" class="section-block experience-section">
            <h2>{{ $t('resume.featuredExperience') }}</h2>
            <article class="experience-item featured-experience">
              <div class="experience-heading">
                <div>
                  <h3>{{ featuredExperience.role }}</h3>
                  <p>
                    <strong>{{ featuredExperience.company }}</strong>
                    <span v-if="featuredExperience.location">
                      · {{ featuredExperience.location }}
                    </span>
                  </p>
                </div>
                <span>{{ featuredExperience.period }}</span>
              </div>
              <p>{{ featuredExperience.body }}</p>
              <ul class="compact-list">
                <li v-for="bullet in featuredExperience.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </article>
          </section>
        </div>
      </section>

      <section class="resume-sheet resume-sheet-secondary" :aria-label="$t('resume.secondPage')">
        <header class="resume-header resume-header-compact">
          <div class="resume-heading">
            <div class="resume-eyebrow">{{ $t('resume.secondPage') }}</div>
            <h1>{{ resumeProfile.name }}</h1>
            <p class="resume-role">{{ resumeProfile.role }}</p>
          </div>
          <span class="page-number" aria-hidden="true">02 / 02</span>
        </header>

        <aside class="resume-sidebar secondary-sidebar">
          <section class="sidebar-section">
            <h2>{{ $t('resume.practices') }}</h2>
            <div class="practice-tags">
              <span v-for="practice in resumeProfile.practices" :key="practice">
                {{ practice }}
              </span>
            </div>
          </section>

          <section class="sidebar-section education-section">
            <h2>{{ $t('resume.education') }}</h2>
            <article v-for="item in resumeProfile.education" :key="item.title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.institution }}</p>
              <span>{{ item.period }}</span>
            </article>
          </section>

          <section class="sidebar-section training-section">
            <h2>{{ $t('resume.selectedTraining') }}</h2>
            <ul class="compact-list">
              <li v-for="item in resumeProfile.selectedTraining" :key="item">{{ item }}</li>
            </ul>
          </section>
        </aside>

        <div class="resume-content secondary-content">
          <section class="section-block experience-section">
            <h2>{{ $t('resume.previousExperience') }}</h2>
            <article
              v-for="entry in previousExperiences"
              :key="`${entry.company}-${entry.period}`"
              class="experience-item"
            >
              <div class="experience-heading">
                <div>
                  <h3>{{ entry.role }}</h3>
                  <p>
                    <strong>{{ entry.company }}</strong>
                    <span v-if="entry.location"> · {{ entry.location }}</span>
                  </p>
                </div>
                <span>{{ entry.period }}</span>
              </div>
              <p>{{ entry.body }}</p>
              <ul v-if="entry.bullets.length" class="compact-list">
                <li v-for="bullet in entry.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </article>
          </section>

          <section class="section-block projects-section">
            <h2>{{ $t('resume.projects') }}</h2>
            <article
              v-for="project in resumeProfile.projects"
              :key="project.name"
              class="project-item"
            >
              <div>
                <h3>{{ project.name }}</h3>
                <p>{{ project.body }}</p>
              </div>
              <a
                :href="project.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${$t('resume.openGithub')}: ${project.name}`"
              >
                <q-icon name="fa-brands fa-github" size="14px" />
                <span>{{ project.linkLabel }}</span>
              </a>
            </article>
          </section>
        </div>
      </section>
    </main>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import profilePicture from 'src/assets/about-me-2.png'
import resumeProfileEnUS from 'src/data/en-US/resume-profile.json'
import resumeProfilePtBR from 'src/data/pt-BR/resume-profile.json'

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
const featuredExperience = computed(() => resumeProfile.value.experience[0])
const previousExperiences = computed(() => resumeProfile.value.experience.slice(1))
const nextLocale = computed(() => (locale.value === 'en-US' ? 'pt-BR' : 'en-US'))
const nextLanguageLabel = computed(() => (nextLocale.value === 'pt-BR' ? 'PT-BR' : 'EN-US'))

const contacts = [
  {
    icon: 'mail',
    label: 'carlos.moraes.as@gmail.com',
    href: 'mailto:carlos.moraes.as@gmail.com',
  },
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
    icon: 'language',
    label: 'portfolio.robmoraes.dev.br',
    href: 'https://portfolio.robmoraes.dev.br',
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
.resume-page {
  gap: 28px;
  padding-bottom: 32px;
}

.resume-document {
  display: grid;
  gap: 28px;
}

.resume-sheet {
  display: grid;
  grid-template-columns: 66mm minmax(0, 1fr);
  grid-template-rows: 34mm minmax(0, 1fr);
  box-sizing: border-box;
  width: 210mm;
  min-width: 210mm;
  height: 297mm;
  max-height: 297mm;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid #3f4850;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.42);
  color: #27313a;
}

.resume-sheet-secondary {
  grid-template-rows: 27mm minmax(0, 1fr);
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
  background-color: #3f4850;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
}

.nav-toggle :deep(.q-icon),
.language-toggle :deep(.q-icon) {
  font-size: 18px;
}

.resume-header {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 5mm 10mm;
  background-color: #3f4850;
  color: #ffffff;
}

.resume-header-compact {
  padding-top: 4mm;
  padding-bottom: 4mm;
}

.resume-heading {
  min-width: 0;
}

.resume-eyebrow {
  margin-bottom: 3px;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  opacity: 0.82;
}

.resume-header h1 {
  margin: 0;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 700;
}

.resume-role {
  margin: 3px 0 0;
  font-size: 14px;
  line-height: 1.15;
  font-weight: 700;
}

.resume-tagline {
  margin: 3px 0 0;
  font-size: 10.5px;
  line-height: 1.25;
  opacity: 0.9;
}

.page-number {
  flex: 0 0 auto;
  align-self: flex-start;
  padding-top: 2px;
  font-size: 9px;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

.resume-sidebar {
  grid-row: 2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding: 6mm 5mm;
  background-color: #edf0f2;
}

.secondary-sidebar {
  padding-top: 8mm;
}

.picture-container {
  display: flex;
  justify-content: center;
}

.picture {
  width: 92px;
  height: 92px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #77818a;
  object-fit: cover;
  object-position: center;
}

.sidebar-section,
.section-block,
.summary-section,
.impact-section {
  display: grid;
  gap: 6px;
}

h2,
h3,
p {
  margin: 0;
}

.sidebar-section h2,
.resume-content h2 {
  padding-bottom: 4px;
  border-bottom: 1px solid #aeb5bb;
  font-size: 12.5px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #27313a;
  text-transform: uppercase;
}

.contact-section {
  gap: 7px;
}

.contact-link {
  display: grid;
  grid-template-columns: 19px minmax(0, 1fr);
  align-items: center;
  gap: 5px;
  color: #35414b;
  font-size: 10.25px;
  line-height: 1.35;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.contact-link:not(.contact-location):hover {
  text-decoration: underline;
}

.contact-location {
  font-weight: 600;
}

.foundation-section p {
  font-size: 10.4px;
  line-height: 1.45;
  color: #3f4850;
}

.compact-list {
  display: grid;
  gap: 4px;
  margin: 0;
  padding-left: 15px;
  font-size: 10.25px;
  line-height: 1.4;
}

.ats-download {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  margin-top: auto;
  padding: 10px;
  border: 1px solid #3f4850;
  border-radius: 4px;
  background-color: #3f4850;
  color: #ffffff;
  text-decoration: none;
}

.ats-download span {
  display: grid;
  gap: 2px;
}

.ats-download strong {
  font-size: 10.5px;
  line-height: 1.2;
}

.ats-download small {
  font-size: 9px;
  line-height: 1.3;
  opacity: 0.86;
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
  padding: 6mm 7mm;
}

.secondary-content {
  gap: 12px;
  padding-top: 8mm;
}

.summary-section > p,
.experience-item > p,
.project-item p {
  font-size: 11px;
  line-height: 1.45;
  color: #3f4850;
}

.positioning-list {
  display: grid;
  gap: 3px;
  margin: 0;
  padding-left: 15px;
  font-size: 10.5px;
  line-height: 1.4;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}

.impact-item {
  display: grid;
  gap: 2px;
  padding: 6px 7px;
  border: 1px solid #d4d8db;
  border-left: 3px solid #596772;
  border-radius: 3px;
  background-color: #f7f8f9;
}

.impact-heading {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #35414b;
}

.impact-heading strong {
  font-size: 13px;
  line-height: 1;
}

.impact-item h3,
.skill-group h3,
.experience-heading h3,
.project-item h3,
.education-section h3 {
  font-size: 10.8px;
  line-height: 1.25;
  font-weight: 700;
  color: #27313a;
}

.impact-item p {
  font-size: 9.8px;
  line-height: 1.35;
  color: #4c5861;
}

.skill-group-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px 9px;
}

.skill-group {
  display: grid;
  align-content: start;
  gap: 4px;
}

.skill-group:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.skill-chip {
  margin: 0;
  min-height: 18px;
  font-size: 9.5px;
  line-height: 1.1;
}

.experience-section {
  gap: 6px;
}

.experience-item {
  display: grid;
  gap: 4px;
  padding-bottom: 6px;
  border-bottom: 1px solid #dfe2e4;
  break-inside: avoid;
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
  font-size: 9.8px;
  line-height: 1.25;
  color: #53606a;
}

.experience-heading > span {
  flex: 0 0 auto;
  max-width: 29%;
  font-size: 9.2px;
  line-height: 1.25;
  color: #65717a;
  text-align: right;
}

.featured-experience .compact-list {
  font-size: 10.5px;
  line-height: 1.4;
}

.secondary-content .experience-item > p {
  font-size: 10.7px;
  line-height: 1.4;
}

.secondary-content .compact-list {
  font-size: 10.5px;
  line-height: 1.35;
}

.practice-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.practice-tags span {
  padding: 4px 6px;
  border: 1px solid #c5cbd0;
  border-radius: 3px;
  background-color: #f8f9fa;
  font-size: 9.6px;
  line-height: 1.2;
}

.education-section article {
  display: grid;
  gap: 2px;
}

.education-section p,
.training-section li {
  font-size: 10.3px;
  line-height: 1.4;
  color: #46525b;
}

.education-section span {
  font-size: 9.2px;
  color: #65717a;
}

.projects-section {
  margin-top: 2px;
}

.project-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
  padding: 7px 8px;
  border: 1px solid #d4d8db;
  border-left: 3px solid #596772;
  border-radius: 3px;
  background-color: #f8f9fa;
  break-inside: avoid;
}

.project-item > div {
  display: grid;
  gap: 2px;
}

.project-item > a {
  display: flex;
  align-items: center;
  gap: 4px;
  max-width: 170px;
  color: #35414b;
  font-size: 9.4px;
  line-height: 1.25;
  text-align: right;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.project-item > a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 820px) {
  .resume-page {
    display: block;
    margin: 0;
    padding-top: 76px;
    padding-bottom: 0;
  }

  .resume-document {
    display: block;
  }

  .resume-sheet {
    display: block;
    width: 100%;
    min-width: 0;
    height: auto;
    max-height: none;
    overflow: visible;
    border: 0;
    box-shadow: none;
  }

  .resume-sheet + .resume-sheet {
    margin-top: 16px;
    border-top: 10px solid #28292a;
  }

  .resume-header {
    padding: 24px;
  }

  .resume-header h1 {
    font-size: clamp(22px, 7vw, 28px);
  }

  .page-number {
    display: none;
  }

  .resume-sidebar,
  .resume-content {
    height: auto;
    min-height: 0;
    overflow: visible;
    padding: 24px;
  }

  .resume-sidebar {
    gap: 18px;
  }

  .picture {
    width: 84px;
    height: 84px;
  }

  .ats-download {
    margin-top: 0;
  }

  .resume-content,
  .secondary-content {
    gap: 18px;
  }

  .impact-grid,
  .skill-group-grid {
    grid-template-columns: 1fr;
  }

  .skill-group:last-child:nth-child(odd) {
    grid-column: auto;
  }

  .experience-heading {
    display: grid;
    gap: 3px;
  }

  .experience-heading > span {
    max-width: none;
    text-align: left;
  }

  .project-item {
    grid-template-columns: 1fr;
  }

  .project-item > a {
    max-width: none;
    text-align: left;
  }
}

@media screen and (max-width: 820px) {
  .resume-role {
    font-size: 17px;
  }

  .resume-eyebrow {
    font-size: 11px;
  }

  .resume-tagline {
    font-size: 13px;
    line-height: 1.35;
  }

  .sidebar-section h2,
  .resume-content h2 {
    font-size: 15px;
  }

  .contact-link {
    font-size: 13px;
  }

  .foundation-section p,
  .summary-section > p,
  .experience-item > p,
  .project-item p {
    font-size: 14px;
    line-height: 1.55;
  }

  .compact-list,
  .positioning-list,
  .featured-experience .compact-list,
  .secondary-content .compact-list {
    font-size: 13.5px;
    line-height: 1.5;
  }

  .impact-heading strong {
    font-size: 16px;
  }

  .impact-item h3,
  .skill-group h3,
  .experience-heading h3,
  .project-item h3,
  .education-section h3 {
    font-size: 14px;
  }

  .impact-item p {
    font-size: 13px;
  }

  .skill-chip {
    min-height: 24px;
    font-size: 12.5px;
  }

  .experience-heading p,
  .experience-heading > span {
    font-size: 12.5px;
  }

  .secondary-content .experience-item > p {
    font-size: 14px;
    line-height: 1.5;
  }

  .practice-tags span,
  .education-section p,
  .training-section li {
    font-size: 13px;
    line-height: 1.45;
  }

  .education-section span,
  .project-item > a {
    font-size: 12.5px;
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
    min-height: 0;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

  .resume-document {
    display: block;
  }

  .resume-sheet {
    margin: 0;
    border: 0;
    box-shadow: none;
    break-after: page;
  }

  .resume-sheet:last-child {
    break-after: auto;
  }

  .resume-header {
    border-bottom: 2px solid #3f4850;
    background-color: #ffffff;
    color: #182028;
  }

  .resume-eyebrow,
  .resume-tagline,
  .page-number {
    opacity: 1;
  }

  .resume-sidebar {
    background-color: #f0f2f3;
  }

  .ats-download {
    border-color: #596772;
    background-color: #ffffff;
    color: #27313a;
  }

  .no-print {
    display: none;
  }
}
</style>

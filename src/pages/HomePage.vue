<template>
  <div>
    <HeroSection />
    <AccrocheCards />
    <AboutPreview />
    <div class="section-divider" style="max-width:1200px;margin:0 auto;padding:0 1.5rem">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M11 2h2v7h7v2h-7v7h-2v-7H4v-2h7V2z" fill="#D7CCC8"/>
      </svg>
    </div>
    <AvisSection />
    <HorairesSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import AccrocheCards from '../components/home/AccrocheCards.vue'
import AboutPreview from '../components/home/AboutPreview.vue'
import AvisSection from '../components/home/AvisSection.vue'
import HorairesSection from '../components/home/HorairesSection.vue'
</script>

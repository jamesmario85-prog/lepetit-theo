<template>
  <section class="horaires-section" ref="sectionRef">
    <div class="horaires-section__inner">
      <div class="horaires-section__content">
        <SectionTitle badge="HORAIRES" title="On vous attend" />
        <HorairesTable />
        <p class="horaires-section__terrasse">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="display:inline;vertical-align:middle;margin-right:6px"><path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" fill="#F9A825"/></svg>
          Terrasse disponible en saison
        </p>
        <a href="tel:4502291221" class="btn-primary" style="margin-top: 1.5rem; display: inline-block;">
          Appeler pour réserver
        </a>
      </div>
      <div class="horaires-section__img">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800"
          alt="Terrasse du restaurant en été"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../shared/SectionTitle.vue'
import HorairesTable from '../shared/HorairesTable.vue'
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
onMounted(() => {
  gsap.from(sectionRef.value.querySelectorAll('.horaires-section__content > *'), {
    opacity: 0, y: 25, duration: 0.5, stagger: 0.1,
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' }
  })
})
</script>

<style scoped>
.horaires-section { padding: 5rem 1.5rem; }
.horaires-section__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.horaires-section__terrasse {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--gris-fumee);
}
.horaires-section__img img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(62, 39, 35, 0.12);
}
@media (max-width: 768px) {
  .horaires-section__inner { grid-template-columns: 1fr; gap: 2rem; }
  .horaires-section__img { display: none; }
}
</style>

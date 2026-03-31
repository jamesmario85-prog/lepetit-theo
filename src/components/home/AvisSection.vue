<template>
  <section class="avis" ref="sectionRef">
    <div class="avis__inner">
      <SectionTitle
        badge="TRIPADVISOR"
        title="Ce que les gens disent"
        subtitle="5 étoiles. Pas par chance — par habitude."
        center
      />
      <div class="avis__grid">
        <div class="avis__card" v-for="avis in avisList" :key="avis.auteur">
          <div class="avis__stars" aria-label="5 étoiles">★★★★★</div>
          <p class="avis__texte">"{{ avis.texte }}"</p>
          <p class="avis__auteur">— {{ avis.auteur }}</p>
        </div>
      </div>
      <div class="avis__badge">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#34E0A1"/>
          <path d="M12 6l1.5 4.5H18l-3.75 2.73 1.43 4.4L12 15.1l-3.68 2.63 1.43-4.4L6 10.5h4.5L12 6z" fill="white"/>
        </svg>
        <span>5 / 5 sur Tripadvisor</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../shared/SectionTitle.vue'
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)

const avisList = [
  { texte: 'Le meilleur smoked meat que j\'ai mangé dans les Laurentides. Service excellent, ambiance super chaleureuse.', auteur: 'Marie-Ève L.' },
  { texte: 'Excellent burger, le Lewis est incroyable. Prix très abordables pour la qualité. On revient c\'est certain !', auteur: 'Patrick G.' },
  { texte: 'Ambiance familiale, tout est bon, on revient chaque semaine. Le personnel est aux petits soins.', auteur: 'Josée T.' },
]

onMounted(() => {
  gsap.from(sectionRef.value.querySelectorAll('.avis__card'), {
    opacity: 0, y: 30, duration: 0.6, stagger: 0.15,
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' }
  })
})
</script>

<style scoped>
.avis {
  background-color: var(--creme-fonce);
  padding: 5rem 1.5rem;
}
.avis__inner { max-width: 1200px; margin: 0 auto; }
.avis__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.avis__card {
  background-color: var(--creme);
  border: 1px solid var(--beige-chaud);
  border-radius: 10px;
  padding: 1.75rem;
}
.avis__stars { color: #F9A825; font-size: 1.2rem; margin-bottom: 0.75rem; }
.avis__texte {
  font-family: 'Lora', serif;
  font-size: 0.95rem;
  color: var(--brun-chaud);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-style: italic;
}
.avis__auteur { font-size: 0.85rem; color: var(--gris-fumee); font-weight: 600; }
.avis__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--brun-chaud);
}
</style>

<template>
  <section class="about-preview" ref="sectionRef">
    <div class="about-preview__inner">
      <div class="about-preview__text">
        <span class="badge-category">NOTRE HISTOIRE</span>
        <h2>Le P'tit Théo, c'est quoi ?</h2>
        <p>
          C'est un petit spot chaleureux niché au cœur de Sainte-Adèle, dans les Laurentides.
          Un endroit où on mange bien, où on se sent chez soi, et où le smoked meat est toujours
          taillé généreux.
        </p>
        <p>
          Cuisine familiale, terrasse l'été, salle à manger confortable à l'année.
          Des recettes maison, des prix honnêtes, et une équipe qui met du cœur dans chaque assiette.
        </p>
        <p>
          Que vous soyez du coin ou de passage dans les Laurentides — on vous attend.
          La panse pleine, le sourire aux lèvres.
        </p>
        <RouterLink to="/a-propos" class="btn-secondary" style="margin-top: 1rem; display: inline-block;">
          Notre histoire
        </RouterLink>
      </div>
      <div class="about-preview__photo">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
          alt="Ambiance chaleureuse du restaurant"
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
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
onMounted(() => {
  gsap.from(sectionRef.value.querySelectorAll('.about-preview__text > *'), {
    opacity: 0, y: 30, duration: 0.6, stagger: 0.1,
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
  })
  gsap.from('.about-preview__photo', {
    opacity: 0, x: 40, duration: 0.8,
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
  })
})
</script>

<style scoped>
.about-preview { padding: 5rem 1.5rem; }
.about-preview__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.about-preview__text h2 { font-size: clamp(1.75rem, 3.5vw, 2.5rem); margin: 0.5rem 0 1.25rem; }
.about-preview__text p {
  color: var(--gris-fumee);
  line-height: 1.75;
  margin-bottom: 0.85rem;
  font-size: 1rem;
}
.about-preview__photo img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(62, 39, 35, 0.15);
}
@media (max-width: 768px) {
  .about-preview__inner { grid-template-columns: 1fr; gap: 2rem; }
  .about-preview__photo { order: -1; }
  .about-preview__photo img { height: 260px; }
}
</style>

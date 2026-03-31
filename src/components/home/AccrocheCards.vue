<template>
  <section class="accroche" ref="sectionRef">
    <div class="accroche__inner">
      <div class="accroche__card" v-for="card in cards" :key="card.titre">
        <div class="accroche__icon" v-html="card.icon"></div>
        <h3>{{ card.titre }}</h3>
        <p>{{ card.texte }}</p>
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

const cards = [
  {
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2C9 6 6 8 6 12a6 6 0 0012 0c0-4-3-6-6-10z" fill="#C0392B"/><path d="M12 8c-1.5 2-2.5 3-2.5 5a2.5 2.5 0 005 0c0-2-1-3-2.5-5z" fill="#F9A825"/></svg>`,
    titre: 'Smoked meat tendre et goûteux',
    texte: 'Fumé lentement, tranché généreux. Notre spécialité depuis le premier jour.',
  },
  {
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M3 17h18v2H3v-2zm1-5h16l-1-7H5L4 12zm4-5h8l.5 3H7.5L8 7z" fill="#C0392B"/></svg>`,
    titre: 'Burgers, poutines, spaghettis',
    texte: 'Du comfort food fait maison. Généreux, savoureux, à prix d\'ami.',
  },
  {
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#C0392B"/></svg>`,
    titre: '5 étoiles. Chaque visite.',
    texte: 'La meilleure note sur Tripadvisor. Pas par hasard — par habitude.',
  },
]

onMounted(() => {
  gsap.from(sectionRef.value.querySelectorAll('.accroche__card'), {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    }
  })
})
</script>

<style scoped>
.accroche {
  background-color: var(--creme-fonce);
  padding: 4rem 1.5rem;
}
.accroche__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}
.accroche__card {
  background-color: var(--creme);
  border: 1px solid var(--beige-chaud);
  border-radius: 10px;
  padding: 2rem 1.5rem;
  text-align: center;
}
.accroche__icon { margin-bottom: 1rem; display: flex; justify-content: center; }
.accroche__card h3 { font-size: 1.1rem; margin-bottom: 0.6rem; }
.accroche__card p { font-size: 0.95rem; color: var(--gris-fumee); line-height: 1.6; }
</style>

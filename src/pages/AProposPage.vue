<template>
  <div class="apropos-page">
    <div class="apropos-page__hero">
      <div class="apropos-page__hero-inner">
        <span class="badge-category">NOTRE HISTOIRE</span>
        <h1>Un p'tit spot qui fait la job.</h1>
        <p>Sainte-Adèle, Laurentides.</p>
      </div>
    </div>

    <div class="apropos-page__content">
      <section class="apropos-page__story" ref="storyRef">
        <div class="apropos-page__story-text">
          <h2>D'où ça vient, Le P'tit Théo ?</h2>
          <p>
            Tout a commencé avec une idée simple : ouvrir un endroit où les gens de Sainte-Adèle
            et des Laurentides pourraient manger du vrai smoked meat — tendre, fumé lentement,
            servi généreux — sans se ruiner et sans chichi.
          </p>
          <p>
            Le P'tit Théo, c'est un local chaleureux au cœur du village. Des murs qui sentent
            le bois fumé, une terrasse l'été, et une cuisine qui tourne à plein régime du
            mercredi au dimanche.
          </p>
          <p>
            On a voulu un endroit familial, accessible à tous les âges, où les habitués
            se sentent chez eux et où les touristes de passage repartent avec l'envie de revenir.
            C'est bon en titi. On vous attend.
          </p>
        </div>
        <div class="apropos-page__story-img">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
            alt="Intérieur chaleureux du restaurant"
            loading="lazy"
          />
        </div>
      </section>

      <div class="section-divider">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2C9 6 6 8 6 12a6 6 0 0012 0c0-4-3-6-6-10z" fill="#D7CCC8"/>
        </svg>
      </div>

      <section class="apropos-page__equipe" ref="equipeRef">
        <SectionTitle badge="L'ÉQUIPE" title="Des gens passionnés" center />
        <div class="apropos-page__equipe-text">
          <p>
            Derrière chaque assiette, il y a une petite équipe dédiée qui met du cœur à l'ouvrage.
            Des propriétaires qui ont choisi de faire les choses bien plutôt que vite.
            Des cuisiniers qui respectent les recettes maison. Un service attentionné qui
            connaît ses clients par leur prénom.
          </p>
          <p>
            Pas de grande chaîne, pas de cuisine industrielle. Juste des gens qui aiment
            cuisiner et qui aiment encore plus voir les gens manger avec le sourire.
          </p>
        </div>
      </section>

      <div class="section-divider">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2C9 6 6 8 6 12a6 6 0 0012 0c0-4-3-6-6-10z" fill="#D7CCC8"/>
        </svg>
      </div>

      <section class="apropos-page__valeurs" ref="valeursRef">
        <SectionTitle badge="NOS VALEURS" title="Ce en quoi on croit" center />
        <div class="apropos-page__valeurs-grid">
          <div class="apropos-page__valeur-card" v-for="v in valeurs" :key="v.titre">
            <div class="apropos-page__valeur-icon" v-html="v.icon"></div>
            <h3>{{ v.titre }}</h3>
            <p>{{ v.texte }}</p>
          </div>
        </div>
      </section>

      <div class="apropos-page__cta">
        <h2>Venez voir par vous-même.</h2>
        <p>31, rue Morin, Sainte-Adèle. On est là du mercredi au dimanche.</p>
        <div class="apropos-page__cta-btns">
          <RouterLink to="/menu" class="btn-primary">Voir le menu</RouterLink>
          <RouterLink to="/contact" class="btn-secondary">Nous trouver</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../components/shared/SectionTitle.vue'
gsap.registerPlugin(ScrollTrigger)

const storyRef = ref(null)
const equipeRef = ref(null)
const valeursRef = ref(null)

const valeurs = [
  {
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2C9 6 6 8 6 12a6 6 0 0012 0c0-4-3-6-6-10z" fill="#C0392B"/><path d="M12 8c-1.5 2-2.5 3-2.5 5a2.5 2.5 0 005 0c0-2-1-3-2.5-5z" fill="#F9A825"/></svg>`,
    titre: 'Fait maison',
    texte: 'Recettes maison, pas de réchauffé. Chaque plat est préparé avec soin dans notre cuisine.',
  },
  {
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F9A825"/></svg>`,
    titre: 'Prix abordables',
    texte: 'La qualité sans se ruiner. On croit que bien manger ne devrait pas coûter une fortune.',
  },
  {
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#C0392B"/></svg>`,
    titre: 'Ambiance familiale',
    texte: 'Tous les âges bienvenus. Un endroit où on se sent à l\'aise, entre amis ou en famille.',
  },
]

onMounted(() => {
  gsap.from(storyRef.value.querySelectorAll('h2, p'), {
    opacity: 0, y: 25, duration: 0.6, stagger: 0.1,
    scrollTrigger: { trigger: storyRef.value, start: 'top 80%' }
  })
  gsap.from('.apropos-page__story-img', {
    opacity: 0, x: 30, duration: 0.8,
    scrollTrigger: { trigger: storyRef.value, start: 'top 80%' }
  })
  gsap.from(valeursRef.value.querySelectorAll('.apropos-page__valeur-card'), {
    opacity: 0, y: 30, duration: 0.5, stagger: 0.15,
    scrollTrigger: { trigger: valeursRef.value, start: 'top 85%' }
  })
})
</script>

<style scoped>
.apropos-page__hero {
  background-color: var(--brun-fumee);
  padding: 5rem 1.5rem 4rem;
}
.apropos-page__hero-inner { max-width: 1200px; margin: 0 auto; }
.apropos-page__hero h1 {
  color: var(--creme);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 0.5rem 0 0.75rem;
}
.apropos-page__hero p {
  color: rgba(253, 246, 236, 0.7);
  font-family: 'Lora', serif;
  font-size: 1.05rem;
}
.apropos-page__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}
.apropos-page__story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 1rem;
}
.apropos-page__story-text h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  margin-bottom: 1.25rem;
}
.apropos-page__story-text p {
  color: var(--gris-fumee);
  line-height: 1.75;
  margin-bottom: 0.85rem;
  font-size: 1rem;
}
.apropos-page__story-img img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(62, 39, 35, 0.15);
}
.apropos-page__equipe-text {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
.apropos-page__equipe-text p {
  color: var(--gris-fumee);
  line-height: 1.75;
  margin-bottom: 0.85rem;
  font-size: 1rem;
}
.apropos-page__valeurs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}
.apropos-page__valeur-card {
  background-color: var(--creme-fonce);
  border: 1px solid var(--beige-chaud);
  border-radius: 10px;
  padding: 2rem 1.5rem;
  text-align: center;
}
.apropos-page__valeur-icon { margin-bottom: 1rem; display: flex; justify-content: center; }
.apropos-page__valeur-card h3 { font-size: 1.1rem; margin-bottom: 0.6rem; }
.apropos-page__valeur-card p { font-size: 0.9rem; color: var(--gris-fumee); line-height: 1.6; }
.apropos-page__cta {
  text-align: center;
  background-color: var(--creme-fonce);
  border-radius: 12px;
  padding: 3.5rem 2rem;
  margin-top: 3rem;
}
.apropos-page__cta h2 { font-size: clamp(1.75rem, 3.5vw, 2.5rem); margin-bottom: 0.75rem; }
.apropos-page__cta p { color: var(--gris-fumee); margin-bottom: 1.75rem; font-size: 1rem; }
.apropos-page__cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
@media (max-width: 768px) {
  .apropos-page__story { grid-template-columns: 1fr; gap: 2rem; }
  .apropos-page__story-img { order: -1; }
  .apropos-page__story-img img { height: 260px; }
}
</style>

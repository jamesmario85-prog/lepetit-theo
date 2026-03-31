<template>
  <div class="contact-page">
    <div class="contact-page__hero">
      <div class="contact-page__hero-inner">
        <span class="badge-category">NOUS TROUVER</span>
        <h1>On est à Sainte-Adèle.</h1>
        <p>31, rue Morin — à deux pas du centre-ville.</p>
      </div>
    </div>

    <div class="contact-page__content">
      <div class="contact-page__grid">

        <div class="contact-page__info" ref="infoRef">
          <div class="contact-page__info-block">
            <h3>Adresse</h3>
            <p>31, rue Morin<br>Sainte-Adèle, QC J8B 2P6</p>
            <a
              href="https://maps.google.com/?q=31+rue+Morin+Sainte-Adele+QC"
              target="_blank"
              rel="noopener"
              class="contact-page__map-link"
            >
              Ouvrir dans Google Maps →
            </a>
          </div>

          <div class="contact-page__info-block">
            <h3>Téléphone</h3>
            <a href="tel:4502291221" class="contact-page__tel">(450) 229-1221</a>
          </div>

          <div class="contact-page__info-block">
            <h3>Suivez-nous</h3>
            <a
              href="https://facebook.com/profile.php?id=61577898900975"
              target="_blank"
              rel="noopener"
              class="contact-page__fb"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Le P'tit Théo sur Facebook
            </a>
          </div>

          <div class="contact-page__info-block">
            <h3>Horaires</h3>
            <HorairesTable />
          </div>

          <div class="contact-page__info-block contact-page__groupe">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="flex-shrink:0;margin-top:2px">
              <circle cx="12" cy="12" r="10" stroke="#795548" stroke-width="1.5"/>
              <path d="M12 8v4m0 4h.01" stroke="#795548" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <p>Pour les groupes de 8 personnes et plus, nous vous conseillons d'appeler à l'avance.</p>
          </div>
        </div>

        <div class="contact-page__right">
          <div class="contact-page__map">
            <iframe
              title="Localisation du P'tit Théo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5!2d-74.1300!3d45.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf5b0000000001%3A0x1!2s31+Rue+Morin%2C+Sainte-Ad%C3%A8le%2C+QC+J8B+2P6!5e0!3m2!1sfr!2sca!4v1"
              width="100%"
              height="300"
              style="border:0;border-radius:10px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="contact-page__form-wrap">
            <h2>Envoyez-nous un message</h2>
            <p>On vous répond dans les plus brefs délais.</p>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HorairesTable from '../components/shared/HorairesTable.vue'
import ContactForm from '../components/shared/ContactForm.vue'
gsap.registerPlugin(ScrollTrigger)

const infoRef = ref(null)
onMounted(() => {
  gsap.from(infoRef.value.querySelectorAll('.contact-page__info-block'), {
    opacity: 0, y: 20, duration: 0.5, stagger: 0.1,
    scrollTrigger: { trigger: infoRef.value, start: 'top 85%' }
  })
})
</script>

<style scoped>
.contact-page__hero {
  background-color: var(--brun-fumee);
  padding: 5rem 1.5rem 4rem;
}
.contact-page__hero-inner { max-width: 1200px; margin: 0 auto; }
.contact-page__hero h1 {
  color: var(--creme);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 0.5rem 0 0.75rem;
}
.contact-page__hero p {
  color: rgba(253, 246, 236, 0.7);
  font-family: 'Lora', serif;
  font-size: 1.05rem;
}
.contact-page__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}
.contact-page__grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: flex-start;
}
.contact-page__info { display: flex; flex-direction: column; gap: 2rem; }
.contact-page__info-block h3 {
  font-family: 'Lora', serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gris-fumee);
  margin-bottom: 0.4rem;
}
.contact-page__info-block p {
  color: var(--noir-doux);
  line-height: 1.6;
  font-size: 0.95rem;
}
.contact-page__map-link {
  display: inline-block;
  margin-top: 0.4rem;
  color: var(--rouge-viande);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}
.contact-page__map-link:hover { text-decoration: underline; }
.contact-page__tel {
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--rouge-viande);
  text-decoration: none;
}
.contact-page__fb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--brun-chaud);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
}
.contact-page__fb:hover { color: var(--rouge-viande); }
.contact-page__groupe {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  background-color: var(--creme-fonce);
  border: 1px solid var(--beige-chaud);
  border-radius: 8px;
  padding: 1rem;
}
.contact-page__groupe p { font-size: 0.88rem; color: var(--gris-fumee); line-height: 1.6; }
.contact-page__map { margin-bottom: 2.5rem; }
.contact-page__form-wrap h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-bottom: 0.4rem;
}
.contact-page__form-wrap > p {
  color: var(--gris-fumee);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}
@media (max-width: 900px) {
  .contact-page__grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>

<template>
  <section class="hero" ref="heroRef">
    <div class="hero__bg">
      <img
        src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1400"
        alt="Assiette de smoked meat généreuse"
        class="hero__img"
      />
      <div class="hero__overlay"></div>
    </div>
    <div class="hero__content">
      <span class="badge-category hero__badge">SPÉCIALITÉ MAISON</span>
      <h1 class="hero__title">Le smoked meat<br>des Laurentides.</h1>
      <p class="hero__sub">Fait maison. Généreusement. À Sainte-Adèle.</p>
      <div class="hero__ctas">
        <RouterLink to="/menu" class="btn-primary">Voir le menu</RouterLink>
        <RouterLink to="/contact" class="btn-secondary hero__btn-sec">Nous trouver</RouterLink>
      </div>
      <div class="hero__mobile-info">
        <a href="tel:4502291221" class="hero__tel">📞 (450) 229-1221</a>
        <span class="hero__hours-badge">Mer–Sam &amp; Dim : 11h–20h</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref(null)

onMounted(() => {
  gsap.from('.hero__badge', { opacity: 0, y: 20, duration: 0.6, delay: 0.2 })
  gsap.from('.hero__title', { opacity: 0, y: 30, duration: 0.7, delay: 0.4 })
  gsap.from('.hero__sub',   { opacity: 0, y: 20, duration: 0.6, delay: 0.6 })
  gsap.from('.hero__ctas',  { opacity: 0, y: 20, duration: 0.6, delay: 0.8 })
  gsap.from('.hero__mobile-info', { opacity: 0, duration: 0.6, delay: 1 })
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
}
.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(30, 15, 10, 0.78) 0%,
    rgba(30, 15, 10, 0.45) 60%,
    rgba(30, 15, 10, 0.2) 100%
  );
}
.hero__content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
  width: 100%;
}
.hero__badge { margin-bottom: 1rem; display: inline-block; }
.hero__title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 2px 12px rgba(0,0,0,0.3);
}
.hero__sub {
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: rgba(253, 246, 236, 0.9);
  margin-bottom: 2rem;
  font-family: 'Lora', serif;
}
.hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
.hero__btn-sec {
  color: #fff !important;
  border-color: rgba(255,255,255,0.6) !important;
}
.hero__btn-sec:hover { background-color: rgba(255,255,255,0.1) !important; }
.hero__mobile-info {
  display: none;
  margin-top: 2rem;
  flex-direction: column;
  gap: 0.5rem;
}
.hero__tel {
  color: #fff;
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
}
.hero__hours-badge {
  display: inline-block;
  background-color: rgba(249, 168, 37, 0.2);
  color: #F9A825;
  font-family: 'Libre Baskerville', serif;
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 4px;
  width: fit-content;
}
@media (max-width: 768px) {
  .hero { min-height: 100svh; }
  .hero__overlay {
    background: rgba(30, 15, 10, 0.65);
  }
  .hero__mobile-info { display: flex; }
}
</style>

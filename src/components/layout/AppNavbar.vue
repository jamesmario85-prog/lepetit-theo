<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled }]">
    <div class="navbar__inner">
      <RouterLink to="/" class="navbar__logo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2C9 6 6 8 6 12a6 6 0 0012 0c0-4-3-6-6-10z" fill="#C0392B"/>
          <path d="M12 8c-1.5 2-2.5 3-2.5 5a2.5 2.5 0 005 0c0-2-1-3-2.5-5z" fill="#F9A825"/>
        </svg>
        <span>Le P'tit Théo</span>
      </RouterLink>

      <nav class="navbar__links" aria-label="Navigation principale">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/a-propos">Notre histoire</RouterLink>
        <RouterLink to="/contact">Nous trouver</RouterLink>
        <a href="tel:4502291221" class="navbar__tel">(450) 229-1221</a>
      </nav>

      <button class="navbar__burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div :class="['navbar__mobile', { 'navbar__mobile--open': menuOpen }]" @click="menuOpen = false">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/menu">Menu</RouterLink>
      <RouterLink to="/a-propos">Notre histoire</RouterLink>
      <RouterLink to="/contact">Nous trouver</RouterLink>
      <a href="tel:4502291221" class="navbar__tel-mobile">(450) 229-1221</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--creme);
  transition: box-shadow 0.3s ease;
}
.navbar--scrolled {
  box-shadow: 0 2px 12px rgba(62, 39, 35, 0.12);
}
.navbar__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--brun-fumee);
}
.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.navbar__links a {
  font-family: 'Source Sans 3', sans-serif;
  color: var(--brun-chaud);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.navbar__links a:hover,
.navbar__links a.router-link-active {
  color: var(--rouge-viande);
}
.navbar__tel {
  font-family: 'Libre Baskerville', serif !important;
  font-weight: 700 !important;
  color: var(--rouge-viande) !important;
  font-size: 0.9rem !important;
}
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.navbar__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--brun-fumee);
  border-radius: 2px;
}
.navbar__mobile {
  display: none;
  flex-direction: column;
  background-color: var(--creme);
  padding: 1rem 1.5rem 1.5rem;
  gap: 1.25rem;
  border-top: 1px solid var(--beige-chaud);
}
.navbar__mobile a {
  font-family: 'Source Sans 3', sans-serif;
  color: var(--brun-chaud);
  text-decoration: none;
  font-size: 1.1rem;
}
.navbar__mobile a.router-link-active { color: var(--rouge-viande); }
.navbar__tel-mobile {
  font-family: 'Libre Baskerville', serif !important;
  font-weight: 700 !important;
  color: var(--rouge-viande) !important;
  font-size: 1.1rem !important;
}

@media (max-width: 768px) {
  .navbar__links { display: none; }
  .navbar__burger { display: flex; }
  .navbar__mobile--open { display: flex; }
}
</style>

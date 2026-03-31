<template>
  <div class="menu-category" ref="catRef">
    <div class="menu-category__header">
      <span class="badge-category">{{ category.badge }}</span>
      <h2 class="menu-category__title">{{ category.titre }}</h2>
      <p v-if="category.intro" class="menu-category__intro">{{ category.intro }}</p>
    </div>
    <div class="menu-category__grid">
      <MenuItemCard v-for="item in category.items" :key="item.nom" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MenuItemCard from './MenuItemCard.vue'
gsap.registerPlugin(ScrollTrigger)

defineProps({ category: Object })
const catRef = ref(null)

onMounted(() => {
  gsap.from(catRef.value.querySelectorAll('.menu-card'), {
    opacity: 0, y: 25, duration: 0.5, stagger: 0.08,
    scrollTrigger: { trigger: catRef.value, start: 'top 85%' }
  })
})
</script>

<style scoped>
.menu-category { margin-bottom: 4rem; }
.menu-category__header { margin-bottom: 1.5rem; }
.menu-category__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-top: 0.4rem;
  margin-bottom: 0.5rem;
}
.menu-category__intro { color: var(--gris-fumee); font-size: 0.95rem; line-height: 1.6; }
.menu-category__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
</style>

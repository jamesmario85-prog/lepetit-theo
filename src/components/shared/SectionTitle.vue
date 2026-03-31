<template>
  <div class="section-title" :class="{ 'section-title--center': center }">
    <span v-if="badge" class="badge-category">{{ badge }}</span>
    <h2>{{ title }}</h2>
    <p v-if="subtitle" class="section-title__sub">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  badge: String,
  center: Boolean,
})
</script>

<style scoped>
.section-title { margin-bottom: 2.5rem; }
.section-title--center { text-align: center; }
.section-title h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); margin-top: 0.5rem; }
.section-title__sub {
  margin-top: 0.75rem;
  font-size: 1.05rem;
  color: var(--gris-fumee);
  max-width: 560px;
}
.section-title--center .section-title__sub { margin-left: auto; margin-right: auto; }
</style>

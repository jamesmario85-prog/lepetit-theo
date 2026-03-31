<template>
  <div class="menu-card">
    <div class="menu-card__header">
      <h3 class="menu-card__name">{{ item.nom }}</h3>
      <span class="menu-card__prix">{{ item.prix }}</span>
    </div>
    <p class="menu-card__desc">{{ item.description }}</p>
    <span v-if="item.badge" class="badge-category menu-card__badge">{{ item.badge }}</span>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>

<style scoped>
.menu-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.menu-card__name {
  font-family: 'Lora', serif;
  font-size: 1.05rem;
  color: var(--brun-fumee);
  line-height: 1.3;
}
.menu-card__prix {
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  color: var(--rouge-viande);
  font-size: 1rem;
  white-space: nowrap;
}
.menu-card__desc {
  font-size: 0.9rem;
  color: var(--gris-fumee);
  line-height: 1.6;
}
.menu-card__badge { margin-top: 0.75rem; display: inline-block; }
</style>

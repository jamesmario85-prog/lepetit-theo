<template>
  <table class="horaires-table">
    <tbody>
      <tr v-for="jour in horaires" :key="jour.nom" :class="{ 'horaires-table__today': jour.today }">
        <td class="horaires-table__jour">{{ jour.nom }}</td>
        <td class="horaires-table__heure" :class="{ 'horaires-table__ferme': jour.ferme }">
          {{ jour.ferme ? 'Fermé' : jour.heures }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const today = new Date().getDay() // 0=dim, 1=lun...

const horaires = [
  { nom: 'Dimanche',  heures: '11h — 20h', ferme: false, today: today === 0 },
  { nom: 'Lundi',     heures: '',           ferme: true,  today: today === 1 },
  { nom: 'Mardi',     heures: '',           ferme: true,  today: today === 2 },
  { nom: 'Mercredi',  heures: '11h — 20h', ferme: false, today: today === 3 },
  { nom: 'Jeudi',     heures: '11h — 20h', ferme: false, today: today === 4 },
  { nom: 'Vendredi',  heures: '11h — 20h', ferme: false, today: today === 5 },
  { nom: 'Samedi',    heures: '11h — 20h', ferme: false, today: today === 6 },
]
</script>

<style scoped>
.horaires-table { width: 100%; border-collapse: collapse; }
.horaires-table tr { border-bottom: 1px solid var(--beige-chaud); }
.horaires-table tr:last-child { border-bottom: none; }
.horaires-table td { padding: 0.6rem 0.25rem; font-size: 0.95rem; }
.horaires-table__jour { color: var(--brun-chaud); font-weight: 500; }
.horaires-table__heure { text-align: right; color: var(--noir-doux); font-weight: 600; }
.horaires-table__ferme { color: var(--gris-fumee) !important; font-weight: 400 !important; }
.horaires-table__today td { background-color: rgba(192, 57, 43, 0.06); border-radius: 4px; }
.horaires-table__today .horaires-table__jour { color: var(--rouge-viande); font-weight: 700; }
</style>

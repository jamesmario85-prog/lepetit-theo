<template>
  <form class="contact-form" @submit.prevent="submit">
    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="prenom">Prénom</label>
        <input id="prenom" v-model="form.prenom" type="text" placeholder="Votre prénom" required />
      </div>
      <div class="contact-form__field">
        <label for="nom">Nom</label>
        <input id="nom" v-model="form.nom" type="text" placeholder="Votre nom" required />
      </div>
    </div>
    <div class="contact-form__field">
      <label for="courriel">Courriel</label>
      <input id="courriel" v-model="form.courriel" type="email" placeholder="votre@courriel.com" required />
    </div>
    <div class="contact-form__field">
      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" rows="5" placeholder="Votre message..." required></textarea>
    </div>

    <div v-if="success" class="contact-form__success" role="alert">
      ✓ Votre message a bien été envoyé. On vous revient bientôt !
    </div>
    <div v-if="error" class="contact-form__error" role="alert">
      Une erreur s'est produite. Appelez-nous au (450) 229-1221.
    </div>

    <button type="submit" class="btn-primary" :disabled="loading">
      {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ prenom: '', nom: '', courriel: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref(false)

async function submit() {
  loading.value = true
  error.value = false
  success.value = false
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) throw new Error()
    success.value = true
    Object.assign(form, { prenom: '', nom: '', courriel: '', message: '' })
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
.contact-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.contact-form__field { display: flex; flex-direction: column; gap: 0.4rem; }
label {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--brun-chaud);
}
input, textarea {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.95rem;
  padding: 0.7rem 1rem;
  border: 1px solid var(--beige-chaud);
  border-radius: 6px;
  background-color: var(--creme);
  color: var(--noir-doux);
  transition: border-color 0.2s;
  resize: vertical;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--rouge-viande);
}
button:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
.contact-form__success {
  padding: 0.85rem 1rem;
  background-color: rgba(46, 125, 50, 0.1);
  border: 1px solid rgba(46, 125, 50, 0.3);
  border-radius: 6px;
  color: #2e7d32;
  font-size: 0.95rem;
}
.contact-form__error {
  padding: 0.85rem 1rem;
  background-color: rgba(192, 57, 43, 0.08);
  border: 1px solid rgba(192, 57, 43, 0.3);
  border-radius: 6px;
  color: var(--rouge-viande);
  font-size: 0.95rem;
}
@media (max-width: 600px) {
  .contact-form__row { grid-template-columns: 1fr; }
}
</style>

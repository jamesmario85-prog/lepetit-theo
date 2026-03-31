// Resend email handler — à utiliser côté serveur (ex: Vercel Edge Function, Netlify Function)
// Le formulaire ContactForm.vue envoie un POST à /api/contact

/*
  Exemple de handler Vercel (api/contact.js) :

  import { Resend } from 'resend'
  const resend = new Resend(process.env.RESEND_API_KEY)

  export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end()
    const { prenom, nom, courriel, message } = req.body
    await resend.emails.send({
      from: 'site@lepetittheo.ca',
      to: 'info@lepetittheo.ca',
      subject: `Message de ${prenom} ${nom}`,
      html: `<p><strong>De :</strong> ${prenom} ${nom} (${courriel})</p><p>${message}</p>`,
    })
    res.status(200).json({ ok: true })
  }
*/

export async function sendContactEmail({ prenom, nom, courriel, message }) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prenom, nom, courriel, message }),
  })
  if (!res.ok) throw new Error('Erreur envoi courriel')
  return res.json()
}

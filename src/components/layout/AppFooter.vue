<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C9 6 6 8 6 12a6 6 0 0012 0c0-4-3-6-6-10z" fill="#C0392B"/>
            <path d="M12 8c-1.5 2-2.5 3-2.5 5a2.5 2.5 0 005 0c0-2-1-3-2.5-5z" fill="#F9A825"/>
          </svg>
          <span>Le P'tit Théo</span>
        </div>
        <p>Smoked meat &amp; comfort food<br>Sainte-Adèle, Laurentides</p>
      </div>

      <div class="footer__info">
        <p>31, rue Morin<br>Sainte-Adèle, QC J8B 2P6</p>
        <a href="tel:4502291221">(450) 229-1221</a>
        <a href="https://facebook.com/profile.php?id=61577898900975" target="_blank" rel="noopener">Facebook</a>
      </div>

      <div class="footer__hours">
        <p class="footer__hours-title">Horaires</p>
        <p>Mer — Sam : 11h à 20h</p>
        <p>Dimanche : 11h à 20h</p>
        <p>Lun — Mar : Fermé</p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© {{ new Date().getFullYear() }} Le P'tit Théo. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--brun-fumee);
  color: var(--creme);
  padding: 3rem 1.5rem 1.5rem;
}
.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(253, 246, 236, 0.15);
}
.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
}
.footer__brand p {
  font-size: 0.9rem;
  opacity: 0.75;
  line-height: 1.6;
}
.footer__info, .footer__hours {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  opacity: 0.85;
  line-height: 1.6;
}
.footer__info a {
  color: var(--creme);
  text-decoration: none;
  transition: opacity 0.2s;
}
.footer__info a:hover { opacity: 0.7; }
.footer__hours-title {
  font-family: 'Lora', serif;
  font-weight: 600;
  opacity: 1;
  margin-bottom: 0.25rem;
}
.footer__bottom {
  max-width: 1200px;
  margin: 1.25rem auto 0;
  font-size: 0.8rem;
  opacity: 0.5;
  text-align: center;
}
</style>

<template>
  <div class="menu-page">
    <div class="menu-page__hero">
      <div class="menu-page__hero-inner">
        <span class="badge-category">NOTRE MENU</span>
        <h1>Ce qu'on mange au P'tit Théo</h1>
        <p>Fait maison. Généreux. À prix d'ami.</p>
      </div>
    </div>

    <div class="menu-page__content">
      <MenuCategory v-for="cat in categories" :key="cat.titre" :category="cat" />

      <div class="menu-page__note">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="flex-shrink:0;margin-top:2px">
          <circle cx="12" cy="12" r="10" stroke="#795548" stroke-width="1.5"/>
          <path d="M12 8v4m0 4h.01" stroke="#795548" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p>
          Notre menu peut varier selon les arrivages et les saisons.
          Appelez-nous au <a href="tel:4502291221">(450) 229-1221</a> pour toute question.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuCategory from '../components/menu/MenuCategory.vue'

const categories = [
  {
    badge: 'SPÉCIALITÉ MAISON',
    titre: 'Smoked Meat',
    intro: 'Notre fierté. Fumé lentement, tranché généreux, servi avec amour.',
    items: [
      { nom: 'Assiette complète de smoked meat', description: 'Sandwich smoked meat, frites maison et salade de chou crémeuse. Le classique indétrônable.', prix: '18,95 $', badge: 'SIGNATURE' },
      { nom: 'Sandwich smoked meat', description: 'Pain de seigle grillé, moutarde jaune, smoked meat taillé épais. Simple et parfait.', prix: '14,95 $' },
      { nom: 'Poutine au smoked meat', description: 'Frites croustillantes, fromage en grains frais, sauce brune maison et smoked meat généreux.', prix: '16,95 $' },
    ]
  },
  {
    badge: 'BURGERS',
    titre: 'Burgers',
    intro: 'Des burgers qui tiennent dans les mains — et dans la mémoire.',
    items: [
      { nom: 'Le Lewis', description: 'Notre burger signature. Double galette, cheddar fondu, bacon croustillant, sauce maison secrète. Difficile de s\'arrêter à un.', prix: '17,95 $', badge: 'SIGNATURE' },
      { nom: 'Burger classique', description: 'Galette de bœuf, laitue, tomate, oignon, cornichon, ketchup et moutarde. Le classique qui ne déçoit jamais.', prix: '14,95 $' },
      { nom: 'Burger bacon cheese', description: 'Galette de bœuf, bacon fumé, cheddar fondant, oignons caramélisés. Généreux et savoureux.', prix: '16,95 $' },
      { nom: 'Végé burger', description: 'Galette végétale, avocat, roquette, tomate, mayo au citron. Aussi bon que les autres — promis.', prix: '15,95 $' },
    ]
  },
  {
    badge: 'POUTINES',
    titre: 'Poutines',
    intro: 'Frites maison, fromage en grains frais du Québec, sauce brune mijotée.',
    items: [
      { nom: 'Poutine classique', description: 'Frites, fromage en grains, sauce brune maison. La base, faite comme il faut.', prix: '11,95 $' },
      { nom: 'Poutine smoked meat', description: 'La classique avec une généreuse portion de smoked meat par-dessus. Ça parle.', prix: '15,95 $' },
      { nom: 'Poutine du chef', description: 'Garnitures maison qui changent selon l\'inspiration du jour. Demandez au serveur.', prix: '14,95 $', badge: 'DU JOUR' },
    ]
  },
  {
    badge: 'SPAGHETTIS',
    titre: 'Spaghettis',
    intro: 'Mijotés longtemps, servis chauds. Du réconfort dans une assiette.',
    items: [
      { nom: 'Spaghetti bolognaise maison', description: 'Sauce à la viande mijotée des heures, tomates fraîches, herbes du jardin. Comme chez maman.', prix: '15,95 $' },
      { nom: 'Spaghetti viande braisée', description: 'Viande braisée longuement, sauce riche et profonde, parmesan râpé. Un plat qui réchauffe l\'âme.', prix: '17,95 $' },
    ]
  },
  {
    badge: 'SALADES',
    titre: 'Salades',
    intro: 'Fraîches, généreuses, avec une vraie vinaigrette maison.',
    items: [
      { nom: 'Salade du jardin', description: 'Laitue mixte, tomates cerises, concombre, carottes, vinaigrette maison au choix.', prix: '9,95 $' },
      { nom: 'Salade repas', description: 'Laitue, poulet grillé, fromage, noix grillées, canneberges, vinaigrette balsamique. Un repas complet.', prix: '14,95 $' },
    ]
  },
  {
    badge: 'DESSERTS',
    titre: 'Desserts',
    intro: 'Faits maison. Parce qu\'un bon repas mérite une belle fin.',
    items: [
      { nom: 'Gâteau du jour', description: 'Demandez à votre serveur — ça change selon l\'humeur de la cuisine. Toujours une bonne surprise.', prix: '6,95 $', badge: 'DU JOUR' },
      { nom: 'Brownies maison', description: 'Fondants au chocolat, noix de Grenoble, servis tièdes. Difficile d\'en manger juste un.', prix: '5,95 $' },
    ]
  },
  {
    badge: 'BOISSONS',
    titre: 'Boissons',
    intro: 'Bière, vin, et tout ce qu\'il faut pour accompagner le repas.',
    items: [
      { nom: 'Bière pression', description: 'Sélection de bières locales et classiques à la pression. Demandez les disponibilités.', prix: 'À partir de 6,50 $' },
      { nom: 'Bière en bouteille', description: 'Sélection variée de bières en bouteille, importées et locales.', prix: 'À partir de 5,50 $' },
      { nom: 'Vin au verre', description: 'Rouge, blanc ou rosé. Sélection maison soigneusement choisie.', prix: 'À partir de 8,00 $' },
      { nom: 'Soft drinks, jus, eau', description: 'Pepsi, 7Up, jus d\'orange, eau pétillante ou plate.', prix: 'À partir de 2,50 $' },
    ]
  },
]
</script>

<style scoped>
.menu-page__hero {
  background-color: var(--brun-fumee);
  padding: 5rem 1.5rem 4rem;
}
.menu-page__hero-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.menu-page__hero h1 {
  color: var(--creme);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 0.5rem 0 0.75rem;
}
.menu-page__hero p {
  color: rgba(253, 246, 236, 0.75);
  font-family: 'Lora', serif;
  font-size: 1.1rem;
}
.menu-page__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}
.menu-page__note {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  background-color: var(--creme-fonce);
  border: 1px solid var(--beige-chaud);
  border-radius: 8px;
  padding: 1.25rem;
  margin-top: 1rem;
}
.menu-page__note p {
  font-size: 0.9rem;
  color: var(--gris-fumee);
  line-height: 1.6;
}
.menu-page__note a {
  color: var(--rouge-viande);
  font-weight: 600;
  text-decoration: none;
}
.menu-page__note a:hover { text-decoration: underline; }
</style>

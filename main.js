/* ==========================================================================
  BURGER MENU
  ========================================================================== */
// Définir btn comme élément du DOM avec la class "burger"
const btn = document.querySelector('.burger');
// Définir navbar comme élément du DIM avec la class "navbar"
const navbar = document.querySelector('.navbar');

// Fonction pour gérer le clic sur le bouton burger
function toggleNavbar() {
    // Ajoute la class "active" sur navbar quand tu cliques ou supprime la class "active" si tu recliques
    navbar.classList.toggle('active');
    // SI navbar contient la class "active" ALORS affiche une croix sur btn
    // SINON affiche burger (3 lignes) sur button
    navbar.classList.contains('active') ? btn.innerHTML = '&#x2715;' : btn.innerHTML = '&#x2630;';
}

// Lorsqu'on clique sur le bouton burger exécuter toggleNavbar
btn.addEventListener('click', toggleNavbar);

/* ==========================================================================
  SLIDER
  ========================================================================== */
// Trouver et stocker le bouton "Suivant" dans btnNext.
const btnNext = document.getElementById('next');
// Trouver et stocker le bouton "Précédent" dans btnPrev.
const btnPrev = document.getElementById('prev');
// Sélectionner tous les éléments d'image de classe .img_slide et les stocker dans imgs.
const imgs = document.querySelectorAll('.img_slide');
// Calculer le nombre total d'images nbImgs en comptant les éléments dans imgs.
const nbImgs = imgs.length;

// Initialiser un compteur count à 0 pour suivre l'image actuellement active.
let count = 0;

// Fonction nextSlide (Pour passer à l'image suivante)
function nextSlide() {
    //   Retirer la classe active de l'image actuellement active.
    const imgActive = document.querySelector('.active');
    imgActive.classList.remove('active');

    // Passer à l'image suivante.
    count = (count + 1) % nbImgs;

    // Ajouter la classe active à la nouvelle image actuellement active indiquée par count.
    imgs[count].classList.add('active');
}

// Fonction prevSlide (Pour revenir à l'image précédente)
function prevSlide() {
    // Retirer la classe active de l'image actuellement active.
    const imgActive = document.querySelector('.active');
    imgActive.classList.remove('active');

    // Revenir à l'image précédente.
    count = (count - 1 + nbImgs) % nbImgs;
    
    // Ajouter la classe active à la nouvelle image actuellement active indiquée par count.
    imgs[count].classList.add('active');
}

// Lorsqu'on clique sur le bouton btnNext exécuter nextSlide.
btnNext.addEventListener('click', nextSlide);
// Lorsqu'on clique sur le bouton btnPrev exécuter prevSlide.
btnPrev.addEventListener('click', prevSlide);
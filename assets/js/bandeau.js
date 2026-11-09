const slides = document.querySelectorAll('#bandeau .slide');
const conteneurPoints = document.querySelector('#bandeau .points');
const DELAI = 5000;   // 5 secondes entre chaque image
let courant = 0;
let minuteur;

// Création des points
slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', 'Image ' + (i + 1));
  b.addEventListener('click', () => { afficher(i); relancer(); });
  conteneurPoints.appendChild(b);
});
const points = conteneurPoints.querySelectorAll('button');

function afficher(n) {
  slides[courant].classList.remove('active');
  points[courant].classList.remove('active');
  courant = (n + slides.length) % slides.length;
  slides[courant].classList.add('active');
  points[courant].classList.add('active');
}

function relancer() {
  clearInterval(minuteur);
  minuteur = setInterval(() => afficher(courant + 1), DELAI);
}

afficher(0);
relancer();

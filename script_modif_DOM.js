// Modification 1.
function changetitles () {
  let title = document.querySelectorAll("h1")[0];
  title.textContent = "Ce que j'ai appris à THP";

  let subtitle = document.querySelector("p.lead");
  subtitle.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changetitles();

// Modification 2.
function changeCallToActions() {
  let btn = document.querySelector("a.btn-primary");
  btn.textContent = "OK je veux tester!"; 
  btn.href = "http://www.thehackingproject.org";

  let btn2 = document.querySelector("a.btn-secondary");
  btn2.textContent = "Non Merci";
  btn2.href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();

// Modification 3.
function changeLogoName() {
  // document.querySelectorAll("header div a");
  let logo = document.querySelector(".navbar-brand");
  logo.textContent = "The THP Experience"; 
  logo.style.fontSize = "2em";
}
changeLogoName();

// Modification 4.
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages() {
  let i = 0;
  let images = document.querySelectorAll(".card img");
  for (let i = 0; i < imagesArray.length; i++) {
    images[i].src = imagesArray[i];
  }
}
populateImages();

// Alternative loop:
// let i = 0; 
// cards.forEach(card => {
//   card.src = imagesArray[i];
//   i++;
// }) 

// Modification 5.
function deleteLastCards() {
  for (let i = 0; i < 3; i++) {
    let cards = document.querySelectorAll(".col-md-4");
    let last = (cards.length) - 1;
    cards[last].remove();
  }
}
deleteLastCards();

// Modificiation 6.
let newTexts =  ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];

function changeCardsText() {
  for (let i = 0; i < 3; i++) {
    let cardTexts = document.querySelectorAll(".card-text");
    cardTexts[i].textContent = newTexts[i];
  }
}
changeCardsText();
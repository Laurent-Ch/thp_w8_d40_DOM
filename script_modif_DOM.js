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


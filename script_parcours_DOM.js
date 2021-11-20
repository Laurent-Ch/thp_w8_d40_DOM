// Question 1.
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
console.log(document.getElementsByTagName("p").length);
console.log(document.querySelectorAll("p").length);


// Question 2. 
// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
console.log(document.getElementById("coucou").textContent);
console.log(document.querySelector("#coucou").textContent);


// Question 3.
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
console.log(document.getElementsByTagName("a")[0].href);
console.log(document.getElementsByTagName("a")[0].getAttribute("href"));
console.log(document.querySelectorAll("a")[0].href);
console.log(document.querySelectorAll("a")[0].getAttribute("href"));


// Question 4 :
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.getElementsByClassName("compte-moi").length);
console.log(document.querySelectorAll(".compte-moi").length);


// Question 5 :
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.querySelectorAll("li.compte-moi").length);

// Question 6 :
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.querySelectorAll("ol li.compte-moi").length);
console.log(document.querySelectorAll("ul li.compte-moi").length);

// Question 7 :
// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
//
console.log(document.getElementsByTagName("div")[0]);
// Puisqu'on sait qu'il n'y en a qu'un seul :
console.log(document.querySelector("div"));
// Plus généralisable :
console.log(document.querySelectorAll("div")[0]);
// Ensuite :
console.log(document.querySelectorAll("div ul")[1].childNodes[1].textContent);





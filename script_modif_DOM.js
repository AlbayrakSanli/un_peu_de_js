const changeCallToActions = function(){
  document.querySelector("a.btn-primary").textContent = "OK je veux tester !";
  document.querySelector("a.btn-primary").setAttribute("href", "http://www.thehackingproject.org");
  document.querySelector("a.btn-secondary").textContent = "Non Merci";
  document.querySelector("a.btn-secondary").setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
changeCallToActions();

const changeLogoName = function(){
  let navTitle = document.querySelectorAll("div.navbar > div > a");
  navTitle[0].children[1].textContent = "The THP Experience";
  navTitle[0].style.fontSize = "2em";
}
changeLogoName();

function populateImages(){
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png",
  "https://img.icons8.com/color/480/000000/css3.png",
  "https://img.icons8.com/color/480/000000/javascript.png",
  "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
  "https://img.icons8.com/color/480/000000/bootstrap.png",
  "https://img.icons8.com/color/480/000000/github.png",
  "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png",
  "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
  "https://img.icons8.com/color/480/000000/heroku.png"];
  let putImage = document.querySelectorAll("div.col-md-4 > div.box-shadow");
  for(let i=0; i < putImage.length; i++){
    putImage[i].children[0].setAttribute("src", imagesArray[i]);
  }
}
populateImages();

function deleteLastCards(){
  let supImage = document.querySelectorAll("div.col-md-4");
  for(let i = supImage.length - 3; i < supImage.length; i++){
    supImage[i].remove();
  }
}
deleteLastCards();

function changeCardsText(){
  let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
  "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
  "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  let changeText = document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body > p");
  for(let i = 0; i < 3; i++){
    changeText[i].textContent = textArray[i];
  }
}
changeCardsText();

function changeViewButtons(){
  let changeButton = document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body > div.d-flex > div.btn-group > button ");
  for(let i = 0; i < changeButton.length; i++){
    changeButton[i].classList.remove("btn-outline-secondary");
    changeButton[i].classList.add("btn-success");
  }
}
changeViewButtons();

function changeDiv(){
  let cardJS = document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body");
  for(let i = 0; i < 6; i++){
    document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body")[i].insertAdjacentHTML("afterBegin", '<div class="row"></div>');
    console.log(document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body > div.row")[i]);
  }
}
changeDiv();

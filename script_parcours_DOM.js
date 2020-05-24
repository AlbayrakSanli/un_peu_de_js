var p = document.getElementsByTagName("P").length;
console.log("Voici le nombre de balise p : " + p);

var element = document.getElementById("coucou").innerHTML;
console.log("contenu texte de l'élément portant l'id coucou : " + element);

var a = document.getElementsByTagName("a");
console.log("URL vers laquelle pointe le 3ème élément <a> de la page HTML : " + a[2]);

var classCompteMoi = document.getElementsByClassName("compte-moi").length;
console.log("Combien d'éléments portent la classe compte-moi ? " + classCompteMoi);

var testElements = document.getElementsByClassName('compte-moi');
var compteMoiLi = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'LI';
});
console.log("Combien d'éléments <li> portent la classe compte-moi ? " + compteMoiLi.length);

var testElements = document.querySelectorAll("ol li");

console.log("Combien d'éléments <li> il y a dans une liste ordonnée <ol> portant la classe compte-moi ? " + testElements.length);

console.log("6) Nombre de <li> dans des <ol> dont la classe est 'compte-moi' :");
console.log(document.querySelectorAll("ol li.compte-moi").length);

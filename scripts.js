// tableaux d objet/ es données arrivent sous cette forme : une liste (Tableau) contenant des fiches structurées (Objets).
// const rendezVous = [{
//     docteur: "Dr kouassi",
//     heure: "09h00"
// }, {
//     docteur: "Dr gemini",
//     heure: "14h30"
// }];

// console.log(rendezVous[1].heure);
// ==================================//
// Dom
// ==================================//
// pour selectioner un element pour le modifier c est comme ca 
// de nos jours cest le query selector on utilises precédé de   . pour classe ou# pour id
// si non avant cetait le document.getelemnt by class/id ou sans le by 

// const boutonValidation = document.querySelector("#submit-btn");
//=============================================================================

// le .textcontent()= il permet de modifié le contenue tectuelle d un element html

// const affichagePrix = document.querySelector(".prix-total");
// affichagePrix.textContent = "4500Fcfa";
// console.log(affichagePrix);
//============================================================================
//LE addevenlistner pour eciuter les evenements;()=
//   ==============
//il permet d' ecouter les evenement()
// il doit réagir aux actions de l'utilisateur : un clic, le survol d'une souris, ou la saisie d'un texte. Pour cela, on utilise la méthode addEventListener().
//               ==============
// Elle prend deux arguments:
// Le nom de l 'événement à écouter (par exemple, "click").
// Une fonction(souvent fléchée) qui s 'exécutera uniquement lorsque l'
// événement se produira. //

// const boutonStatut = document.querySelector("#statut-btn");
// boutonStatut.addEventListener("click", () => {
//     console.log("Statut mis à jour.")
//               ou
//            alert("biiiiiisous");
// });

//=======================================================================
// mini projet  Nous avons un tableau contenant la liste des médecins disponibles. Nous voulons qu'au clic sur un bouton, le nom du premier médecin disponible s'affiche dans une zone de texte de notre page HTML.

const medcins = [
    { nom: "Dr kouassi", specialite: "generaliste" },
    { nom: "Dr yao", specialite: "cardiologue" }
];

const zoneTexte = document.querySelector("#medecin-affiche");
const boutonCharger = document.querySelector("#charger-btn");
boutonCharger.addEventListener("click", () => {
    zoneTexte.textContent = medcins[0].nom;
});
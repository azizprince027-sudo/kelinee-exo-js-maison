// const titre = document.querySelector("h1");

// nb pour changer le style onabort, uutilises .style  + la  proprieté  css (background,..)
//ex  jj.style.background = red;
// Nb: le html est prioritere sur le css  dans le cas ou ya pas le mots clé !important sur le  css pour quil soit devant le js

// titre.style.backgroundColor = "red"

/////////////////////////////////////////////////////////////////////////////
// creer et inserer un élément depuis le js 

// .innerText =  sert a ajouter uniquement du texte

// pour ajouter du html on utilises inerHtml

//=====================================================================

// pour cree un element  depuis le js on fait 
// document.createElement("element a cree")
//ensuite on peut ajouter  des element avec le inertHtml
//enfin on l ajoute a un element parent via  nom du parent..appendchild(nom de lenfant)


///////////////////////////////////////////////////////////////////////////////////////////////////
//======================================================================================

// supprimer des element ert remplacer par un autres elements 

// on fait le parent.children[l indexe de lelement quon veut supp].remove();

// pour remplacer ==  on fait pareile ||  parent.children[l indexe de lelement quon veut supp].replacewith(nom de l enfant);

// text content permetde modifier une proprieté textuele  que dutexte

// const titre = document.querySelector("h1");
// console .log(titre)

// titre.textContent = "helloword"

// quand on selectionnes plusieurs elements cadevient un tableaux

//===============================================================================================================

// Ajouter des éléments au DOM (append, prepend, insertBefore)
//==============================================================

// pour ecrire du texte a la fin de notres html  on fait  document.write("le texte quon veut ecrire")

//==========================================================

// ajouter du texyte a un endroit bien specifique

// on fait  le parant ou on veut ajouter .apend('le texte a ajouter ');

//////////////////////////////////////////////////////////////////////////////////////

// pour changer le style d un Element on utiise le style il a aussi le css

// const titre = document.querySelector("h1");
// titre.textContent = "Bonjours famille";
// titre.style.color="red"
// titre.style.textAlign = "center"


//////////////////////////////////////////////////////++++++++++++++++++++++++++++= ================================

//                                            evenements

//============================================================================================================
// onclick// ils sont deconseillé
///////////////////////////////////////////////////////////////////////////////////////
// les ecouteursvia les proprieté javascripts (les ecouteurs on)
//---------------------------

// location.href"" sert a rediriger vers le sites q uon veut ;
//////////////////////////////////////

// le confirme dans la structure  if sert a  faire apparaitre une boite de dialogue

//===================================================================================================

// const a = document.querySelector("a");
// const button = document.querySelector("button");

// a.onclick = ()=>{
//     if (confirm("etes vous sur?")) {
//         location.href="https://www.youtube.com/watch?v=OUYLoHZn0uA&list=RDhwPCE_maWmk&index=4"
//     }
// }

// button.onmouseover = ()=>{
//     document.body.style.backgroundColor="orange"
// }

// button.onmouseout = ()=>{
//     document.body.style.backgroundColor="white"
// }

//================================================================================================================================================================

//    Les écouteurs via le gestionnaire d'évènements ( il permetres de supprimer aussi un evenements)
  //  ----------------------------------------------

  // les add evenlister, 

  //=========================================================================================================================

// const a = document.querySelector("a");
// const button = document.querySelector("button");
 
// button.addEventListener("click",()=>{
// mouseover = document.body.style.backgroundColor="red";
// mouseout = document.body.style.backgroundColor= "black"
// });



// la manipulation des tableaux!!

//==========================================

// // Boucles for eache

// // on lutilises quand on veut agir sur chaqu element d un tableaux

// // elle prend en argument une fonction fleché

// //pour exécuter un code sur chaque élément d'un tableau, on utilise .forEach().

// //Cette fonction reçoit automatiquement l'élément en cours à chaque tour.
// //======================================================================//
// NB for each est une methode de tableau pas une boucles 
//==========================================================
// const projets = ["Gbao.CI", "Omni Soin", "SIRA"];

// // L'ancienne méthode (Lourde)
// for (let i = 0; i < projets.length; i++) {
//     console.log(projets[i]);
// }

// // La méthode moderne (Propre et rapide)
// projets.forEach((projet) => {
//     console.log(projet); // 'projet' prend la valeur de chaque élément un par un
// });

//==================================================

// const prixProduits = [1500, 3000, 5000, 7000];
// prixProduits.forEach(() => {
//         console.log(prixProduits);
//     }
// );
//=================================================
//============================================================
// cest pas juste on on doit donner un nom de variable
// donner un nom de variable entre les parenthèses de la fonction fléchée (par exemple prix). C'est cette variable qui va recevoir la valeur de l'élément à chaque tour de piste.
//===================================================================

// const prixProduits = [1500, 3000, 5000, 7000];
// prixProduits.forEach((prixCfa) => {
//     console.log(prixCfa + " FCFA");
// });

//=====================================================

// les map();

// on l utilises pour transformer un tableau
// .map()crée un nouveau tableau en modifiant chaque élément du tableau d'origine.
//Elle utilise le
//return à l 'intérieur de sa fonction fléchée pour dire comment transformer l' élément.

// const prixProduits = [1500, 3000, 5000, 7000];
// //
// const prixSold = prixProduits.map((sold) => {
//     return sold - 500;
// });
// //
// console.log(prixSold);

// =============================================================================================
//  en gro on dit le prixSold stok le nouveau tableau
// le prixProduits.map transforme le tableau et le stok dans sold
//return le nouveau tableau stoké dans sold et on lenleve 500 sur chque elemnt du tableau
// et on affichele prix sold qui contientout le niveua tableau
// nb Sold stokles modif du tableau  et prixSold stokle le nouveau tableaux en lui mem
// ============================================================================================

const parcAuto = [
    { mode: "Yaris", enPanne: true },
    { mode: "corolla", enPanne: false },
    { mode: "prado", enPanne: true }
];

const voituresPanne = parcAuto.filter((pane) => {
    return pane.enPanne != false;
});

console.log(voituresPanne);
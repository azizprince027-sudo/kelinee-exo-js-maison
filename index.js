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

//  la methodes filter
// La méthode .filter() permet de filtrer un tableau pour ne garder que les éléments qui vous intéressent. Elle analyse chaque élément et crée un nouveau tableau contenant uniquement les éléments pour lesquels la fonction fléchée a renvoyé true
// const parcAuto = [
//     { mode: "Yaris", enPanne: true },
//     { mode: "corolla", enPanne: false },
//     { mode: "prado", enPanne: true }
// ];

// const voituresPanne = parcAuto.filter((pane) => {
//     return pane.enPanne != false;
// });

// console.log(voituresPanne);
//=================================================================================

//  le map()filtrer()
// Le résultat du filtre (un tableau trié) est directement envoyé au .map() (pour être transformé).

//=====================================================================================

// const projets = [
//     { nom: "Gbao.CI", actif: true },
//     { nom: "Ancien Projet", actif: false },
//     { nom: "SIRA", actif: true }
// ];

// const nomsProjetsActifs = projets
//     .filter(p => p.actif === true)
//     .map(p => p.nom);

//     console.log(nomsProjetsActifs);

// exo:Déclarez le tableau parcAuto.

// Créez une constante nommée modelesEnPanne.

// Chaînez .filter() et .map() sur parcAuto :

// Le .filter() ne garde que les objets où enPanne === true.

// Le .map() extrait uniquement la propriété mode.

// Affichez modelesEnPanne dans la console.

//================================================================================================

// const parcAuto = [
//     {model : "yaris" , enPanne : true},
//     {model : "corolla" , enPanne : false},
//     {model : "prado" , enPanne : true}
// ];

// const voituresPanne = parcAuto
// .filter(panne => panne.enPanne != false)
// .map(panne => panne.model);
// console.log(voituresPanne);

//================================================================================================

// la methode reduce

// C'est la méthode ultime de manipulation de tableaux. .reduce() permet de réduire un tableau complet à une seule valeur (une somme, une moyenne, un total cumulé, etc.).

// Elle prend deux arguments principaux :

// Une fonction fléchée avec un accumulateur (le compteur qui accumule la valeur) et l'élément en cours.

// La valeur initiale de l'accumulateur (généralement 0 pour une somme).

//===============================================================================================================

// il permet de reduit un tableau  mais aussi de effectuer des calcules dans un tableaux 
// voici la syntaxe du reduce: 

// const paniers = [1500, 2000, 3500];

// // On veut calculer le total du panier
// const totalCommande = paniers.reduce((accumulateur, prixEnCours) => {
//     return accumulateur + prixEnCours;
// }, 0); // <- 0 est la valeur de départ de l'accumulateur

// console.log(totalCommande); // Affiche 7000
 // nb l acumulateur est  a 0 au debut c est impeut comme une caisse de super marché.  quand on 
 // initialise a 0 cest pour dire quon a rien dabor, ensuite  l acumulateur prend la valeur  de prixencour mais prix en cours a une avance sur lui 
 //exemple :
//========================================================================================================
// apres  l' accumulateurs  initialisé a 0 la deuxime variable contient les prix
// tour 1 :accu = 0 et varPrix = 1500 | accu + varPrix = 0+1500
// tour 2 :accu = 1500  et varPrix=2000 | 1500 +2000
// tour 3 :accu =  3500 et varPrix = 3500 | 3500+3500 = 7000frcfa 

//==================================================================================================================


// exo  : Maintenant que le mécanisme est clair, essaie d'écrire le code pour calculer le chiffreAffaires total de ces 3 factures :

// const facturesGarage = [
//     {client : "Koffi", montant :25000 },
//     {client : "Amadou", montant :45000 },
//     {client : "Awa", montant :15000 }

// ];

// const chiffreAffaires = facturesGarage.reduce( (accumulateur , factures) => {
//     return accumulateur + factures.montant;
// }, 0 );

// console.log(chiffreAffaires + " Frcfa")
//============================================================================================================================================================

// Destructions des objets || Destructuring;

// la déstructuration permet d'extraire rapidement les propriétés d'un objet pour les stocker dans des variables indépendantes, sans répéter le nom de l'objet.

//============================================================================================================================================================
//const colis = {
    // habits: "Un complet Basin",
    // chaussures: "Des mocassins",
    // montre: "Montre connectée"
//};

// La méthode moderne (Avec déstructuration)
// Avec le destructuring, vous dites à JavaScript : "Regarde dans l'objet colis, ouvre-le, et crée directement deux variables nommées habits et chaussures avec ce qu'il y a à l'intérieur".

// Tout cela se fait en une seule ligne grâce aux accolades {} placées à gauche du signe = 

// const { habits, chaussures } = colis;

// // Maintenant, les variables existent toutes seules !
// console.log(habits);      // "Un complet Basin"
// console.log(chaussures);   // "Des mocassins"
//======================================================================

// Règle d'or : Les noms des variables à l'intérieur des accolades { } doivent correspondre exactement aux noms des propriétés existantes dans l'objet. Si vous écrivez const { vêtement } = colis;, JavaScript renverra undefined parce que la clé vêtement n'existe pas dans l'objet.

//===============================================================================
// const colis = {                                                              |
//     habits: "Un complet Basin",                                              |
//     chaussures: "Des mocassins",                                             | 
//     montre: "Montre connectée"                                               |
// };                                                                           |
// const { habits, chaussures, montre } = colis;                                |                                                                     
// // Maintenant, les variables existent toutes seules !                        |
// console.log(habits);      // "Un complet Basin"                              |
// console.log(chaussures);   // "Des mocassins"                                |
// console.log(montre)                                                          |
//===============================================================================

// EXO :
//=====================================================================================
// const commande = {
//     id: "CMD-992",
//     client: "Aïcha",
//     total: 12500,
//     livre: false
// };

// const {client , total} = commande;

// console.log( "Mme " + client + " a une  facture de " + total + " Frcfa");

//===============================================================================
// 'Atelier Pratique : Le Gestionnaire de Rendez-vous "Omni Soin".                                                                             |
//Tu vas coder la logique de la page d'accueil d'Omni Soin                                                                              |
// qui permet de filtrer les médecins                                                             | 
// disponibles à Abidjan et de calculer le coût total des consultations                                                                             |
//                                                                              |
//                                                                              |                                                                     
//                                                                              |
//                                                                              |
//                                                                              |
//                                                                              |
//===============================================================================


//les setL'utilisation la plus fréquente du Set dans la vraie vie d'un développeur, c'est pour nettoyer un tableau des doublons en une seule ligne.

// Imaginons que dans Omni Soin, tu récupères la liste de toutes les communes des médecins disponibles, et que tu veuilles créer un menu déroulant pour que l'utilisateur choisisse sa commune. Tu ne veux pas afficher "Cocody" dix fois dans ta liste !

//=============================================================================

// const communesMedecins = ["Cocody", "Yopougon", "Cocody", "Marcory", "Yopougon"];

// // 1. On transforme le tableau en Set pour éliminer les doublons
// const communesUniquesSet = new Set(communesMedecins); // {"Cocody", "Yopougon", "Marcory"}

// // 2. On re-transforme le Set en vrai tableau pour pouvoir le manipuler facilement
// const listePropre = [...communesUniquesSet]; 

// console.log(listePropre); // ["Cocody", "Yopougon", "Marcory"] -> Propre, sans doublon !

//========================================================================================

// const communesSira = ["Cocody", "Yopougon", "Cocody", "Marcory", "Yopougon", "Bingerville"];

// // 1. Crée le Set PUR (sans crochets autour)
// const communesUniques = new Set(communesSira);

// // 2. Transforme ce Set en Tableau en mettant les crochets et le ... ICI
// const listeFinale = [...communesUniques];

// console.log(listeFinale);

//============================================================================================================

// le splitt il sert a decouper exemples 


// const nomComplet = "Odjo Aziz Prince";

// // On lui dit : "Coupe le texte à chaque fois que tu trouves un espace ' '"
// const morceaux = nomComplet.split(" ");

// console.log(morceaux); 
// // Résultat : ["Odjo", "Aziz", "Prince"] (Un beau tableau tout propre)

//=========================================================================================================================
//------------------------------------------------------------------------------------------------------------------------------
// le join  ()  Coller un tableau pour en faire du texte
// //////////////////////////////////////////////////////////////////////////////////////////////////////
// C'est l'exact inverse de .split(). .join() prend tous les éléments d'un tableau et les rassemble pour
// former une seule chaîne de caractères (du texte). Tu choisis le connecteur qui va lier les morceaux.
// //========================================================================================================

// Traduction : "Join" signifie "joindre" ou "unir".

// Le cas d'usage réel : Tu as une liste d'équipements pour un diagnostic auto et tu veux l'afficher proprement séparée par des virgules dans un paragraphe.

// const outils = ["Scanner", "Clé à choc", "Cric"];

// // On rassemble avec une virgule et un espace
// const texteOutils = outils.join(", ");

// console.log(texteOutils); 
// Résultat : "Scanner, Clé à choc, Cric"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// le . concat ()  fusionner deux tableaux (ou chaînes)
//----------------------------------------------------------
// .concat() permet d'assembler deux ou plusieurs tableaux pour en créer un nouveau, sans modifier les tableaux d'origine.

// traduction : "Concat" est le diminutif de "concaténer" (boutonner ensemble).
//Le cas d'usage réel : Tu as une liste de médicaments en stock à la pharmacie de Yopougon, et une
//autre pour la pharmacie de Cocody. Tu veux fusionner les deux pour ton application Omni Soin.

// const stockYopougon = ["Paracétamol", "Ibuprofène"];
// const stockCocody = ["Vitamine C", "Amoxicilline"];

// const stockGlobal = stockYopougon.concat(stockCocody);

// console.log(stockGlobal);
// Résultat : ["Paracétamol", "Ibuprofène", "Vitamine C", "Amoxicilline"]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// exo Un utilisateur a rempli un formulaire sur ton site de manière un peu désordonnée. Il a écrit la liste de ses voitures préférées dans une seule chaîne, séparée par des tirets : "G-Wagon-Infinix-Toyota".

// Voici ton défi :

// Déclare la chaîne : const saisie = "G-Wagon-Infinix-Toyota";

// Utilise .split() pour transformer cette chaîne en un tableau nommé listeVoitures (coupe au niveau des tirets "-").

// Ajoute une nouvelle voiture au tableau avec .push("Range-Rover");

// Utilise .join() pour transformer ce tableau mis à jour en une chaîne de caractères propre, où les voitures sont séparées par un espace et une flèche : " -> ". Stoque le résultat dans affichageFinal.

// Fais un console.log(affichageFinal);
//====================================================================================================


// const saisie = "G-Wagon-Infinix-Toyota";
// const listeVoiture = saisie.split("-");
// listeVoiture.push("Range-Rover");
// const affichageFinal =  listeVoiture.join(" -> " )
// console.log(affichageFinal);
//==================================================================================

// le reverse()
//-------------

// Cas d'usage réel : Afficher les messages ou les annonces du plus récent au plus ancien
// Dans ton projet SIRA (Immobilier) ou Omni Soin, ta base de données te renvoie souvent les éléments dans l'ordre de leur création (du plus vieux au plus récent). Mais sur ton site, tu veux que l'utilisateur voie les dernières annonces publiées tout en haut de la page.

// Pour inverser l'ordre sans détruire ton tableau d'origine, l'astuce de pro consiste à faire une copie du tableau avec le Spread Operator ([...]) avant de lancer le .reverse() :

///////////////////////////////////////////////////////////////////////////////////////////////

// const annoncesChronologiques = ["Annonce Ancienne (Matin)", "Annonce Récente (Midi)", "Annonce Dernière Minute (Soir)"];

// // On copie ET on inverse en une seule ligne sans toucher à l'original
// const annoncesAffichees = [...annoncesChronologiques].reverse();

// console.log(annoncesAffichees);
// // Résultat : ["Annonce Dernière Minute (Soir)", "Annonce Récente (Midi)", "Annonce Ancienne (Matin)"]

// console.log(annoncesChronologiques);
// // Résultat : Inchangé ! L'ordre initial est préservé.
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//===============================================================================

// const reparations = ["Changement Pneu", "Vidange Huile", "Réparation Freins"];
// const historiqueReparation = [...reparations].reverse();
// console.log(historiqueReparation);

//===================================================================

//  le Spread Operator (L'Opérateur de Décomposition);
//----------------------------------------------------

// Son rôle est de sortir tous les éléments d'un tableau (ou toutes les propriétés d'un objet) pour les étaler un par un, comme si tu vidais un sac de billes sur le sol.

//=======================================================================

// Cas d'usage n°1 : Faire une copie parfaite d'un tableau
//=========================================================================
// const original = ["A", "B", "C"];
//  On prend les billes de original et on les pose dans un nouveau tableau
// const copie = [...original];
//============================================================================

//  Cas d'usage n°2 : Fusionner deux tableaux proprement
//------------------------------------------------------

// const avantMidi = ["Fana", "Koffi"];
// const apresMidi = ["Amadou", "Sita"];

// // On déballe les deux tableaux dans un troisième
// const touteLaJournee = [...avantMidi, ...apresMidi];
// console.log(touteLaJournee); // ["Fana", "Koffi", "Amadou", "Sita"]

//===================================================================================

//le rest parameter
//-----------------

// on l'utilise exclusivement dans les paramètres d'une fonction (entre les parenthèses). Il dit à la fonction : "Prends tous les arguments restants que l'utilisateur a envoyés, et range-les ensemble dans un seul tableau".

//==============================================================================================================================================================

//Exemple concret :
// Imaginons que sur ton projet, tu veuilles créer une fonction qui calcule le coût total de n'importe quel nombre de réparations auto, que le client en fasse 2, 5 ou 10.
//------------------------------------------------------------------------------------------------

// Les ... ici signifient : "Rassemble tous les tarifs reçus dans un tableau nommé tarifs"
// function calculerTotal(...tarifs) {
//     // 'tarifs' est maintenant un vrai tableau [15000, 25000, 10000]
//     return tarifs.reduce((acc, actuel) => acc + actuel, 0);
// }

// // On peut lui envoyer autant de chiffres qu'on veut !
// const facture1 = calculerTotal(15000, 25000, 10000); 
// console.log(facture1); // 50000

//========================================================================================================================================================================

// La règle d'or du Rest Parameter :
// Il doit toujours être le tout dernier paramètre de la fonction (le "reste").
//-------------------------------------------------------------------------------------------

// CORRECT : Le premier argument va dans 'nom', tout le RESTE va dans 'notes'
// function attribuerNotes(nom, ...notes) { ... }

// // ERREUR FATALE (JavaScript va planter) : Le reste ne peut pas être au début
// function attribuerNotes(...notes, nom) { ... }
//=========================================================================================
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// NB : on utilises le spread operator sur les tableaux et objet
//    : on utilises le rest parametor  sur les fonctions(DANS LES PARAMERE)

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
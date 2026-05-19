//===============================================================================
// 'Atelier Pratique : Le Gestionnaire de Rendez-vous "Omni Soin".              |
//Tu vas coder la logique de la page d'accueil d'Omni Soin                      |
// qui permet de filtrer les médecins                                           | 
// disponibles à Abidjan et de calculer le coût total des consultations         |
//===============================================================================

const medecins = [
    { nom: "Dr. Kouassi",  specialite: "Généraliste", disponible: true, tarif: 15000 },
    { nom: "Dr. Bakayoko", specialite: "Cardiologue", disponible: true, tarif: 25000 },
    { nom: "Dr. Koné",     specialite: "Généraliste", disponible: false, tarif:15000 },
    { nom: "Dr. Diallo",   specialite: "Généraliste", disponible: true, tarif: 20000 }
];

const   bouton  = document.querySelector("#btn-filtrer");
const zoneTarif = document.querySelector("#total-facture")
const listeMedecins = document.querySelector("#liste-medecins");


    bouton.addEventListener("click", () =>{
        
        const medecinsGeneraliste = medecins.filter( (genraliste ) => {
            return genraliste.specialite ==="Généraliste" && genraliste.disponible === true;

        });

            const zonneTotal= medecinsGeneraliste.reduce((accumulateur , valeurTarif) => {
            return accumulateur + valeurTarif.tarif
        },0);  
        zoneTarif.textContent =( zonneTotal + " FCFA");
// nb inerHTML sert a vidé le contenue html quand cest comme ca "" ; et il permet surtout  d'utiliser les balises html;
        listeMedecins.innerHTML = ""
        medecinsGeneraliste.forEach(({nom, specialite , tarif})=> {
            listeMedecins.innerHTML += nom +" " + " " + specialite + " Prix de la consultations  " + tarif + " FCFA <br>"
        
        });
        
    });


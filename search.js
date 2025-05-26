/**
 * Fait le tri dans les données en fonction des caractères entrés
 * @param {Array} data,query Database du musée et chaine de caractères entrée
 * @author Nawal BISIAUX
 * @copyright ISEN-CAEN CIR1 - 2025
 */

function filterByQuery(data, query) {
    const lowerQuery = query.toLowerCase(); //convertit le texte en minuscules

    return data.filter(item => {//on verifie que nom est bien un char puis on le convertit en minuscules
        const nom = item.nom;
        return typeof nom === "string" && nom.toLowerCase().includes(lowerQuery);
    });
}

/**
 * Gere ce qu'il se passe quand l'utilisateur ecrit dans la barre de recherche
 * @param {Array} donneesMusees Recupere les données des musées
 * @author Nawal BISIAUX
 * @copyright ISEN-CAEN CIR1 - 2025
 */

function search(donneesMusees) {
    searchInput.addEventListener("input", () => { //a chaque saisie on recupere ce qui est tapé, on filtre le tableau et on affiche
        const query = searchInput.value;//on recupere ce qu'a ecrit l'user dans la barre de recherche 
        const filteredData = filterByQuery(donneesMusees, query); // on prend en paramètres le tableau contenant les donnees du musée et ce qu'à écrit l'user pour retourner le tableau modifié
        renderTable(filteredData);
    });
}



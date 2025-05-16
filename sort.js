/**
 * Trie un tableau selon une colonne dans l'ordre crooissant
 * @param {Array} table   Tableau à trier
 * @param {string} filter   Colonne selon laquelle trier le tableau
 * @author Bastien POMMIER
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function sortTable(table, filter) {
    table.forEach((object, id) => {   // "object" n'est pas utile, on utilise juste l'index
        compareData(table, id, filter);
    });
}



/**
 * Compare deux lignes successives d'un tableau, puis les trie dans l'ordre croissant
 * @param {Array} table   Tableau contenant les données (objets)
 * @param {int} i   Indice de la 2e ligne
 * @param {string} filter   Colonne selon laquelle trier le tableau
 * @author Bastien POMMIER
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function compareData(table, i, filter) {
    if (i == 0)   return;

    while (table[i][filter] < table[i-1][filter]) {   // Si l'élément est plus petit que le précédent...
        [table[i], table[i-1]]   =   [table[i-1], table[i]];   // ... on inverse les 2

        if (--i <= 0)   return;  // Et on revient en arrière dans le tableau jusqu'à avoir remis l'élément à sa place
    }
}





/**
 * Crée un nouveau tableau avec moins d'éléments, qui dépendent du filtre et de la valeur donnés
 * @param {Array} table   Tableau source (objets)
 * @param {string} filter   Colonne sur laquelle appliqur le filtre
 * @param {*} value   Donnée à conserver après le filtre
 * @returns {Array}   Retourne le tableau créé
 * @author Bastien POMMIER
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function filterTable(table, filter, value) {
    return table.filter(item => {
        return item[filter] == value;
    });
}
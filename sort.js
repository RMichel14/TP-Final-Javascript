/**
 * Trie un tableau selon une colonne dans l'ordre crooissant
 * @param {Array} table   Tableau à trier
 * @param {string} filter   Colonne selon laquelle trier le tableau
 * @author Bastien POMMIER
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function sortTable(table) {
    let filter = getSelectValue(sortFilter);
    if (filter == "")   return;

    table.forEach((object, id) => {   // "object" n'est pas utile, on utilise juste l'index
        compareData(table, id, filter);
    });

    renderTable(table);
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
 * @param {*} value   Donnée de la colonne à conserver
 * @returns {Array}   Retourne le tableau créé
 * @author Bastien POMMIER
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function filterTable(table, filter, value) {
    return table.filter(item => {
        return item[filter] == value;
    });
}





/**
 * Applique tous les filtres actifs sur l'ensemble de la BDD
 * @param {Array} musees   Tableau source
 * @returns {Array}   Retourne le tableau filtré puis trié
 * @author Bastien POMMIER
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function applyFilters(musees) {
    filters.forEach(item => {
        if (item[0].value != "")   musees = filterTable(musees, item[1], item[0].value);
    });

    sortTable(musees);

    return musees;
}





/**
 * Trouve la valeur de l'option sélectionnée dans un sélecteur HTML
 * @param {HTMLElement} select   Sélecteur dont chercher l'option
 * @returns {String}   Retourne la valeur de l'option sélectionnée
 * @author Bastien POMMIER
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function getSelectValue(select) {
    let id = select.options.selectedIndex;
    return select.options[id].value;
}
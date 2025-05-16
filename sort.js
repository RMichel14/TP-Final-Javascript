/**
 * @description   Trie un tableau selon une colonne dans l'ordre crooissant
 * @param table   Tableau à trier
 * @param filter   Colonne selon laquelle trier le tableau
 * @author Bastien POMMIER
 */
function sortTable(table, filter) {
    table.forEach((object, id) => {   // "object" n'est pas utile, on utilise juste l'index
        compareData(table, id, filter);
    });
}



/**
 * @description   Compare deux lignes successives d'un tableau, puis les trie dans l'ordre croissant
 * @param table   Tableau contenant les données (objets)
 * @param i   Indice de la 2e lignes
 * @param filter   Colonne selon laquelle trier le tableau
 * @author Bastien POMMIER
 */
function compareData(table, i, filter) {
    if (i == 0)   return;

    while (table[i][filter] < table[i-1][filter]) {   // Si l'élément est plus petit que le précédent...
        [table[i], table[i-1]]   =   [table[i-1], table[i]];   // ... on inverse les 2

        if (--i <= 0)   return;  // Et on revient en arrière dans le tableau jusqu'à avoir remis l'élément à sa place
    }
}
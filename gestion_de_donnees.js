const filters = [
    [document.getElementById("regionFilter"),           "region"],
    [document.getElementById("villeFilter"),            "ville"],
    [document.getElementById("departementFilter"),      "departement"],
    [document.getElementById("anneeFilter"),            "annee"],
    [document.getElementById("dateAppellationFilter"),  "dateAppellation"],
    [document.getElementById("noteFilter"),             "note"],
];

const sortFilter = document.getElementById("sortBy");

// Fonction principale
function main() {
    const donneesMusees = transformationDatabase(data);
    let donneesFiltrees = donneesMusees;

    remplirFiltresDynamique(donneesFiltrees);
    mettreFiltresEnMajuscule();
    supprimerDoublonsFiltres();

    afficherPage(1, donneesFiltrees);

    filters.forEach(item => {
        item[0].addEventListener("change", e => {
            donneesFiltrees = applyFilters(donneesMusees);
        });
    });

    sortFilter.addEventListener("change", e => {
        sortTable(donneesFiltrees);
    });
    search(donneesFiltrees);

    document.getElementById("linesPerPage").addEventListener("change", (e) => {
        resultatsParPage = parseInt(e.target.value, 10);
        afficherPage(1, donneesFiltrees);  // recharge depuis la première page
    });

}
main();
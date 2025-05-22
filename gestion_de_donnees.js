function main() {
    const donneesMusees = transformationDatabase(data);
    let donneesMuseesTrie = donneesMusees;
    sortTable(donneesMuseesTrie, "annee");
    remplirFiltresDynamique(donneesMuseesTrie);
    mettreFiltresEnMajuscule();
    supprimerDoublonsFiltres();
    renderTable(donneesMuseesTrie);
}

main()
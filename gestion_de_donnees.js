function main() {
    const donneesMusees = transformationDatabase(data);
    let donneesMuseesTrie = donneesMusees;
    sortTable(donneesMuseesTrie, "annee");
    renderTable(donneesMuseesTrie);
}

main()
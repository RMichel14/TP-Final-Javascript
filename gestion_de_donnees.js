function main() {
    const donneesMusees = transformationDatabase(data);
    let donneesTriees = filterTable(donneesMusees, "annee", 2007);
    renderTable(donneesTriees);
}
main()
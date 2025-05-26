function main() {
    const donneesMusees = transformationDatabase(data);
    renderTable(donneesMusees);

    search(donneesMusees);
}

main();
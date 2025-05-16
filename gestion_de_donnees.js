function main() {
    const donneesMusees = transformationDatabase(data);
    // let donneesTriees = filterTable(donneesMusees, "region", "BASSE-NORMANDIE");

    document.getElementById("sortBy").addEventListener("input", e => {
        let filter = document.getElementById("sortBy").value;
        sortTable(donneesTriees, filter);
    });
} main();
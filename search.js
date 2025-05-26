function filterByQuery(data, query) {
    const lowerQuery = query.toLowerCase();

    return data.filter(item => {
        const nom = item.nom;
        return typeof nom === "string" && nom.toLowerCase().startsWith(lowerQuery);
    });
}

function search(donneesMusees) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value;
        const filteredData = filterByQuery(donneesMusees, query);
        renderTable(filteredData);
    });
}



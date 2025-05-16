/**
 * Function for utilisation of database
 * @param donneesBrutes Database of Museum
 * @return map
 * @author Raphaël MICHEL
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function transformationDatabase(donneesBrutes) {
    return donneesBrutes.map(item => ({
        ref: item["REF DU MUSEE"],
        nom: item["NOM DU MUSEE"],
        annee: parseInt(item["ANNEE"]),
        region: item["REGION"],
        ville: item["VILLE"],
        dateAppellation: item["DATE APPELLATION"],
        payant: parseInt(item["PAYANT"]),
        gratuit: parseInt(item["GRATUIT"]),
        total: parseInt(item["TOTAL"]),
        note: item["NOTE"],
        idMuseofile: item["ID MUSEOFILE"],
        departement: item["DEPARTEMENT"],
        observations: item["OBSERVATIONS"],
    }));
}

/**
 * Function for loading table of Musee in HTML.
 * @param data Database of museum
 * @author Raphaël MICHEL
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function renderTable(data) {
    const tableBody = document.getElementById("museeTable");

    tableBody.innerHTML = '';

    // Si les donnees sont vides
    if (data.length == 0)
        tableBody.innerHTML = `<tr><td colspan="11">Aucun musée trouvé.</td></tr>`;
    else {
        sortTable(data, "annee");

        data.forEach(element => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${element.nom}</td>
            <td>${element.annee}</td>
            <td>${element.region}</td>
            <td>${element.ville}</td>
            <td>${element.dateAppellation}</td>
            <td>${element.payant}</td>
            <td>${element.gratuit}</td>
            <td>${element.total}</td>
            <td>${element.note}</td>
            <td>${element.departement}</td>
            <td>${element.observations}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}
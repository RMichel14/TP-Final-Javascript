/**
 * Function for utilisation of database
 * @param donneesBrutes Database of Museum
 * @return map
 * @author Raphaël MICHEL
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
 */
function loadTable(data) {
    console.log(data);
}
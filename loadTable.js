const paginationContainer = document.getElementById("pagination");


/**
 * Function for utilisation of database
 * @param {Array} donneesBrutes Database of Museum
 * @return {Array} map
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
 * Fonction permettant de remplir les filtres HTML dynamiquement (balise "select")
 * @param {Array} musees Donnees des musees
 * @author Raphaël MICHEL
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function remplirFiltresDynamique(musees) {
  const champsFiltres = {
    region: "regionFilter",
    ville: "villeFilter",
    departement: "departementFilter",
    annee: "anneeFilter",
    dateAppellation: "dateAppellationFilter",
    note: "noteFilter",
  };

  // Pour chaque champ, extraire les valeurs uniques
  for (const champ in champsFiltres) {
    const select = document.getElementById(champsFiltres[champ]);
    if (!select) continue;

    const valeursUniques = new Set();

    musees.forEach(m => {
      const val = m[champ];
      if (val !== undefined && val !== null && val !== "") {
        valeursUniques.add(val);
      }
    });

    // Nettoyer les options existantes (sauf la premiere "placeholder")
    select.options.length = 1;

    // Ajouter les options triees
    Array.from(valeursUniques)
      .sort((a, b) => {
        if (typeof a === "number" && typeof b === "number") return a - b;
        return String(a).localeCompare(String(b));
      })
      .forEach(val => {
        const option = document.createElement("option");
        option.value = val;
        option.textContent = val;
        select.appendChild(option);
      });
  }
}

/**
 * Fonction permettant de mettre les filtres HTML (balise "select") en majuscule
 * @author Raphaël MICHEL
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function mettreFiltresEnMajuscule() {
  const selects = document.querySelectorAll("select");

  selects.forEach(select => {
    if (select == sortFilter)   return; // On ne modifie pas les valeurs du trieur (select#sortBy)
    for (let i = 0; i < select.options.length; i++) {
      const option = select.options[i];

      // Ne transforme pas la premiere option vide ou placeholder
      if (option.value.trim() === "" || option.textContent.trim() === "") continue;

      option.textContent = option.textContent.toUpperCase();
      option.value = option.value.toUpperCase();
    }
  });
}

/**
 * Fonction pour supprimer les doublons parmi les filtres HTML (balise "select")
 * @author Raphaël MICHEL
 * @copyright ISEN-CAEN CIR1 - 2025
 */
function supprimerDoublonsFiltres() {
  const selects = document.querySelectorAll("select");

  selects.forEach(select => {
    const valeursVues = new Set();
    const optionsAAConserver = [];

    for (let i = 0; i < select.options.length; i++) {
      const option = select.options[i];
      const val = option.value.trim();

      // Toujours conserver la premiere option vide (placeholder)
      if (i === 0 && val === "") {
        optionsAAConserver.push(option);
        continue;
      }

      if (!valeursVues.has(val)) {
        valeursVues.add(val);
        optionsAAConserver.push(option);
      }
    }

    // Nettoyer le <select> et reinserer uniquement les options uniques
    select.innerHTML = "";
    optionsAAConserver.forEach(opt => select.appendChild(opt));
  });
}

/**
 * Function for loading table of Musee in HTML.
 * @param {Array} data Database of museum
 * @author Raphaël MICHEL
 * @copyright ISEN-CAEN CIR1 - 2025
 */

function renderTable(data) {
    const tableBody = document.getElementById("museeTable");
    tableBody.innerHTML = '';

    if (data.length == 0)
        tableBody.innerHTML = `<tr><td colspan="11">Aucun musée trouvé.</td></tr>`;
    else {
        data.forEach(element => {
            let annee = element.annee;
            let payant = element.payant;
            let gratuit = element.gratuit;
            let total = element.total;
            let note = element.note;

            // vider les NaN
            
                if (isNaN(annee)) annee = "";
                if (isNaN(payant)) payant = "";
                if (isNaN(gratuit)) gratuit = "";
                if (isNaN(total)) total = "";
            

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${element.nom}</td>
                <td>${annee}</td>
                <td>${element.region}</td>
                <td>${element.ville}</td>
                <td>${element.dateAppellation}</td>
                <td>${payant}</td>
                <td>${gratuit}</td>
                <td>${total}</td>
                <td>${note}</td>
                <td>${element.departement}</td>
                <td>${element.observations}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}
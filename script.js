// ===================================================================================
// LOGIQUE DE GESTION DES DONNÉES (localStorage)
// ===================================================================================

function loadData(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error("Erreur lors du chargement des données depuis localStorage:", error);
    return defaultValue;
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des données dans localStorage:", error);
    alert("Impossible de sauvegarder les données. Le stockage local est peut-être plein ou indisponible.");
  }
}

// Données de l'application (chargées après récupération des fichiers JSON)
let eleves = [];
let criteres = [];

// ===================================================================================
// FONCTIONS DE GESTION DES FENÊTRES MODALES
// ===================================================================================

const modalOverlay = document.getElementById('management-modal-overlay');
const groupPanel = document.getElementById('group-management-panel');
const criteriaPanel = document.getElementById('criteria-management-panel');

function closeAllModals() {
  modalOverlay.style.display = 'none';
}

function openGroupManagement() {
  const editor = document.getElementById('group-editor');
  editor.innerHTML = '';
  const classes = eleves.reduce((acc, e, i) => {
    (acc[e.classe] = acc[e.classe] || []).push({ ...e, index: i });
    return acc;
  }, {});
  Object.keys(classes).sort().forEach(classe => {
    const section = document.createElement('div');
    section.className = 'class-section';
    section.innerHTML = `<h3>Classe ${classe}</h3>`;
    classes[classe].forEach(e => {
      const row = document.createElement('div');
      row.className = 'student-row';
      row.innerHTML = `<span class="student-name">${e.prenom} ${e.nom}</span><label>Groupe :</label><input type="number" value="${e.groupe}" data-index="${e.index}" style="width: 60px;">`;
      section.appendChild(row);
    });
    editor.appendChild(section);
  });
  groupPanel.style.display = 'block';
  criteriaPanel.style.display = 'none';
  modalOverlay.style.display = 'flex';
}

function saveGroupsAndReload() {
  document.querySelectorAll('#group-editor input[data-index]').forEach(input => {
    eleves[input.dataset.index].groupe = parseInt(input.value, 10) || 1;
  });
  saveData('mesEleves', eleves);
  alert('Groupes sauvegardés ! La page va se rafraîchir.');
  location.reload();
}

function openCriteriaManagement() {
  const editor = document.getElementById('criteria-editor');
  editor.innerHTML = '';
  criteres.forEach((critere, index) => {
    const row = document.createElement('div');
    row.className = 'criterion-row';
    row.innerHTML = `<div class="criterion-label"><strong>${critere.label}</strong><p>Suggestions d'appréciations (une par ligne) :</p><textarea data-index="${index}" data-type="suggestions">${critere.suggestions.join('\n')}</textarea><p>Conseils pour progresser (une par ligne) :</p><textarea data-index="${index}" data-type="improvements">${critere.improvements.join('\n')}</textarea></div>`;
    editor.appendChild(row);
  });
  criteriaPanel.style.display = 'block';
  groupPanel.style.display = 'none';
  modalOverlay.style.display = 'flex';
}

function saveCriteriaAndReload() {
  document.querySelectorAll('#criteria-editor textarea[data-index]').forEach(textarea => {
    const { index, type } = textarea.dataset;
    criteres[index][type] = textarea.value.split('\n').map(line => line.trim()).filter(line => line);
  });
  saveData('mesCriteres', criteres);
  alert('Appréciations sauvegardées ! La page va se rafraîchir.');
  location.reload();
}

// ===================================================================================
// LOGIQUE PRINCIPALE DE L'APPLICATION
// ===================================================================================

document.addEventListener('DOMContentLoaded', async () => {
  const [defaultEleves, defaultCriteres] = await Promise.all([
    fetch('data/eleves.json').then(res => res.json()),
    fetch('data/criteres.json').then(res => res.json())
  ]);

  eleves = loadData('mesEleves', defaultEleves);
  criteres = loadData('mesCriteres', defaultCriteres);

  // Affichage de la date
  document.getElementById('date').textContent = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

  // Génération du sélecteur d'élèves par classe puis groupe
  const studentSelector = document.getElementById('student-selector');
  studentSelector.innerHTML = '<label>Classes et groupes</label>';

  const classList = document.createElement('div');
  classList.className = 'class-list';
  studentSelector.appendChild(classList);

  const classes = eleves.reduce((acc, e, index) => {
    const classGroups = acc[e.classe] || (acc[e.classe] = {});
    (classGroups[e.groupe] = classGroups[e.groupe] || []).push({ ...e, index });
    return acc;
  }, {});

  Object.keys(classes).sort().forEach(classe => {
    const classSection = document.createElement('details');
    classSection.className = 'class-section';
    const classSummary = document.createElement('summary');
    classSummary.textContent = `Classe ${classe}`;
    classSection.appendChild(classSummary);

    Object.keys(classes[classe]).sort((a, b) => a - b).forEach(groupe => {
      const groupSection = document.createElement('details');
      groupSection.className = 'group-section';
      const groupSummary = document.createElement('summary');
      groupSummary.textContent = `Groupe ${groupe}`;
      groupSection.appendChild(groupSummary);

      classes[classe][groupe].forEach(e => {
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'student-checkbox';
        checkboxWrapper.innerHTML = `<label><input type="checkbox" name="eleve" value="${e.index}"> ${e.prenom} ${e.nom}</label>`;
        groupSection.appendChild(checkboxWrapper);
      });

      classSection.appendChild(groupSection);
    });

    classList.appendChild(classSection);
  });

  // Génération des cartes d’appréciation
  const appContainer = document.getElementById('appreciations');
  appContainer.innerHTML = '';
  criteres.forEach(c => {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = `<div class="icon"><i class="fas ${c.icon}"></i></div><div class="content"><h3>${c.label}</h3><select id="${c.code}"><option value="">— Sélectionnez —</option>${c.suggestions.map(s => `<option>${s}</option>`).join('')}</select></div>`;
    appContainer.appendChild(card);
  });

  // Logique du bouton "Pour progresser"
  document.getElementById('progresser').addEventListener('click', () => {
    const divImp = document.getElementById('improvements');
    divImp.innerHTML = '<h2>Pour progresser</h2><ul></ul>';
    const ul = divImp.querySelector('ul');
    criteres.forEach(c => {
      const sel = document.getElementById(c.code);
      const idx = sel.selectedIndex - 1;
      if (idx >= 0 && c.improvements.length > 0) {
        const levelCount = c.improvements.length;
        const suggestionCount = c.suggestions.length;
        const niveau = Math.min(levelCount - 1, Math.floor((idx / suggestionCount) * levelCount));
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="checkbox" checked> ${c.improvements[niveau]}</label>`;
        ul.appendChild(li);
      }
    });
    if (!ul.hasChildNodes()) {
      divImp.innerHTML = '<h2>Pour progresser</h2><p>Veuillez sélectionner au moins une appréciation.</p>';
    }
  });

  // Logique de l'export PDF
  document.getElementById('export-pdf').addEventListener('click', () => {
    const selectedIndexes = Array.from(document.querySelectorAll('input[name="eleve"]:checked')).map(cb => cb.value);
    if (selectedIndexes.length === 0) {
      alert("Veuillez sélectionner au moins un élève.");
      return;
    }
    
    let appreciationsHTML = '<ul>';
    let hasAppreciations = false;
    criteres.forEach(c => {
        const select = document.getElementById(c.code);
        if (select.value) {
            hasAppreciations = true;
            appreciationsHTML += `<li><strong>${select.previousElementSibling.textContent}:</strong> ${select.value}</li>`;
        }
    });
    appreciationsHTML += '</ul>';
    if (!hasAppreciations) appreciationsHTML = "<p>Aucune appréciation sélectionnée.</p>";

    // Correction 1: Ne retenir que les phrases sélectionnées (cochées)
    let improvementsHTML = '';
    const checkedImprovements = document.querySelectorAll('#improvements input[type="checkbox"]:checked');
    if (checkedImprovements.length > 0) {
        improvementsHTML = '<h2>Pour progresser</h2><ul>';
        checkedImprovements.forEach(checkbox => {
            // Ajoute le texte du parent <label> sans la checkbox elle-même
            improvementsHTML += `<li>${checkbox.parentElement.textContent.trim()}</li>`;
        });
        improvementsHTML += '</ul>';
    }

    const exportDate = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
    const aggregatedHTML = selectedIndexes.map((index, pageIndex) => {
      const eleve = eleves[index];
      const pageBreakStyle = pageIndex < selectedIndexes.length - 1 ? 'page-break-after: always;' : '';

      return `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: auto; ${pageBreakStyle}">
          <header style="text-align: center; border-bottom: 1px solid #ccc; padding-bottom: 15px;">
            <h1>Appréciations en enseignement professionnel</h1>
            <p style="font-style: italic; color: #555; margin-top: 5px; margin-bottom: 10px;">appréciation relative à l’enseignement professionnel « Étude et économie de la construction », bilan établi à l’issue de chaque période. »</p>
            <p>${exportDate}</p>
            <h2 style="margin-top: 20px;">Élève : ${eleve.prenom} ${eleve.nom}</h2>
          </header>
          <section style="margin-top: 30px;"><h3 style="margin-bottom: 10px;">Appréciations générales :</h3><div style="line-height:1.6;">${appreciationsHTML}</div></section>
          <section style="margin-top: 30px;">${improvementsHTML}</section>
          <footer style="margin-top: 60px; display: flex; gap: 40px; border-top: 1px solid #ccc; padding-top: 20px; page-break-inside: avoid;">
            <div style="flex: 1;"><label style="font-weight: bold; display: block; margin-bottom: 50px;">Signature des parents</label></div>
            <div style="flex: 1;"><label style="font-weight: bold; display: block; margin-bottom: 50px;">Signature de l’enseignant</label></div>
          </footer>
        </div>`;
    }).join('');

    const collectiveFilename = `Appreciations_Collectives_${selectedIndexes.length}_eleves.pdf`.replace(/ /g, '_');
    html2pdf()
      .set({ margin: [0.5, 0.4, 0.5, 0.4], filename: collectiveFilename, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } })
      .from(`<div>${aggregatedHTML}</div>`)
      .save();
  });
});
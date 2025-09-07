// ===================================================================================
// DONNÉES PAR DÉFAUT
// Utilisées la 1ère fois ou si les données personnalisées sont absentes/effacées.
// ===================================================================================

const defaultEleves = [
  // 2EMNB1 groupe 1
  { prenom: 'Khadija', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Nour', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Mélissa', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Fatima', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Glory', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Rayane Bamba', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Chloé', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Orlane', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Ayman', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Killyann', nom: '', classe: '2EMNB1', groupe: 1 },
  { prenom: 'Enzo', nom: '', classe: '2EMNB1', groupe: 1 },
  // 2EMNB1 groupe 2
  { prenom: 'Maria-Teodora', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Giorgi', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Angelina', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Karamba', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Fernanda', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Kelly', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Samia', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Pharel', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Adam', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Noa', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Romayssa', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Ranim', nom: '', classe: '2EMNB1', groupe: 2 },
  { prenom: 'Danny', nom: '', classe: '2EMNB1', groupe: 2 },
  // 1AA groupe 1
  { prenom: 'Adam', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Edith', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Flora', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Ortence', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Dame', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Luis', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Lizi', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Débora', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Baba', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Noemy', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Emma', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Heather', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Tamirlan', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Diadie', nom: '', classe: '1AA', groupe: 1 },
  { prenom: 'Andréas', nom: '', classe: '1AA', groupe: 1 }
];

const defaultCriteres = [
  // Données initiales issues du fichier script.js
  { code: 'implication', label: 'Implication et attitude en classe', icon: 'fa-user-check', suggestions: [ 'Se montre souvent désintéressé(e) lors des activités de groupe.', 'A du mal à suivre l’ensemble des consignes proposées.', 'Intervient rarement et reste en retrait lors des explications.', 'Montre peu de curiosité pour les sujets abordés.', 'Peut être distrait(e) par des éléments extérieurs au cours.', 'Fixe parfois des objectifs sans les formaliser.', 'Commence les tâches sans toujours écouter les consignes.', 'Participe ponctuellement sans régularité notable.', 'Montre une attention variable selon les séances.', 'Suit globalement les consignes, avec quelques oublis.', 'Est attentif(ve) mais hésite avant de solliciter l’enseignant.', 'Demande parfois des clarifications de manière irrégulière.', 'Intervient avec pertinence mais de façon sporadique.', 'Participe activement dans certains travaux pratiques.', 'Propose des idées de manière régulière en groupe.', 'Prend des initiatives pour approfondir certaines notions.', 'Demande des retours pour améliorer son attitude en classe.', 'Affiche une attitude positive et motivée en continu.', 'Fait preuve d’initiative et engage des échanges constructifs.', 'Donne l’exemple par une implication soutenue et constante.' ], improvements: [ 'Essayez de vous impliquer davantage en posant une question par séance.', 'Poursuivez vos efforts et cherchez à participer plus régulièrement.', 'Continuez sur cette lancée et partagez vos idées avec confiance.', 'Maintenez cette attitude proactive et inspirez vos camarades.' ] },
  { code: 'technique', label: 'Compétences techniques / professionnelles', icon: 'fa-wrench', suggestions: [ 'Rencontre des difficultés à utiliser les outils de base.', 'Manque de précision dans l’exécution des tâches techniques.', 'A besoin d’un accompagnement fréquent pour réaliser les opérations.', 'Éprouve des hésitations dans l’application des procédures.', 'Respecte partiellement les normes de sécurité élémentaires.', 'Sait reproduire les gestes appris sans autonomie complète.', 'Montre une compréhension basique des outils professionnels.', 'Accomplit les tâches techniques avec guidance régulière.', 'Commence à respecter les règles de sécurité de manière sporadique.', 'Maîtrise les opérations élémentaires en situation guidée.', 'Prend en compte les consignes de sécurité avec régularité.', 'Montre une rigueur correcte dans le maniement des équipements.', 'Accomplit les travaux techniques de façon fiable et répétée.', 'Démontre une bonne compréhension des protocoles professionnels.', 'Exécute les tâches techniques avec précision et méthode.', 'Utilise efficacement les outils en respectant les normes.', 'Fait preuve d’autonomie et de soin dans le travail technique.', 'Anticipe les difficultés et ajuste sa méthode de travail.', 'Maîtrise les gestes professionnels complexes de façon constante.', 'Donne l’exemple en matière de qualité et de sécurité.' ], improvements: [ 'Pratiquez les gestes de base régulièrement pour gagner en confiance.', 'Consolidez vos acquis en vous exerçant sur des cas simples.', 'Défiez-vous sur des tâches plus complexes pour gagner en autonomie.', 'Continuez d’affiner vos compétences et partagez votre savoir-faire.' ] },
  { code: 'comprehension', label: 'Compréhension et acquisition des savoirs', icon: 'fa-brain', suggestions: [ 'N’arrive pas à restituer les notions de base en contexte.', 'Comprend des éléments isolés sans lien global.', 'Montre des difficultés à verbaliser sa compréhension.', 'A besoin d’exemples répétés pour assimiler pleinement.', 'Assimile partiellement certaines notions fondamentales.', 'Doit revoir régulièrement les notions traitées.', 'Comprend l’essentiel mais oublie parfois des détails clés.', 'Reformule les notions simples avec aide ponctuelle.', 'Établit un lien limité entre théorie et pratique.', 'Applique les savoirs de base en exercices guidés.', 'Intègre progressivement les concepts de manière autonome.', 'Pose des questions pertinentes pour clarifier sa compréhension.', 'Reformule les notions avec précision et en contexte adapté.', 'Applique de façon fiable les savoirs aux cas pratiques.', 'Fait preuve d’analyse et relie les notions entre elles.', 'Élargit sa compréhension à de nouvelles situations techniques.', 'Démontre une compréhension approfondie des principes clés.', 'Transfère ses connaissances à des cas pratiques variés.', 'Synthétise clairement les savoirs et maîtrise leur application.', 'Excelle dans l’acquisition et l’exploitation des savoirs.' ], improvements: [ 'Relisez vos notes après chaque cours pour renforcer votre compréhension.', 'Posez des questions dès que vous avez un doute pour clarifier les notions.', 'Enrichissez votre réflexion en reliant théorie et pratique.', 'Expliquez les concepts à un camarade pour consolider votre maîtrise.' ] },
  { code: 'travail', label: 'Travail personnel et régularité', icon: 'fa-clock', suggestions: [ 'Rend fréquemment les travaux hors délai sans explication.', 'Travaille de façon irrégulière selon la motivation du jour.', 'A du mal à organiser son planning personnel.', 'N’anticipe pas les étapes et termine souvent à la dernière minute.', 'Manque de suivi dans l’application des consignes de travail.', 'Répond aux exigences mais sans constance marquée.', 'Fournit un travail acceptable uniquement dans l’urgence.', 'Développe une routine de travail avec quelques oublis.', 'Gère son temps de façon moyenne, avec quelques retards.', 'Respecte globalement les échéances, parfois juste à temps.', 'Planifie les tâches simples sans demander d’aide.', 'Réalise un travail soigné lorsqu’il y consacre du temps.', 'Fournit régulièrement un travail complet et bien présenté.', 'Anticipe les demandes et propose des compléments d’analyse.', 'Organise efficacement son travail avec peu de rappels extérieurs.', 'Démontre une bonne autonomie dans la réalisation des tâches.', 'Adapte son rythme de travail en fonction des besoins du projet.', 'Travail approfondi et rendu systématiquement en avance.', 'Donne l’exemple par sa rigueur et sa régularité constantes.' ], improvements: [ 'Organisez une liste de tâches à accomplir chaque jour.', 'Fixez-vous des échéances claires pour chaque travail.', 'Planifiez vos sessions de travail en avance pour plus de régularité.', 'Maintenez cette rigueur et anticipez toujours vos besoins.' ] },
  { code: 'savoir_etre', label: 'Savoir-être professionnel', icon: 'fa-user-tie', suggestions: [ 'Manque ponctuel aux règles de base (ponctualité, tenue).', 'Comportement variable selon les situations.', 'A besoin de rappels pour respecter les consignes élémentaires.', 'Manque parfois de considération pour le matériel partagé.', 'Interagit de façon restreinte avec les camarades.', 'Globalement respectueux des règles, avec quelques oublis.', 'Attitude correcte mais sans initiative relationnelle.', 'Comportement coopératif dans certaines activités.', 'Civilité verbale présente mais plutôt discrète.', 'Sait écouter et respecter les avis des autres.', 'Participe de manière constructive aux échanges de groupe.', 'Communication claire et respectueuse la plupart du temps.', 'Gère les conflits simples avec calme et professionnalisme.', 'Respect constant du matériel et de l’environnement.', 'Propose spontanément son aide aux camarades en difficulté.', 'Attitude exemplaire de collaboration et de partage.', 'Crée un climat de confiance par son professionnalisme.', 'Donne l’exemple par sa ponctualité et son sérieux.' ], improvements: [ 'Rappelez-vous de respecter ponctualité et consignes à chaque séance.', 'Travaillez votre communication avec vos pairs pour un meilleur échange.', 'Proposez régulièrement votre aide pour renforcer votre esprit d’équipe.', 'Continuez d’incarner un savoir-être exemplaire pour vos camarades.' ] },
  { code: 'progression', label: 'Progression', icon: 'fa-chart-line', suggestions: [ 'N’a pas montré d’évolution notable depuis le début du semestre.', 'Progrès limités, à consolider régulièrement les fondamentaux.', 'Progression irrégulière et sujette à encadrement permanent.', 'Avance lentement avec recul sur certaines notions.', 'Progrès perceptibles mais sans suivi clair.', 'Évolution modérée, à renforcer par un travail ciblé.', 'Montre une amélioration progressive sur quelques points.', 'Progrès constants dans les tâches guidées.', 'Avance régulièrement sur les exercices pratiques.', 'S’adapte progressivement en autonomie.', 'Amélioration sensible dans la compréhension des méthodes.', 'Acquiert de nouvelles compétences à un rythme satisfaisant.', 'Progression régulière avec initiatives ponctuelles.', 'Évolution notable sur plusieurs critères.', 'S’inscrit dans une dynamique positive de progression.', 'Démontre une constance dans le développement de ses acquis.', 'Excelle dans sa progression et ses résultats sont en nette amélioration.', 'Affine sans cesse ses compétences et perfectionne son savoir.', 'Donne l’exemple par sa progression continue et motivée.' ], improvements: [ 'Identifiez un point clé à améliorer chaque semaine.', 'Fixez-vous de petits objectifs pour mesurer votre progression.', 'Célébrez vos progrès et définissez un nouveau défi.', 'Continuez à vous challenger pour maintenir votre évolution.' ] }
];

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

// Chargement des données au démarrage de l'application
let eleves = loadData('mesEleves', defaultEleves);
let criteres = loadData('mesCriteres', defaultCriteres);

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

document.addEventListener('DOMContentLoaded', () => {
  // Affichage de la date
  document.getElementById('date').textContent = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

  // Génération du sélecteur d'élèves par classe puis groupe
  const studentSelector = document.getElementById('student-selector');
  studentSelector.innerHTML = '<label>Classe</label>';

  const classSelect = document.createElement('select');
  classSelect.id = 'class-select';
  const classes = Array.from(new Set(eleves.map(e => e.classe))).sort();
  classSelect.innerHTML = '<option value="">— Sélectionnez —</option>' + classes.map(c => `<option value="${c}">${c}</option>`).join('');
  studentSelector.appendChild(classSelect);

  const groupsContainer = document.createElement('div');
  groupsContainer.id = 'class-groups';
  studentSelector.appendChild(groupsContainer);

  function renderGroups(classe) {
    groupsContainer.innerHTML = '';
    if (!classe) return;
    const grouped = eleves
      .map((e, i) => ({ ...e, index: i }))
      .filter(e => e.classe === classe)
      .reduce((acc, e) => { (acc[e.groupe] = acc[e.groupe] || []).push(e); return acc; }, {});
    Object.keys(grouped).sort((a,b) => a-b).forEach(groupe => {
      const groupContainer = document.createElement('div');
      groupContainer.className = 'student-group';
      groupContainer.innerHTML = `<h4>Groupe ${groupe}</h4>`;
      grouped[groupe].forEach(e => {
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'student-checkbox';
        checkboxWrapper.innerHTML = `<label><input type="checkbox" name="eleve" value="${e.index}"> ${e.prenom} ${e.nom}</label>`;
        groupContainer.appendChild(checkboxWrapper);
      });
      groupsContainer.appendChild(groupContainer);
    });
  }

  classSelect.addEventListener('change', e => renderGroups(e.target.value));
  if (classes.length > 0) {
    classSelect.value = classes[0];
    renderGroups(classes[0]);
  }

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

    selectedIndexes.forEach(index => {
      const eleve = eleves[index];
      
      // Correction 2: Ajouter l'en-tête personnalisé
      const pdfContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: auto;">
          <header style="text-align: center; border-bottom: 1px solid #ccc; padding-bottom: 15px;">
            <h1>Appréciations en enseignement professionnel</h1>
            <p style="font-style: italic; color: #555; margin-top: 5px; margin-bottom: 10px;">appréciation relative à l’enseignement professionnel « Étude et économie de la construction », bilan établi à l’issue de chaque période. »</p>
            <p>${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h2 style="margin-top: 20px;">Élève : ${eleve.prenom} ${eleve.nom}</h2>
          </header>
          <section style="margin-top: 30px;"><h3 style="margin-bottom: 10px;">Appréciations générales :</h3><div style="line-height:1.6;">${appreciationsHTML}</div></section>
          <section style="margin-top: 30px;">${improvementsHTML}</section>
          <footer style="margin-top: 60px; display: flex; gap: 40px; border-top: 1px solid #ccc; padding-top: 20px; page-break-inside: avoid;">
            <div style="flex: 1;"><label style="font-weight: bold; display: block; margin-bottom: 50px;">Signature des parents</label></div>
            <div style="flex: 1;"><label style="font-weight: bold; display: block; margin-bottom: 50px;">Signature de l’enseignant</label></div>
          </footer>
        </div>`;
        
      const filename = `Appreciation_${eleve.prenom}_${eleve.nom}.pdf`.replace(/ /g, '_');
      html2pdf().set({ margin: [0.5, 0.4, 0.5, 0.4], filename, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(pdfContent).save();
    });
  });
});
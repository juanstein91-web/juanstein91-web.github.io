/* =====================================================================
   script.js : affiche le contenu de data.js dans les pages
   ---------------------------------------------------------------------
   Tu n'as normalement PAS besoin de modifier ce fichier.
   Chaque page HTML a un attribut data-page sur la balise <body>
   (par exemple data-page="accueil"). Selon cette valeur, la bonne
   fonction ci-dessous remplit la page.
   ===================================================================== */

/* Petite fonction utilitaire : trouve un élément par son id */
function $(id) { return document.getElementById(id); }

/* Transforme une liste de textes en <li> */
function liste(items) { return items.map(t => `<li>${t}</li>`).join(""); }

/* Transforme un tableau [[entêtes], [ligne], ...] en <table> */
function tableau(lignes) {
  const [entetes, ...corps] = lignes;
  return `<div class="table-wrap"><table>
    <thead><tr>${entetes.map(e => `<th>${e}</th>`).join("")}</tr></thead>
    <tbody>${corps.map(l => `<tr>${l.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

/* Libellés des niveaux de compétence */
const NIVEAUX = { "acquis": "Acquis", "en cours": "En cours d'apprentissage", "decouvert": "Découvert en formation" };

/* ---------- Éléments communs à toutes les pages ---------- */
function remplirCommun() {
  const p = SITE.profil;
  document.querySelectorAll("[data-nom]").forEach(el => el.textContent = `${p.prenom} ${p.nom}`);
  const pied = $("pied");
  if (pied) {
    pied.innerHTML = `
      <span>© ${new Date().getFullYear()} ${p.prenom} ${p.nom} · BTS SIO SISR</span>
      <span>Mise à jour : ${p.derniereMiseAJour}</span>
      <span><a href="mailto:${p.email}">E-mail</a> · <a href="${p.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${p.github}" target="_blank" rel="noopener">GitHub</a></span>`;
  }
  /* Menu mobile : ouvre / ferme la navigation */
  const bouton = $("menu-bouton");
  const nav = $("menu");
  if (bouton && nav) {
    bouton.addEventListener("click", () => {
      const ouvert = nav.classList.toggle("ouvert");
      bouton.setAttribute("aria-expanded", ouvert);
    });
  }
}

/* ---------- Accueil ---------- */
function pageAccueil() {
  const p = SITE.profil;
  $("titre").textContent = p.titre;
  $("accroche").textContent = p.accroche;
  $("photo").src = p.photo;
  $("photo").alt = `Photo de ${p.prenom} ${p.nom}`;
  $("btn-cv").href = p.cv;

  const r = SITE.realisations[0];
  const v = SITE.veille.articles[0];
  $("cartes").innerHTML = `
    <a class="carte lien-carte" href="realisation.html?id=${r.id}">
      <p class="etiquette">Réalisation</p>
      <h3>${r.titre}</h3>
      <p class="muted">${r.resume}</p>
    </a>
    <a class="carte lien-carte" href="a-propos.html#alternance">
      <p class="etiquette">Alternance</p>
      <h3>${SITE.aPropos.entreprise.nom}</h3>
      <p class="muted">${SITE.aPropos.entreprise.poste}, ${SITE.aPropos.entreprise.service}.</p>
    </a>
    <a class="carte lien-carte" href="veille.html">
      <p class="etiquette">Veille · ${v.date}</p>
      <h3>${v.titre}</h3>
      <p class="muted">${SITE.veille.sujet}</p>
    </a>`;
}

/* ---------- À propos ---------- */
function pageAPropos() {
  const a = SITE.aPropos, p = SITE.profil, e = a.entreprise;
  $("presentation").innerHTML = a.presentation.map(t => `<p>${t}</p>`).join("") + `<p>${a.objectifs}</p>`;
  $("entreprise").innerHTML = `
    <dl class="infos">
      <dt>Entreprise</dt><dd>${e.nom}</dd>
      <dt>Activité</dt><dd>${e.activite}</dd>
      <dt>Lieu</dt><dd>${e.lieu}</dd>
      <dt>Service</dt><dd>${e.service}</dd>
      <dt>Poste</dt><dd>${e.poste}</dd>
      <dt>Période</dt><dd>${e.periode}</dd>
    </dl>`;
  $("parcours").innerHTML = SITE.parcours.map(x => `
    <li>
      <span class="date">${x.date}</span>
      <h3>${x.titre}</h3>
      <p class="muted">${x.lieu}</p>
      <p>${x.texte}</p>
    </li>`).join("");
  $("experiences").innerHTML = SITE.experiences.map(x => `
    <article class="carte">
      <div class="entete-carte"><h3>${x.entreprise}</h3><span class="muted">${x.periode}</span></div>
      <p class="muted">${x.poste} · ${x.lieu}</p>
      <ul>${liste(x.missions)}</ul>
      ${x.outils.length ? `<p class="tags">${x.outils.map(o => `<span class="tag">${o}</span>`).join("")}</p>` : ""}
    </article>`).join("");
  $("interets").innerHTML = a.centresInteret.map(c => `<span class="tag">${c}</span>`).join("");
  $("cv-apercu").src = p.cv;
  $("cv-telecharger").href = p.cv;
  $("contact-rapide").innerHTML = `<a href="mailto:${p.email}">${p.email}</a>`;
}

/* ---------- Liste des réalisations ---------- */
function pageRealisations() {
  $("liste-realisations").innerHTML = SITE.realisations.map(r => `
    <a class="carte lien-carte carte-image" href="realisation.html?id=${r.id}">
      <img src="${r.image}" alt="" loading="lazy">
      <div>
        <p class="etiquette">${r.cadre} · ${r.periode}</p>
        <h3>${r.titre}</h3>
        <p class="muted">${r.resume}</p>
        <p class="tags">${r.technologies.map(t => `<span class="tag">${t}</span>`).join("")}</p>
      </div>
    </a>`).join("");
}

/* ---------- Détail d'une réalisation (gabarit en 8 rubriques) ---------- */
function pageRealisation() {
  const id = new URLSearchParams(location.search).get("id");
  const r = SITE.realisations.find(x => x.id === id) || SITE.realisations[0];
  document.title = `${r.titre} | ${SITE.profil.prenom} ${SITE.profil.nom}`;
  const dossier = `assets/images/realisations/${r.id}/`;

  $("realisation").innerHTML = `
    <p class="etiquette">${r.cadre} · ${r.periode}</p>
    <h1>${r.titre}</h1>
    <p class="tags">${r.technologies.map(t => `<span class="tag">${t}</span>`).join("")}</p>

    <nav class="sommaire" aria-label="Rubriques">
      <a href="#r1">1. Contexte</a><a href="#r2">2. Besoin</a><a href="#r3">3. Environnement</a><a href="#r4">4. Travail réalisé</a>
      <a href="#r5">5. Contribution</a><a href="#r6">6. Difficultés</a><a href="#r7">7. Tests</a><a href="#r8">8. Compétences et preuves</a>
    </nav>

    <section id="r1"><h2>1. Titre et contexte</h2><p>${r.contexte}</p></section>

    <section id="r2"><h2>2. Besoin et objectifs</h2><p>${r.besoin}</p><ul>${liste(r.objectifs)}</ul></section>

    <section id="r3"><h2>3. Environnement</h2>${tableau(r.environnement)}<p class="muted">${r.environnementNote}</p></section>

    <section id="r4"><h2>4. Travail réalisé</h2><ol>${liste(r.etapes)}</ol></section>

    <section id="r5"><h2>5. Contribution personnelle</h2><ul>${liste(r.contribution)}</ul></section>

    <section id="r6"><h2>6. Difficultés rencontrées</h2>
      ${r.difficultes.map(d => `<div class="carte difficulte"><p><strong>Problème :</strong> ${d.probleme}</p><p><strong>Solution :</strong> ${d.solution}</p></div>`).join("")}
      <p><strong>Avec du recul :</strong> ${r.recul}</p>
    </section>

    <section id="r7"><h2>7. Tests et résultat</h2>${tableau(r.tests)}<p>${r.resultat}</p></section>

    <section id="r8"><h2>8. Compétences et preuves</h2>
      <h3>Compétences du Bloc 1 mobilisées</h3>
      <ul>${r.competencesBloc1.map(c => `<li><strong>${c.nom}</strong> : ${c.detail}</li>`).join("")}</ul>
      <h3>Captures d'écran</h3>
      <div class="galerie">${r.preuves.map(pr => `
        <figure><a href="${dossier}${pr.image}" target="_blank" rel="noopener"><img src="${dossier}${pr.image}" alt="${pr.legende}"></a><figcaption>${pr.legende}</figcaption></figure>`).join("")}
      </div>
      <h3>Documents</h3>
      <ul>${r.documents.map(d => `<li><a href="${d.fichier}" target="_blank" rel="noopener">${d.nom}</a></li>`).join("")}</ul>
    </section>`;
}

/* ---------- Compétences ---------- */
function pageCompetences() {
  $("legende").innerHTML = Object.entries(NIVEAUX).map(([cle, txt]) => `<span class="niveau niveau-${cle.replace(" ", "-")}">${txt}</span>`).join("");
  $("competences").innerHTML = SITE.competences.map(cat => `
    <article class="carte">
      <h3>${cat.categorie}</h3>
      <ul class="liste-competences">${cat.elements.map(c => `
        <li>
          <div><span>${c.nom}</span><small class="muted">${c.contexte}</small></div>
          <span class="niveau niveau-${c.niveau.replace(" ", "-")}">${NIVEAUX[c.niveau]}</span>
        </li>`).join("")}
      </ul>
    </article>`).join("");
}

/* ---------- Veille ---------- */
function pageVeille() {
  const v = SITE.veille;
  $("sujet").textContent = v.sujet;
  $("pourquoi").textContent = v.pourquoi;
  $("methode").textContent = v.methode;
  $("sources").innerHTML = v.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.nom}</a> <span class="muted">· ${s.type}</span></li>`).join("");
  $("articles").innerHTML = v.articles.map(a => `
    <article class="carte article">
      <p class="etiquette">Synthèse du ${a.date}</p>
      <h3>${a.titre}</h3>
      <p class="muted">Sources : <a href="${a.lien}" target="_blank" rel="noopener">${a.source}</a></p>
      <h4>Résumé</h4><p>${a.resume}</p>
      <h4>Mon analyse</h4><p>${a.analyse}</p>
    </article>`).join("");
}

/* ---------- Contact ---------- */
function pageContact() {
  const p = SITE.profil;
  $("contact").innerHTML = `
    <a class="carte lien-carte" href="mailto:${p.email}"><p class="etiquette">E-mail</p><h3>${p.email}</h3></a>
    <a class="carte lien-carte" href="${p.linkedin}" target="_blank" rel="noopener"><p class="etiquette">LinkedIn</p><h3>Juan Stein</h3></a>
    <a class="carte lien-carte" href="${p.github}" target="_blank" rel="noopener"><p class="etiquette">GitHub</p><h3>${p.github.replace("https://github.com/", "")}</h3></a>`;
  $("btn-mail").href = `mailto:${p.email}?subject=${encodeURIComponent("Contact depuis votre portfolio")}`;
  $("ville").textContent = p.ville;
}

/* ---------- Lancement : on choisit la fonction selon la page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  remplirCommun();
  const pages = {
    "accueil": pageAccueil,
    "a-propos": pageAPropos,
    "realisations": pageRealisations,
    "realisation": pageRealisation,
    "competences": pageCompetences,
    "veille": pageVeille,
    "contact": pageContact
  };
  const page = document.body.dataset.page;
  if (pages[page]) pages[page]();
});

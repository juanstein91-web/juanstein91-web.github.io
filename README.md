# Portfolio de Juan Stein · BTS SIO SISR

Site personnel qui présente mon parcours, mes réalisations, mes compétences et ma veille pour l'épreuve E5 du BTS SIO.

Il est fait uniquement en **HTML, CSS et JavaScript**, sans framework ni base de données. Il n'y a rien à installer.

---

## 1. Ouvrir et lancer le portfolio

1. Ouvre le dossier `portfolio`.
2. Double-clique sur `index.html` : le site s'ouvre dans ton navigateur.

C'est tout. Cette copie locale sert aussi de **solution de secours** le jour de l'oral si Internet ne marche pas : mets le dossier `portfolio` sur une clé USB.

---

## 2. Rôle de chaque fichier

```
portfolio/
├── index.html            Page d'accueil
├── a-propos.html         À propos : présentation, alternance, parcours, expériences, CV
├── realisations.html     Liste des réalisations
├── realisation.html      Détail d'une réalisation (gabarit en 8 rubriques)
├── competences.html      Compétences par domaine
├── veille.html           Veille technologique
├── contact.html          Coordonnées
├── css/
│   └── style.css         Apparence : couleurs, tailles, mise en page
├── js/
│   ├── data.js           ★ TOUT LE CONTENU DU SITE (le seul fichier à modifier en général)
│   └── script.js         Affiche le contenu de data.js dans les pages
├── assets/
│   ├── images/           Photo et captures d'écran
│   │   └── realisations/ Un dossier par réalisation
│   ├── documents/        CV, fiches, scripts (fichiers téléchargeables)
│   └── icons/            Icône de l'onglet du navigateur
└── README.md             Ce guide
```

**Comment ça marche ?** Les pages HTML ne contiennent que la structure, avec des zones vides. Au chargement, `script.js` lit le contenu dans `data.js` et remplit ces zones. Pour changer un texte, il suffit donc de modifier `data.js`.

Pour modifier les fichiers, utilise un éditeur de code gratuit comme **Visual Studio Code**, ou à défaut le Bloc-notes. Pas Word.

---

## 3. Les 3 règles pour modifier `data.js` sans tout casser

1. Le texte est toujours **entre guillemets** : `"mon texte"`.
2. Les éléments d'une liste sont **séparés par une virgule**. Oublier une virgule est l'erreur la plus fréquente.
3. Si ton texte contient un guillemet `"`, écris `\"`. Pour une barre oblique inverse (`MEDILOG\Administrateur`), écris `\\`.

**Si une page devient vide après une modification**, c'est qu'il y a une erreur de syntaxe dans `data.js`. Dans le navigateur, appuie sur **F12**, onglet **Console** : la ligne de l'erreur est indiquée en rouge.

---

## 4. Modifier les textes

Tout est dans `js/data.js` :

| Ce que tu veux changer | Partie de `data.js` |
|---|---|
| Titre et phrase d'accueil | `profil` → `titre`, `accroche` |
| Présentation de la page À propos | `aPropos` → `presentation` |
| Infos sur l'entreprise d'alternance | `aPropos` → `entreprise` |
| Frise du parcours | `parcours` |
| Date de mise à jour (pied de page) | `profil` → `derniereMiseAJour` |

Exemple : pour changer la phrase d'accueil, remplace le texte entre guillemets :

```js
accroche: "Mon nouveau texte d'accueil.",
```

---

## 5. Ajouter une compétence

Dans `data.js`, partie `competences`, trouve la bonne catégorie et ajoute une ligne dans `elements` :

```js
{ nom: "Proxmox VE", niveau: "en cours", contexte: "Installation d'un serveur Proxmox" },
```

`niveau` accepte trois valeurs exactes : `"acquis"`, `"en cours"` ou `"decouvert"` (sans accent).

Pour **monter un niveau**, change seulement la valeur, par exemple `"en cours"` → `"acquis"`.

Pour **ajouter une catégorie**, copie un bloc `{ categorie: "...", elements: [ ... ] },` complet et colle-le à la suite.

---

## 6. Ajouter une nouvelle réalisation

1. Crée un dossier pour tes captures : `assets/images/realisations/mon-projet/` (minuscules, sans espace ni accent).
2. Mets-y tes captures, par exemple `01-schema.jpg`, `02-test.jpg`.
3. Mets tes documents (fiche, procédure) dans `assets/documents/`.
4. Dans `data.js`, partie `realisations`, **copie tout le bloc** de la réalisation `tp2-medilog`, du `{` de départ jusqu'à la `}` de fin, et colle-le après, séparé par une virgule.
5. Dans la copie, change :
   - `id: "mon-projet"`, avec exactement le même nom que le dossier d'images ;
   - les 8 rubriques : `contexte`, `besoin`/`objectifs`, `environnement`, `etapes`, `contribution`, `difficultes`, `tests`, `competencesBloc1` ;
   - `preuves` : le nom de chaque image et sa légende ;
   - `image` : la capture affichée dans la liste des réalisations.

La nouvelle réalisation apparaît automatiquement dans la page Réalisations. Son adresse est `realisation.html?id=mon-projet`.

**N'oublie pas** de l'ajouter aussi dans ton tableau de synthèse .xlsx.

---

## 7. Modifier une expérience professionnelle

Dans `data.js`, partie `experiences`, modifie les textes de `missions`, `outils` ou `periode`. Pour ajouter une mission, ajoute une ligne entre guillemets suivie d'une virgule :

```js
missions: [
  "Mission déjà présente.",
  "Ma nouvelle mission."
],
```

Pense aussi à mettre à jour la frise dans `parcours` si besoin.

---

## 8. Ajouter un article de veille

Dans `data.js`, partie `veille` → `articles`, copie un bloc et colle-le **en premier** pour que la synthèse la plus récente apparaisse en haut :

```js
{
  date: "15/12/2026",
  titre: "Titre de ma synthèse",
  source: "Nom du site (date de l'article)",
  lien: "https://adresse-de-l-article",
  resume: "Ce que dit l'article, avec mes mots.",
  analyse: "Ce que j'en retiens et ce que ça change pour un technicien SISR."
},
```

Le jury attend **ton analyse**, pas seulement un lien. Une synthèse par mois minimum montre la régularité.

Pour ajouter une source suivie, ajoute une ligne dans `veille` → `sources`.

---

## 9. Remplacer le CV

1. Exporte ton nouveau CV en PDF.
2. Renomme-le exactement `cv-juan-stein.pdf`.
3. Remplace l'ancien fichier dans `assets/documents/`.

Rien d'autre à changer : le lien et l'aperçu utilisent ce nom.

---

## 10. Modifier les coordonnées

Dans `data.js`, partie `profil` : `email`, `linkedin`, `github`, `ville`. Elles sont mises à jour partout (accueil, pied de page, contact).

---

## 11. Ajouter ou remplacer une image

- **Photo de profil** : remplace `assets/images/portrait.jpg` par ta nouvelle photo, avec le même nom. Format conseillé : vertical, environ 600 × 750 pixels.
- **Captures d'une réalisation** : mets-les dans `assets/images/realisations/<id>/` et ajoute-les dans `preuves` de la réalisation.
- Garde des images légères, moins de 500 Ko si possible, pour que le site reste rapide.
- Noms de fichiers en minuscules, sans espace ni accent : `05-test-ping.jpg`, pas `Test Ping é.JPG`.

---

## 12. Changer les couleurs

Dans `css/style.css`, tout en haut, les couleurs sont regroupées dans `:root`. Par exemple, pour changer le bleu des boutons :

```css
--accent: #2f8cff;
```

---

## 13. Publier les modifications sur Internet (GitHub Pages)

Le site est hébergé gratuitement par **GitHub Pages**, dans un dépôt GitHub. GitHub Pages sert des sites statiques (HTML, CSS, JS), ce qui correspond exactement à ce portfolio.

**Méthode simple, par le site GitHub :**

1. Va sur ton dépôt du portfolio sur github.com.
2. Ouvre le fichier à modifier, par exemple `js/data.js`.
3. Clique sur l'icône crayon (*Edit this file*), fais ta modification, puis **Commit changes**.
4. Pour ajouter des images ou documents : **Add file → Upload files**, en respectant les dossiers.
5. Attends 1 à 2 minutes, puis recharge ton site (Ctrl + F5 pour vider le cache).

**Méthode avec Git**, une fois que tu es à l'aise :

```bash
git add .
git commit -m "Ajout de la réalisation X"
git push
```

**Avant chaque oral**, vérifie ton site depuis un autre appareil, en navigation privée.

---

## 14. Informations restant à compléter

- [ ] Tableau de synthèse : n° candidat et vérification des dates de 1re année.
- [ ] Une 2e réalisation, par exemple la base de connaissances ServiceNow chez ManpowerGroup.
- [ ] Une nouvelle synthèse de veille chaque mois.
- [ ] Mise à jour du CV.
- [ ] Nom de domaine personnel (juanstein.fr), plus tard.

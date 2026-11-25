/* =====================================================================
   data.js : TOUT LE CONTENU DU PORTFOLIO EST ICI
   ---------------------------------------------------------------------
   Pour modifier un texte, une compétence, une réalisation ou un article
   de veille, tu modifies UNIQUEMENT ce fichier.
   Règles à respecter :
   - le texte est toujours entre guillemets "..."
   - chaque élément d'une liste est séparé par une virgule
   - si ton texte contient un guillemet ", écris \" à la place
   Après une modification, ouvre index.html dans ton navigateur pour vérifier.
   ===================================================================== */

const SITE = {

  /* ---------- 1. Informations générales et coordonnées ---------- */
  profil: {
    prenom: "Juan",
    nom: "Stein",
    titre: "Étudiant en BTS SIO option SISR, en alternance",
    accroche: "Étudiant au CFA ITIS d'Évry, alternant à la DSI de ManpowerGroup. Je me forme à l'administration des systèmes et des réseaux.",
    ville: "Mennecy (91)",
    email: "juanstein91@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-stein-7b95b0366",
    github: "https://github.com/juanstein91-web",
    photo: "assets/images/portrait.jpg",
    cv: "assets/documents/cv-juan-stein.pdf",
    derniereMiseAJour: "25/11/2026"
  },

  /* ---------- 2. Page « À propos » ---------- */
  aPropos: {
    presentation: [
      "Je m'appelle Juan Stein et je suis en deuxième année de BTS Services Informatiques aux Organisations (SIO), option SISR (Solutions d'Infrastructure, Systèmes et Réseaux), au CFA ITIS d'Évry.",
      "Je suis ma formation en alternance, en contrat d'apprentissage sur 24 mois : une partie de la semaine en formation, le reste à la DSI de ManpowerGroup à La Défense.",
      "Ce qui m'intéresse le plus, c'est l'infrastructure : comprendre comment un réseau, un serveur ou un annuaire fonctionne, le mettre en place et le dépanner."
    ],
    objectifs: "Après le BTS, je souhaite poursuivre en bac+3 puis en master dans les systèmes, les réseaux et l'infrastructure.",
    entreprise: {
      nom: "ManpowerGroup",
      activite: "Groupe international de solutions en ressources humaines : travail temporaire, recrutement et accompagnement des carrières.",
      lieu: "Siège, La Défense (92)",
      service: "Direction des Systèmes d'Information (DSI)",
      poste: "Alternant informatique",
      periode: "25/08/2025 au 25/08/2027"
    },
    centresInteret: ["Voyages (Espagne)", "Informatique et nouvelles technologies"]
  },

  /* ---------- 3. Parcours (frise chronologique) ---------- */
  /* Pour ajouter une étape : copie un bloc { ... }, colle-le, modifie-le. */
  parcours: [
    { date: "2025 – 2027", titre: "BTS SIO option SISR, en alternance", lieu: "CFA ITIS, Évry", texte: "Contrat d'apprentissage de 24 mois." },
    { date: "Depuis août 2025", titre: "Alternant informatique, DSI", lieu: "ManpowerGroup, La Défense", texte: "Support aux utilisateurs, base de connaissances, ServiceNow." },
    { date: "Oct. 2024 – mai 2025", titre: "Agent de production", lieu: "X-FAB", texte: "Production en salle blanche, respect strict des procédures." },
    { date: "2021 – 2024", titre: "Baccalauréat général", lieu: "Lycée Marie Laurencin", texte: "Spécialités mathématiques et SVT." }
  ],

  /* ---------- 4. Expériences professionnelles ---------- */
  experiences: [
    {
      entreprise: "ManpowerGroup",
      poste: "Alternant informatique, DSI",
      lieu: "Siège, La Défense",
      periode: "Depuis le 25/08/2025",
      missions: [
        "Support informatique aux utilisateurs sur site : problèmes de connexion Wi-Fi, matériel oublié ou défectueux, accompagnement au quotidien.",
        "Transfert et amélioration de la base de connaissances du help-desk situé au Maroc : reprise de toutes les consignes existantes sur le Wiki, mise à jour ou création de consignes avec les responsables applicatifs, puis intégration dans ServiceNow, la nouvelle base de connaissances.",
        "Participation à la création de formulaires dans ServiceNow (mission en cours)."
      ],
      outils: ["ServiceNow", "Wiki interne", "Portail Agence", "Environnement Talent Solutions"],
      competences: ["Assistance aux utilisateurs", "Rédaction de procédures", "Travail avec les responsables applicatifs"]
    },
    {
      entreprise: "X-FAB",
      poste: "Agent de production",
      lieu: "Salle blanche",
      periode: "Octobre 2024 – mai 2025 (7 mois)",
      missions: [
        "Respect strict des procédures de fabrication en salle blanche.",
        "Utilisation d'équipements automatisés de haute précision.",
        "Détection et signalement des anomalies techniques ou de qualité.",
        "Travail en équipe et horaires décalés."
      ],
      outils: [],
      competences: ["Rigueur et respect des procédures", "Travail en équipe", "Adaptation"]
    }
  ],

  /* ---------- 5. Compétences ---------- */
  /* niveau possible : "acquis", "en cours" ou "decouvert" (sans accent) */
  competences: [
    {
      categorie: "Administration systèmes",
      elements: [
        { nom: "Windows 10 / 11", niveau: "acquis", contexte: "Utilisation quotidienne, poste client du TP2" },
        { nom: "Windows Server : AD DS, DNS, DHCP, GPO", niveau: "en cours", contexte: "TP2 et TP3 du projet Medilog" },
        { nom: "Linux (Debian)", niveau: "en cours", contexte: "Serveur SRV-FS01 du TP1" },
        { nom: "PowerShell", niveau: "decouvert", contexte: "Scripts de création d'OU, d'utilisateurs et de groupes" }
      ]
    },
    {
      categorie: "Réseaux",
      elements: [
        { nom: "Cisco IOS (switchs et routeurs)", niveau: "acquis", contexte: "TP Packet Tracer Medilog 3 sites" },
        { nom: "Adressage IPv4 et VLAN", niveau: "acquis", contexte: "Plan d'adressage Medilog" },
        { nom: "Routage inter-VLAN et routes statiques", niveau: "acquis", contexte: "TP Packet Tracer Medilog 3 sites" }
      ]
    },
    {
      categorie: "Virtualisation",
      elements: [
        { nom: "VirtualBox", niveau: "acquis", contexte: "Infrastructure Medilog : 3 machines virtuelles" },
        { nom: "Proxmox VE", niveau: "en cours", contexte: "Installation d'un serveur Proxmox" }
      ]
    },
    {
      categorie: "Cybersécurité",
      elements: [
        { nom: "GPO de sécurité (mots de passe, verrouillage)", niveau: "decouvert", contexte: "TP3 Medilog" },
        { nom: "ACL et accès SSH sur routeurs Cisco", niveau: "decouvert", contexte: "TP Packet Tracer Medilog" },
        { nom: "Snapshots et retour arrière", niveau: "decouvert", contexte: "TP1 et TP2 Medilog" }
      ]
    },
    {
      categorie: "Support informatique",
      elements: [
        { nom: "Assistance aux utilisateurs", niveau: "en cours", contexte: "Alternance ManpowerGroup" },
        { nom: "ServiceNow", niveau: "en cours", contexte: "Base de connaissances et formulaires" },
        { nom: "Documentation technique", niveau: "en cours", contexte: "Consignes du help-desk, fiches de TP" }
      ]
    }
  ],

  /* ---------- 6. Réalisations ---------- */
  /* Pour ajouter une réalisation : copie tout le bloc { id: ... },
     change l'id (sans espace ni accent), mets tes images dans
     assets/images/realisations/<id>/ et remplis les 8 rubriques. */
  realisations: [
    {
      id: "tp2-medilog",
      titre: "Mise en place du domaine Medilog : Active Directory, DNS et DHCP",
      resume: "Déploiement d'un contrôleur de domaine Windows Server, organisation de l'annuaire par service et jonction d'un premier poste client.",
      cadre: "Réalisation en cours de formation (TP2, projet Medilog)",
      periode: "04/11/2026",
      technologies: ["Windows Server 2025", "Active Directory", "DNS", "DHCP", "Windows 11", "PowerShell", "VirtualBox"],
      image: "assets/images/realisations/tp2-medilog/08-bienvenue-domaine.jpg",

      /* 1. Titre et contexte */
      contexte: "Medilog Services est une PME fictive de distribution de matériel médical, utilisée comme fil rouge en BTS SIO 2. Le DSI, M. Arnaud Leclercq, m'a demandé de mettre en place le domaine de l'entreprise, avec les utilisateurs de chaque service et un premier poste client. Ce TP fait suite au TP1, où j'avais créé les machines virtuelles SRV-DC01 (Windows Server) et SRV-FS01 (Debian).",

      /* 2. Besoin et objectifs */
      besoin: "L'entreprise veut gérer ses utilisateurs et ses postes depuis un seul serveur, au lieu de créer des comptes sur chaque ordinateur.",
      objectifs: [
        "Promouvoir SRV-DC01 en contrôleur du domaine medilog.local.",
        "Mettre en place le DNS et le DHCP pour que les postes trouvent le serveur et reçoivent leur adresse IP.",
        "Organiser l'annuaire en 4 OU (une par service), avec 7 utilisateurs et 4 groupes.",
        "Joindre un premier poste Windows 11 au domaine et s'y connecter avec un compte de l'annuaire."
      ],

      /* 3. Environnement */
      environnement: [
        ["Machine", "Rôle", "Système", "Adresse IP"],
        ["SRV-DC01", "Contrôleur de domaine, DNS et DHCP", "Windows Server 2025", "192.168.30.10 (fixe)"],
        ["PC-CLIENT", "Poste client joint au domaine", "Windows 11 Pro", "192.168.30.100 (DHCP)"]
      ],
      environnementNote: "Les machines sont des VM VirtualBox sur mon PC portable, reliées par un réseau interne nommé « medilog ». Domaine : medilog.local.",

      /* 4. Travail réalisé */
      etapes: [
        "Installation du rôle AD DS sur SRV-DC01 et création de la forêt medilog.local.",
        "Vérification du DNS installé avec l'AD : zone medilog.local et test avec nslookup.",
        "Installation du rôle DHCP et création de l'étendue Etendue-Medilog (192.168.30.100 à 192.168.30.200, passerelle .1, DNS .10).",
        "Création des 4 OU en PowerShell : OU_Commercial, OU_Technique, OU_Admin et OU_Informatique.",
        "Création des 7 utilisateurs, chacun dans l'OU de son service.",
        "Création d'un groupe par service (GRP_Commercial, GRP_Technique, GRP_Admin, GRP_Informatique) et ajout des membres.",
        "Installation de PC-CLIENT sous Windows 11 Pro : il reçoit son adresse IP par DHCP et utilise SRV-DC01 comme DNS.",
        "Renommage du poste en PC-CLIENT et jonction au domaine medilog.local.",
        "Connexion sur PC-CLIENT avec le compte du domaine c.martin."
      ],

      /* 5. Contribution personnelle */
      contribution: [
        "TP individuel, réalisé sur mon propre PC.",
        "J'ai choisi Windows Server 2025 au lieu de 2022, car c'était l'ISO disponible, et donné 4 Go de RAM au poste client, car Windows 11 l'exige.",
        "J'ai créé l'étendue DHCP en PowerShell quand l'installation graphique a bloqué la VM.",
        "J'ai réalisé les tests de bon fonctionnement et rédigé la fiche SP1 avec les captures."
      ],

      /* 6. Difficultés */
      difficultes: [
        { probleme: "SRV-DC01 a figé pendant l'installation graphique du rôle DHCP.", solution: "Redémarrage du serveur, vérification que l'Active Directory fonctionnait encore, puis installation du rôle DHCP en PowerShell." },
        { probleme: "Après ce redémarrage, l'horloge du serveur avait 7 minutes de retard. Or Kerberos, utilisé par l'AD, refuse les écarts d'heure trop grands.", solution: "Installation des Additions invité de VirtualBox et remise à l'heure du serveur." },
        { probleme: "La première jonction au domaine a échoué (identifiants incorrects) : la souris ne répondait plus dans la VM et le mot de passe est parti vide.", solution: "Redémarrage du poste et saisie au clavier. La jonction a ensuite réussi." }
      ],
      recul: "Si je refaisais ce TP, je prendrais un nouveau snapshot juste avant d'installer le DHCP, pour pouvoir revenir en arrière rapidement en cas de blocage.",

      /* 7. Tests et résultat */
      tests: [
        ["Test", "Commande ou vérification", "Résultat"],
        ["Domaine créé", "Connexion MEDILOG\\Administrateur", "OK"],
        ["DNS", "nslookup medilog.local", "OK, répond 192.168.30.10"],
        ["DHCP", "Console DHCP et ipconfig /all sur le client", "OK, 192.168.30.100 attribuée"],
        ["OU et utilisateurs", "Console Utilisateurs et ordinateurs AD", "OK, 4 OU et 7 comptes"],
        ["Jonction", "Message « Bienvenue dans le domaine »", "OK"],
        ["Compte du domaine", "whoami sur PC-CLIENT", "OK, medilog\\c.martin"]
      ],
      resultat: "Le domaine medilog.local fonctionne : le poste client reçoit sa configuration automatiquement et un utilisateur de l'annuaire peut s'y connecter. Cette organisation par OU et par groupes est réutilisée dans les TP suivants (GPO, partages, GLPI).",

      /* 8. Compétences et preuves */
      competencesBloc1: [
        { nom: "Mettre à disposition des utilisateurs un service informatique", detail: "Déployer un service (AD, DNS, DHCP) et réaliser les tests d'intégration." },
        { nom: "Gérer le patrimoine informatique", detail: "Recenser les ressources (machines, comptes) et mettre en place les niveaux d'habilitation (OU et groupes par service)." }
      ],
      preuves: [
        { image: "01-connexion-domaine.jpg", legende: "Connexion MEDILOG\\Administrateur : le serveur est devenu contrôleur de domaine." },
        { image: "02-console-dns.jpg", legende: "Zone DNS medilog.local avec l'enregistrement de SRV-DC01." },
        { image: "03-etendue-dhcp.jpg", legende: "Étendue DHCP active de 192.168.30.100 à 192.168.30.200." },
        { image: "04-les-4-ou.jpg", legende: "Les 4 OU des services dans l'annuaire." },
        { image: "05-utilisateurs-ou-commercial.jpg", legende: "Les 3 commerciaux dans OU_Commercial." },
        { image: "06-groupe-commercial.jpg", legende: "Membres du groupe GRP_Commercial." },
        { image: "07-ipconfig-pc-client.jpg", legende: "Le poste client reçoit son adresse par DHCP et utilise SRV-DC01 comme DNS." },
        { image: "08-bienvenue-domaine.jpg", legende: "Message « Bienvenue dans le domaine medilog.local »." },
        { image: "09-whoami-c-martin.jpg", legende: "whoami affiche medilog\\c.martin : la session utilise un compte du domaine." },
        { image: "10-pc-client-computers.jpg", legende: "PC-CLIENT apparaît dans le conteneur Computers de l'AD." }
      ],
      documents: [
        { nom: "Fiche SP1 du TP2 (PDF)", fichier: "assets/documents/fiche-sp1-tp2.pdf" },
        { nom: "Script PowerShell : OU, utilisateurs et groupes", fichier: "assets/documents/script-tp2-ou-utilisateurs-groupes.ps1" }
      ]
    }
  ],

  /* ---------- 7. Veille technologique ---------- */
  veille: {
    sujet: "L'IA générative appliquée à l'administration des systèmes et des réseaux",
    pourquoi: "Les éditeurs que l'on retrouve en entreprise (Cisco, Microsoft…) intègrent maintenant des assistants d'IA dans leurs consoles d'administration. Un technicien SISR va devoir apprendre à s'en servir, mais aussi à vérifier ce qu'ils proposent et à les sécuriser.",
    methode: "Je suis mes sources avec un lecteur de flux RSS (Feedly) et une alerte Google sur « IA administration réseau ». Je fais un point chaque semaine et je rédige une synthèse quand un sujet me paraît important pour mon métier.",
    sources: [
      { nom: "Le Monde Informatique", type: "Site d'actualité IT", url: "https://www.lemondeinformatique.fr" },
      { nom: "IT-Connect", type: "Site technique francophone", url: "https://www.it-connect.fr" },
      { nom: "ANSSI (cyber.gouv.fr)", type: "Agence nationale de la sécurité des systèmes d'information", url: "https://cyber.gouv.fr" },
      { nom: "Cisco Newsroom", type: "Annonces d'un constructeur réseau", url: "https://newsroom.cisco.com" },
      { nom: "Microsoft Tech Community", type: "Blog officiel Microsoft", url: "https://techcommunity.microsoft.com" }
    ],
    /* Pour ajouter une synthèse : copie un bloc { ... } et mets-le EN PREMIER (la plus récente en haut). */
    articles: [
      {
        date: "25/11/2026",
        titre: "Des agents d'IA qui dépannent le réseau : où en est-on ?",
        source: "Cisco, rapport « The Impact of Agentic AI on Network Operations » (23/09/2026) ; Le Monde Informatique (2026)",
        lien: "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m09/cisco-ai-research-agenticops-scaling-quickly-in-the-enterprise.html",
        resume: "Cisco a publié en septembre 2026 une étude réalisée par Omdia auprès de 1 000 responsables IT et réseau. Elle indique que les entreprises passent d'une IA qui conseille à des agents d'IA qui agissent : l'équipe réseau fixe l'objectif et les limites, puis les agents analysent et corrigent. Des éditeurs comme NetBrain proposent déjà des agents qui cherchent la cause d'une panne réseau et proposent une solution.",
        analyse: "Pour un technicien, cela ne supprime pas le besoin de connaître le réseau : il faut savoir vérifier ce que l'agent propose. Le Monde Informatique rappelle que les modèles génériques peuvent « halluciner » et manquer de contexte. Sur mon TP Packet Tracer, si un outil me proposait une ACL, je devrais toujours comprendre chaque ligne et la tester avant de l'appliquer."
      },
      {
        date: "25/11/2026",
        titre: "Copilot dans Intune et Entra : l'IA arrive dans les consoles d'administration Microsoft",
        source: "Microsoft Security Blog (14/07/2025) ; documentation Microsoft Learn",
        lien: "https://microsoft.com/en-us/security/blog/2025/07/14/improving-it-efficiency-with-microsoft-security-copilot-in-microsoft-intune-and-microsoft-entra",
        resume: "Microsoft a intégré Security Copilot dans Intune (gestion des postes) et Entra (gestion des identités). L'administrateur pose une question en langage naturel, par exemple « quels appareils n'ont pas la dernière version de Windows ? », et obtient la réponse et les actions possibles. Copilot respecte les rôles déjà attribués : un administrateur ne voit que les données auxquelles il a droit.",
        analyse: "C'est directement lié à ce que j'apprends avec Active Directory et les GPO. Le point qui me paraît le plus important, c'est le respect des droits : l'IA ne doit pas donner plus d'accès que le compte de l'administrateur. L'ANSSI insiste aussi, dans son guide sur la sécurité des systèmes d'IA générative, sur la maîtrise des accès à privilèges. La gestion des habilitations reste donc une compétence de base, même avec l'IA."
      }
    ]
  }
};

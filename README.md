# 💊 **PharmaExpert**

 🎯 **Objectif du projet**

Le projet **PharmaExpert** vise à assurer une **traçabilité totale et infalsifiable** des médicaments, depuis leur fabrication jusqu’à leur délivrance au patient. L’objectif principal est de **combattre la contrefaçon** et les **anomalies logistiques** en garantissant la transparence et la sécurité des informations tout au long de la chaîne d'approvisionnement.

---

 **Fonctionnement**

1. **Attribution d’un identifiant unique**
   Chaque lot de médicament reçoit un **identifiant unique** qui est enregistré de manière permanente sur le réseau **Hedera Hashgraph**, garantissant ainsi son authenticité et sa traçabilité.

2. **Suivi en temps réel**
   À chaque étape du parcours — de l'**usine** au **distributeur**, de la **pharmacie** jusqu’au **patient** — un **événement est inscrit sur la blockchain**, assurant ainsi la **transparence** et l’**immutabilité** des données tout au long du processus.

3. **Analyse intelligente**
   Une **intelligence artificielle (IA)** dédiée analyse les données de la chaîne logistique pour détecter toute anomalie, telle que :

   * des **ruptures de stock suspectes**,
   * des **surstocks anormaux**,
   * des **incohérences géographiques** (par exemple, un lot livré dans une région non prévue).

---

Pour plus de détails, veuillez consulter le fichier de **Documentation et ces document**(requis).

---

 **Configuration du projet**

Ce modèle fournit une **configuration de base** pour démarrer le développement du projet. Il inclut toutes les dépendances et les configurations nécessaires pour mettre en place l'environnement de travail.

---

 **Installation et exécution**

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/rocker-bell/MedicationLot-Prototype.git
   cd MedicationLot-Prototype
   npm install
   npm run dev
   ```

**NB :** Assurez-vous que **Node.js** & **Metamask(Extension)** est installé sur votre machine.

---

👥 **Contributeurs**

* [@rocker-bell](https://github.com/rocker-bell)

---

 📘 **Licence**

Ce projet est open-source et distribué sous **licence MIT**.

---

**À venir**

* plus d'integration d'utilisation du contract.
* plus de  specifications du produit et utilisation du fonctionnement.
* plus de controle sur le fonctionnement du contract pour admin (owner) et utilisateure normale.
* plus de design (design simplifie et subtle pour l'utilisation).
* resoudre l'erreur du non redirection a la page de success apres form handling on landing page.
* Passer complètement aux contrats HTS plutôt qu’aux contrats Hedera basés sur ERC20 enveloppés et IERC20.
* Renforcer la logique fonctionnelle liée à la répartition entre la décentralisation et la centralisation de certaines fonctions à l’intérieur des contrats.
* implementation finale.
---



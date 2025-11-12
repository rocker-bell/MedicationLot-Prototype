# 💊 **MedicationLot - PharmaExpert**

 **Objectif du projet**

   Le projet PharmaExpert a pour objectif d'assurer une traçabilité totale et infalsifiable des médicaments, depuis leur fabrication jusqu'à leur délivrance au patient. L’objectif principal est de combattre la contrefaçon et de résoudre les anomalies logistiques en garantissant la transparence et la sécurité des informations tout au long de la chaîne d'approvisionnement. Ce projet est réalisé grâce à la technologie blockchain et un ledger distribué Hedera Hashgraph, qui assure l'intégrité, la rapidité et la sécurité des données.

  **Explication du choix de Hedera Hashgraph :**
   
    Scalabilité et Performance : Hedera Hashgraph peut traiter des milliers de transactions par seconde avec des frais faibles, ce qui est essentiel pour une gestion fluide des données dans l’industrie pharmaceutique.
    
    Sécurité et Intégrité des Données : Le mécanisme de consensus de Hedera garantit que les informations enregistrées dans le ledger ne peuvent pas être falsifiées ou altérées, ce qui est essentiel pour la traçabilité des médicaments.
    
    Transparence et Confiance : En utilisant un ledger public et immuable, toutes les parties prenantes (fabricants, distributeurs, pharmaciens, etc.) peuvent accéder à des informations vérifiables et transparentes sur l'origine des médicaments.

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

**NB :** Assurez-vous que **Node.js** & **Metamask(Extension)** & **Hedera Testnet network est present dans metamask** est installé sur votre machine.

```
Voir cette page pour plus d'informations sur le testnet du réseau Hedera : https://docs.hedera.com/hedera/core-concepts/smart-contracts/json-rpc-relay

```

FIXÉ : prompt d'ajout du testnet du réseau Hedera s'il n'est pas présent, avec une sécurité renforcée pour les informations privées.
---

👥 **Contributeurs**

* [@rocker-bell](https://github.com/rocker-bell)

---

 📘 **Licence**



***NB : Tous les contrats utilisés dans le projet ont été développés et déployés dans un autre environnement, et ils appartiennent tous au même développeur.***


Ce projet est distribué sous licence MIT et est protégé par les droits d’auteur du développeur [@rocker-bell](https://github.com/rocker-bell) .

---

**À venir**

Intégration accrue du contrat.

Précisions sur les spécifications et le fonctionnement.

Contrôle amélioré pour l'admin (propriétaire) et l'utilisateur normal.

Design simplifié et discret pour l'usage.

Correction de l'erreur de redirection vers la page de succès après le traitement du formulaire.

Passage complet aux contrats HTS au lieu des contrats ERC20 et IERC721 enveloppés.

Renforcement de la logique entre décentralisation et centralisation des fonctions dans les contrats.

Implémentation finale.
---



# Partiel - Patron de conception d'impression sécurisée

Projet de simulation d'impression pour des documents sécurisés administratifs (CNI, Passeport, Carte Vitale) développé en TypeScript.

---

## 1. Choix et Justification des Design Patterns

### Le Template Method (Patron de Méthode)
* **Pourquoi ce choix ?** Le processus d'impression suit 7 étapes obligatoires dans un ordre strict (récupérer les infos, préparer l'encre, vérifier le support/papier, imprimer, découper, l'action spécifique et finaliser). 
* **Comment ça marche ?** On a défini une classe de base abstraite `DocumentSecurise`. Elle possède la méthode principale `lancerFabrication()` qui appelle dans l'ordre ces 7 étapes. Les classes filles (comme le Passeport ou la CNI) héritent de ce parent et surchargent seulement les fonctions qui changent d'un document à l'autre (ex: la plastification pour la carte d'identité, la reliure pour le passeport). Cela évite les copier-coller de structure.

### L'Adapter (Adaptateur)
* **Pourquoi ce choix ?** La carte vitale appartient à la CPAM (système externe) et utilise une API avec des méthodes totalement différentes en anglais (`fetchPatientData()`, `initializeInk()`, etc.) que l'on ne peut pas modifier.
* **Comment ça marche ?** On a créé une classe `CarteVitaleAdapter` qui hérite de `DocumentSecurise` et contient en interne une instance de la classe de la CPAM. Elle fait office de traducteur : par exemple, quand le système appelle `recupererInformations()`, l'adaptateur appelle secrètement `fetchPatientData()` sur la classe CPAM.

### Le Factory (Fabrique)
* **Pourquoi ce choix ?** Le sujet demande de centraliser la création et d'interdire l'instanciation directe des documents (les `new ...`) dans le programme principal.
* **Comment ça marche ?** On passe par une classe `DocumentFactory` avec une méthode `creerDocument()`. Le client demande juste le type (ex: `'cni'`) et les informations de la personne, et la Fabrique lui renvoie le document prêt.

---

## 2. Exécution du Projet

### Installation des outils et dépendances
```bash
npm install
```

### Lancement de la démonstration
```bash
npm start
```
Monsieur Thé - Site Web
Bienvenue sur le site web de Monsieur Thé, une entreprise basée à Lomé, Togo, spécialisée dans les produits laitiers traditionnels et les bubble teas artisanaux. Ce projet est une vitrine numérique qui met en avant la marque, ses produits, son histoire, ses emplacements, ses opportunités de carrière, et un formulaire de contact.
Fonctionnalités

Navigation Responsive : Menu adaptatif avec un design élégant pour desktop et mobile.
Sections Produits : Présentation des produits laitiers (yaourt, fromage, crème) et bubble teas avec prix et images.
Histoire de la Marque : Une section "À Propos" racontant l'origine et la vision de Monsieur Thé.
Emplacements : Détails des deux points de vente (adresse, téléphone, horaires) avec placeholders pour cartes.
Carrières : Liste des postes disponibles avec un bouton pour postuler via le formulaire de contact.
Formulaire de Contact : Validation client-side pour envoyer des messages.
Animation du Footer : Effet de bulles interactives dans le footer pour une touche moderne.
Accessibilité : Utilisation d'attributs ARIA et de focus styles pour une navigation inclusive.

Démo
 
Prérequis

Un navigateur moderne (Chrome, Firefox, Edge, etc.).
Connexion internet pour charger les CDN :
Tailwind CSS
Font Awesome
Google Fonts



Installation

Clonez le dépôt :
git clone https://github.com/Uraesh/Monsieur-Th-.git


Naviguez dans le dossier du projet :
cd monsieur-the


Assurez-vous que les dossiers Images/, CSS/, et JS/ contiennent respectivement :

Les images (logo, photos des produits).
style.css
script.js


Ouvrez index.html dans un navigateur pour voir le site.


Utilisation

Navigation : Cliquez sur les liens du menu pour explorer les sections (Accueil, Produits, À Propos, Emplacements, Carrières, Contact).
Produits : Parcourez les produits laitiers et bubble teas, avec des boutons "Découvrir" ou "Commander".
Contact : Remplissez le formulaire de contact avec nom, email, sujet, message, et cochez la case de consentement. Une alerte simule l'envoi.
Carrières : Consultez les postes disponibles et postulez via le formulaire de contact.
Footer : Passez la souris sur le footer pour interagir avec l'animation des bulles.

Structure du Projet
monsieur-the/
├── Images/                   # Images du site (logo, produits, etc.)
├── CSS/
│   └── style.css            # Styles personnalisés
├── JS/
│   └── script.js            # Logique JavaScript
└── index.html               # Page principale

Dépendances

Tailwind CSS : Framework CSS pour un design rapide et responsive.
Font Awesome : Icônes vectorielles pour une interface moderne.
Google Fonts : Polices Playfair Display et Lora pour une typographie élégante.

Détails Techniques

HTML : Structure sémantique avec sections pour chaque page (Accueil, Produits, etc.).
CSS : Variables CSS pour une palette de couleurs cohérente, animations pour les boutons et le footer, et design responsive via Tailwind.
JavaScript :
Gestion du menu mobile (toggle).
Défilement fluide pour les ancres.
Validation du formulaire de contact côté client.
Animation des bulles dans le footer avec Canvas API.
Surlignage des liens actifs et changement de couleur du navbar selon la section.



Contribution

Forkez le projet.

Créez une branche pour votre fonctionnalité :
git checkout -b feature/nouvelle-fonctionnalite


Commitez vos changements :
git commit -m "Ajout de la fonctionnalité X"


Poussez votre branche :
git push origin feature/nouvelle-fonctionnalite


Ouvrez une Pull Request sur GitHub.


Problèmes Connus

Le formulaire de newsletter n’a pas de logique backend pour gérer les inscriptions.
Les cartes des emplacements utilisent des placeholders statiques (pas d’intégration Google Maps).
Les boutons "Commander" et "Découvrir" dans la section Produits ne sont pas fonctionnels (pas de panier ou de page produit).

Améliorations Futures

Ajouter un backend pour le formulaire de contact et la newsletter (ex. : Node.js, Firebase).
Intégrer Google Maps pour afficher les emplacements dynamiquement.
Implémenter un système de panier pour commander les produits.
Ajouter des animations supplémentaires pour les transitions entre sections.
Inclure une page produit détaillée pour chaque article.

Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
Contact
Pour toute question, contactez l'équipe de Monsieur Thé :

Email :  fesidaniel01@gmail.com


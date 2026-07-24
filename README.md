# Algeria Business Bridge — site vitrine

Site statique (HTML / CSS / JS, sans framework) prêt pour un hébergement Vercel.

## Structure

```
index.html          Accueil
a-propos.html        Équipe (Alili Mostafa, Ali Mouas)
services.html         Les 8 domaines de service
realisations.html     Chiffres clés, chronologie des références, territoires
publications.html     Ouvrages professionnels et autres publications
collaboration.html    Collaboration internationale
contact.html          Formulaire + coordonnées
css/style.css          Feuille de style unique
js/main.js              Menu mobile + formulaire (démo)
images/                Photos et couvertures de livres (déjà compressées pour le web)
```

## Déploiement sur Vercel

1. Créer un dépôt sur GitHub et y pousser tout ce dossier.
2. Sur vercel.com : **Add New → Project**, sélectionner le dépôt.
3. Aucune configuration nécessaire (site 100 % statique) → **Deploy**.

## À faire avant la mise en ligne

- Le formulaire de contact (`contact.html`) est fonctionnel visuellement mais n'envoie pas
  encore de vrais e-mails. Le relier à un service comme Formspree ou EmailJS (quelques
  lignes à ajouter dans `js/main.js`).
- Remplacer les textes d'exemple si besoin, ajouter un nom de domaine personnalisé dans
  Vercel une fois le site en ligne.

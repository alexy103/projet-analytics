# FooCommerce

> https://github.com/alexy103/projet-vue-4iw3

Une application e-commerce réalisée avec Nuxt 4 et Vue.js 3.

## Installation

```bash
git clone git@github.com:alexy103/projet-vue-4iw3.git
npm i
npm run dev
```

## Fonctionnalités

- Catalogue de produits avec filtrage par catégorie
- Page produit détaillée
- Panier persistant (cookie)
- Tunnel de commande (panier → récapitulatif → paiement → confirmation)
- Authentification utilisateur
- Page profil protégée par middleware

## Comptes de test

Les comptes utilisateurs proviennent de l'API DummyJSON. Exemple :

- username: emilys
- password: emilyspass

Liste complète : https://dummyjson.com/users

## Problèmes rencontrés

- Fake store API est down donc il a fallu trouver une autre API et réadapter tout le projet en conséquence

## Améliorations possibles

- Faire une interface admin
- Possibilité de mettre en favori des articles
- Faire une barre de recherche

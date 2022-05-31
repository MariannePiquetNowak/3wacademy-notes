# Blog React

## Contraintes

Vous allez créer une petite application de blog avec la CRA et react-router-dom permettant de gérer une liste d'articles provenants d'une API web externe :

https://jsonplaceholder.typicode.com/

Le services propose un ensemble de plusieurs ressources, mais vous vous concentrerez uniquement sur les suivantes :

- Les **Articles** (Posts)
- Les **Utilisateurs** (Users)

Les URLs interrogeables sont :

- https://jsonplaceholder.typicode.com/posts : Affiche la liste des articles
- https://jsonplaceholder.typicode.com/posts/1 : Affiche les informations du post n°1
- https://jsonplaceholder.typicode.com/users : Affiche la liste des utilisateurs
- https://jsonplaceholder.typicode.com/users/1 : Affiche les informations de l'utilisateur n°1

Vous utiliserez le hook `useEffect` et la méthode `fetch()` pour faire les appels API dans vos composants et récupérer les données.

## Contexte

L'application possède plusieurs pages :

- Une page Home qui affiche une barre de navigation et un simple message de bienvenue. check
- Une page faisant le listing des articles : check
- Une page affichant un article et un lien vers son auteur (userId) 
- Une page faisant le listing de tous les auteurs (users)
- Une page affichant les informations détaillées d'un auteur

## Bonus

Si vous avez fini, vous pouvez dans la page affichant un article afficher les **commentaires associés** grâce à la ressource : https://jsonplaceholder.typicode.com/posts/5/comments/ (5 étant ici l'id de l'article)
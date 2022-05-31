Nous allons mettre en place un `blog` en utilisant l'api (JSON Placeholder) [https://jsonplaceholder.typicode.com/] et le boilerplate (Create-react-app) [https://create-react-app.dev/]

# Etape 1

Dans un premier temps nous allons afficher les 100 posts (via le endpoint /posts) **CHECK** ainsi que l'id de l'utilisateur qui l'a écrit (disponible dans l'objet post) **CHECK**

Ensuite nous allons faire en sorte de récupérer la liste des utilisateurs afin de pouvoir afficher le `name` à la place de l'id dans notre composant `Post` **CHECK**


L'étape suivante sera de mettre en place une pagination.
Elle se composera d'un select, qui permettra de modifier une variable d'état pour pouvoir afficher les posts soit par 10, soit par 25, soit par 50 **CHECK**

# Etape 2

Ensuite il faudra mettre en place un routeur, car nous voulons qu'au clic sur un article, on affiche la totalité des infos. Vous devrez donc transformer les titres en mode "raccourci" (donc les tronquer au dessus de 25 caractères (par exemple)) pour donner envie de cliquer pour en savoir plus. Pareil pour le corps de l'article, histoire qu'on ne voit pas tout le contenu sans avoir à cliquer dessus

Au clic sur un article on affichera la page .../post/1. Grâce au routeur on récupérera les paramètres de l'url pour savoir quelle donnée afficher (dans cet exemple, le post qui a l'id 1)

Un composant Post (on renommera notre composant précédent en PostCard) permettra cet affichage.
On y affichera donc le titre et le contenu en entier (soyez malin) et en plus que le composant précédent, on y affichera les 3 premiers commentaires liés à cet element, ainsi qu'un element "Voir plus" qui permettra d'afficher le reste des commentaires

1 - tronquer le titre et le body **OK**
2 - mettre en place le routeur 
    - route Posts **ok**
    - route post/id **ok**
3 - créer un article (pour la page post/id) **ok**
4 - afficher les commentaires 
5 - filtrer le nombre de commentaires à afficher 
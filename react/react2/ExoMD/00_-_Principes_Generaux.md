# Router

Nous allons présenter les principes généraux du module **react-router-dom V6**, nous vous invitons à regarder de prêt la documentation sur ce module :

Documentation : [react-router-dom](https://reactrouter.com/)

## Routage

Le routage dans le jargon du développement web est le mécanisme par lequel des chemins sont sélectionnés dans une URL pour afficher une interface web donnée.

```
https://mywebsite.com/
https://mywebsite.com/about
https://mywebsite.com/projects
https://mywebsite.com/projects/react-app/
```

Les parties après le TLD (Top Level Domain) sont appelées **routes**.

Elles designent les différentes pages que l'application web doit pouvoir afficher.

Elles ont pour vocation à être partagées et doivent pouvoir afficher toujours la même page pour une même URL.

## Paramètres d'URL

Aussi appelée la **query string**, les paramètres d'URL sont des informations qui sont passées dans l'URL après un marqueur de positionnement qui est le point d'interrogation `?`.

Chaque paramètre est séparé par un `&` (ampersand).

```
https://mywebsite.com/projects?category=dev&limit=5
```

Ici, les deux paramètres sont `category` et `limit` et valent respectivement `dev` et `5`.

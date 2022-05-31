# Routes dynamiques

Pour gérer une route avec un paramètre dynamique, on utilise la syntaxe avec les **colons** : `:parametre`

```js
<Routes>
  <Route path="/projects" element={<Projects />}>
    <Route path=":projectId" element={<Project />} />
  </Route>
</Routes>

{/* À noter que vous pouvez aussi utiliser cette syntaxe : */}

<Routes>
  <Route path="/projects/:projectId" element={<Project />} />
</Routes>
```

Ici, la route `/projects/:projectId` va permettre d'afficher le projet correspondant à l'identifiant `projectId`.

Toutes les URLs suivantes seront reconnues :

- `mywebsite.com/projects/1`
- `mywebsite.com/projects/2`
- `mywebsite.com/projects/42`
- `mywebsite.com/projects/projet-de-test`

La valeur du paramètre dynamique `:projectId` contiendra les valeurs derrières `/projects/` (`1`, `2`, `42` ou `projet-de-test` en String par défaut).


## Récupérer la valeur du paramètre dans le composant

Pour récupérer l'id du projet que l'on souhaite afficher, il faut utiliser le Hook `useParams`, fourni par react-router-dom, dans le composant `<Project>`:

```js
import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();

  return <h2>Projet {projectId}</h2>;
}
```

# Exercices

Dans le composant `<Projects>`, faites en sorte d'afficher une liste de projets **cliquables** à partir des données suivantes (n'utilisez que la propriété `name` pour la liste) :

```json
[
  {
    id: 1,
    name: "Projet HTML/CSS",
    icon: "https://cdn.svgporn.com/logos/html-5.svg",
    description: "Ce projet est un projet de formation pour apprendre à créer des pages web.",
    category: "dev",
  },
  {
    id: 2,
    name: "Projet JavaScript",
    icon: "https://cdn.svgporn.com/logos/javascript.svg",
    description: "Ce projet met en oeuvre les concepts de base de JavaScript.",
    category: "dev",
  },
  {
    id: 3,
    name: "Projet React",
    icon: "https://cdn.svgporn.com/logos/react.svg",
    description: "Ce projet est un terrain de jeu pour apprendre à utiliser React.",
    category: "dev",
  },
  {
    id: 4,
    name: "Projet Figma",
    icon: "https://cdn.svgporn.com/logos/figma.svg",
    description: "Ce projet propose d'acquérir les bases de l'outil de design Figma."
    category: "design"
  },
  {
    id: 5,
    name: "Projet Sketch",
    icon: "https://cdn.svgporn.com/logos/sketch.svg",
    description: "Ce projet propose d'acquérir les bases de l'outil de design Sketch."
    category: "design"
  }
]
```

Puis, créez un composant `<Project>` qui affiche le nom du projet, la description et l'image en fonction de l'identifiant du projet passé en paramètre de l'URL.
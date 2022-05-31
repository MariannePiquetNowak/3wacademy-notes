# Navigation avec `<Link>` et `<NavLink>`

Les composants `<Link>` et `<NavLink>` sont des composants React qui permettent de naviguer entre les routes.

- `<Link>` correspond à un simple lien.
- `<NavLink>` est une surcouche à `<Link>` qui permet de gérer facilement le style (CSS) de navigation.

Pour fonctionner, ils doivent tout deux êtres utilisés dans le scope de `<BrowserRouter>`.

```js
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <NavLink to="/projects">Projects</NavLink>
      </nav>

      <Routes>{/* … */}</Routes>
    </BrowserRouter>
  );
}
```

## Gérer le style avec `<NavLink>`

Par défaut, le composant `<NavLink>` place une classe CSS `active` sur le lien si la route correspond à l'URL actuelle.

Exemple : Pour l'URL suivante …

```
mywebsite.com/projects
```

, le rendu de la navigation sera :

```html
<nav>
  <a href="/home">Home</a>
  <a href="/projects" class="active">Projects</a>
</nav>
```

On peut personnaliser le nom de la classe active avec une fonction de callback que l'on passe à `className` :

```js
(
  <NavLink
    to="/projects"
    className={({ isActive }) =>
      isActive ? "custom-active-classname" : undefined
    }
  >
    Projects
  </NavLink>
)
```

On peut aussi personnaliser le style inline avec une fonction de callback que l'on passe à `style` :

```js
(
  <NavLink
    to="/projects"
    style={({ isActive }) => ({
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    })}
  >
    Projects
  </NavLink>
)
```

# Exercice

Ajoutez un style personnalisé (sous forme de classe ou de style inline) à votre navigation.
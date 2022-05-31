# Créer un Router

Pour installer un router dans React, on utilise le package **react-router-dom**.

## Installation de la dépendance

```bash
npm install react-router-dom@6
```

## Contextualiser la racine principale de React

On utilise ensuite BrowserRouter sur le composant racine pour initialiser le routage.

```js
import { BrowserRouter } from "react-router-dom";

function App () {
  return (
    <BrowserRouter>
      {/* ... */}
    </BrowserRouter>)
  );
}
```

## Définir des routes

Dans React, chaque route est associée à un composant.

```
mywebsite.com/          -->     <Home />
mywebsite.com/about     -->     <About />
mywebsite.com/projects  -->     <Projects />
```

Les routes sont englobées dans un composant `<Routes />` (au pluriel)

Pour ce faire, on utilise la méthode `<Route>` de React-Router-Dom.

Chaque `<Route>` doit avoir une prop `path` qui correspond à une URL, et une prop `element` qui correspond à un composant React.

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Projects } from "./views";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>)
  );
}
```

# Exercice

Créez un nouveau projet React avec `create-react-app`, et installez le package **react-router-dom**.

Créez 3 composants dans un dossier `src/views` :

- Un composant `Home` qui affiche un message `Hello World!`.
- Un composant `Projects` qui affiche un message `Mes projets`.
- Un composant `About` qui affiche un message `À propos de moi`.

Créez un router et ajoutez les routes suivantes :

- `/` : `Home`
- `/projects` : `Projects`
- `/about` : `About`

Vérifiez que le navigateur affiche bien les pages correspondantes lorsque vous naviguez vers `/`, `/projects` et `/about`.
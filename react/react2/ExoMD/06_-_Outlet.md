# Gestion des sous-routes avec le composant Outlet

Vous pouvez à l'aide de la syntaxe suivante définir des sous-routes de manière simple :

```js
<Routes>
  <Route path="/articles/*" element={<Articles />} />
</Routes>

// Ou :

<Routes>
  <Route path="/articles" element={<Articles />}>
    <Route path=":articleId" element={<Article />} />
  </Route>
</Routes>
```

Dans le composant `<Articles>` on écrit les liens de manière relative, **et on utilise dans le composant concerné le composant Outlet**, fourni par `react-router-dom`, qui correspond à un emplacement de contenu pour la route spécifiée.

```js
function Articles() {
  return (
    <nav>
      <NavLink to="/1">Article 1</NavLink>
      <NavLink to="/2">Article 2</NavLink>
    </nav>

    <Outlet />
  )
}
```

# Exercice

Modifiez le composant `<Projects>` et utilisez un composant Outlet pour afficher le contenu de la route.

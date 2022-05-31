# Navigation programmatique

Il arrive qu'on ait besoin de naviguer entre plusieurs routes de façon programmatique, c'est-à-dire sans que le visiteur ne clique sur un lien.

C'est généralement le cas lorsqu'on souhaite faire des redirections après une étape de validation de formulaire quelconque.

Le hook `useNavigate` permet de récupérer une fonction donnant la possibilité de naviguer entre les routes de façon explicite.

```js
import { useNavigate } from 'react-router-dom';

function Signup () {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/home?message=Successfully signed up!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login </button>
    </form>
  );
};
```

# Exercice

1. Dans le composant `<Project>`, intégrez d'abord un bouton de suppression permettant de supprimer un projet de la liste présente dans le composant parent `<Projects>`, et implémentez ce comportement.

2. Faites en sorte après que la suppression ait eu lieu de rediriger programmatiquement le visiteur vers la page `/projects`.
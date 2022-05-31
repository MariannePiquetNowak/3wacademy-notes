import React from "react";
import DragonList from "./components/dragon/DragonList";
import CreateDragon from "./components/dragon/CreateDragon";

// useSelector : lecture du store
// useDispatch : dispatch les actions

function App() {
  return (
    <div>
      <DragonList />
      <div>
        <CreateDragon />
      </div>
    </div>
  );
}

export default App;

/*
Partie 1 ajout d'un dragon

Rendez fonctionnel l'ajout du dragon. Puis utilisez Redux pour mettre à jour la liste des dragons dans la colonne de droite.

Faites en sorte que l'incrémentation du nombre de dragons se fasse également dans une barre de navigation (voyez l'image précédente).

Gérez les erreurs lors de l'insertion d'un dragon (champ vide, insertion d'un même dragon interdit).

Vous afficherez dans la barre de navigation le nombre de dragon(s) dans le store (voir le wireframe).
*/

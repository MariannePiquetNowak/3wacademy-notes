// ComponentWillMount => déclenché à CHAQUE RENDU
React.useEffect(() => {

});

// componentDidMount => déclenché UNIQUEMENT au premier rendu
React.useEffect(() => {
    // Best place pour faire un fetch | API call, tout ce qui récupère des datas

}, []);

// componentDidUpdate => déclenché UNIQUEMENT lorsque la dépendance est mis à jour
React.useEffect(() => {
    pouet.title = pouet.title.toLowerCase();

}, [pouet]);
// (Le Composant est mis à jour quand la variable "pouet" est modifié.)

// ComponentWillUnmount => démonte le composant
React.useEffect(() => {
    // do stuff

    // clean-up => évite les effets de bords
    return () => { // return d'une fonction anonyme
        clearInterval(Fonction_qui_a_besoin_d_une_ref) 
    } 
}, [pouet]);


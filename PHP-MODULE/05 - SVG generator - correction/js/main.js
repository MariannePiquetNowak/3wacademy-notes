/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
function onSubmitForm(event) {
    //stopper l'event pour rester sur la page
    event.preventDefault();
    
   // console.log(this); 
    // this : Représente un objet. 
    // Dans ce contexte, le this représente l'objet déclencheur de l'event (ici, le form)
    
    //récupérer les données
    const data = new FormData(this);

    fetchData(data)    ;
}

// Une fonction asynchrone : cela signifie que l'on ne sait pas combien de temps elle va mettre à s'éxécuter 
async function fetchData(formData) {
    //fetch avec du post 
    let req = new Request('svg.php', {
        method: 'POST',
        body: formData, // On transmet l'instnace de FormData
    });
    
    const response = await fetch(req).catch(err => console.error(err)); // Attends de recevoir la réponse. lLe programme se fige
    const data = await response.text(); // Attends de me concertir la réponse en text. Le programme se fige
    
    //écrire dans le DOM dans #preview
    document.getElementById("preview").innerHTML = data;
}


// Charger le dom
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('svgForm').addEventListener('submit', onSubmitForm);
});
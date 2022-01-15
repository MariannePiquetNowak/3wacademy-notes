const shapeList = [];


function onSubmitForm(event) {
    //stopper l'event
    event.preventDefault();
    
    
    //récupérer les données
    const data = new FormData(this);
    
    fetchData(data);
    
}

async function fetchData(formData) {
    //fetch avec du post 
    let req = new Request('svg.php', {
        method: 'POST',
        body: formData,
    });
    
    const response = await fetch(req).catch(err => console.error(err));
    const data = await response.text();
    
    //écrire dans le DOM dans #preview
    document.getElementById("preview").innerHTML = data;
}

function onClickMenu(event) {
    
    event.preventDefault();
    
    document.getElementById("menuShape").classList.toggle("is-active");
}

function onClickShape(event) {
    event.preventDefault();

    const shape = this.dataset.shape;
    
    //à chaque nouvelle forme on insérer le type dans le tableau shapeList
    shapeList.push(shape);
    
    const indexShape = shapeList.length - 1;
    
   console.log(indexShape);
    
    document.getElementById("menuShape").classList.remove("is-active");
    
    //lancer un fetch vers formShape.php avec la valeur de shape et de indexShape en paramêtre 
    fetchFormShape(shape, indexShape);
    
    //en retour formShape.php doit nous renvoyer le markuphtml 
    //on l'insérera dans le DOM dans form
    
}

async function fetchFormShape(s, i) {
    const response = await fetch("formShape.php?shape=" + s + "&index=" + i).catch(err => console.error(err));
    const data = await response.text();
    
    
    //insérer les champs dans le formulaire
    const htmlShape = document.createElement('div');
    
    htmlShape.innerHTML = data;
    document.getElementById("shapeMarkup").append(htmlShape);
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded', function(){
    console.log('Dom loaded');
    
    //écouter le submit du formulaire
    document.getElementById("svgForm").addEventListener("submit", onSubmitForm);
    
    //menu des formes
    document.querySelector("#menuShape button").addEventListener("click", onClickMenu);
    
    //actions dans le menu
    document.querySelectorAll("#menuShape a").forEach(a => a.addEventListener("click", onClickShape));

    
});
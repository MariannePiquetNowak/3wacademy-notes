
/***** For ... in ******/
// Elle sert à parcourir des propriétés énumérable (pour les objets)

let monChat = {
    race: "siammois",
    couleur : "blanc",
    age: 3
}
// On veut parcourir l'objet 
for (let prop in monchat) {
    console.log(`${prop} --> ${monChat[prop]}`);
}

// il est possible aussi d'itérer dans une chaine de caractères

let chaine = "Bonjour";

for(let index for chaine) {
    console.log(`L'index de la lettre ${chaine[index]} : ${index}`);
}

/****** For ... of ******/

//Elle sert à parcourir des propriétés itérables (pour les tableaux)

let fruits = ["fraise", "pomme", "banane"];

for (let fruit of fruits) {
    console.log(`${fruit}`);
}

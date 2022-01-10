
/* En javascript, une class peut avoir un effet trompeur. Js est un langage prototypale. */

/***** Les fonctions *****/ 
function Vehicule(brand, color) {
    this.brand = brand;
    this.color = color;
}

let myVehicule = new Vehicule("Peugeot", "Noir");
console.log(myVehicule);

/***** Les Class *****/ 
class Vehicule2 {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

}
let myVehicule2 = new Vehicule2("Peugeot", "Rouge");
console.log(myVehicule2);


// Mais à l'intérieur de notre classe, on va pouvoir ajouter des méthodes pour créer des actions 

class Vehicule2 {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    // Méthode: faire klaxonner la voiture
    honk() {
        return `Ma voiture ${this.brand} fait tut tut`;
    }

}
let myVehicule2 = new Vehicule2("Peugeot", "Rouge");
console.log(myVehicule2);
// appel de la méthode
console.log(myVehicule.honk());


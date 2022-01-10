
/* Les getters vont permettre de modifier et les setters d'afficher' */

/*
Les getters permettent d'accéder aux propriétés d'un objet.
Les setters permettent de modifier ou muter ces propriétés après que l'objet ait été créé.
*/

class Vehicule2 {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    // Méthode: faire klaxonner la voiture
    honk() {
        return `Ma voiture ${this.brand} fait tut tut`;
    }

    get getBrand() {
        return this.brand;
    }
}

class Moto extends Vehicule2 {
    constructor(brand, color, size) {
        super(brand, color) // permet d'hériter de son parent 
        this.size = size;
    }

    honk() {
        return `Ma voiture ${this.brand} fait tut`;
    }

    get getSize() {
        return this.size
    }

    set setSize(value) {
        if(typeof value != "number") {
            throw new Error(`${value} n'est pas un nombre`) // On génère un erreur
        }
        this.size = value;
    }
}

let myVehicule2 = new Vehicule2("Peugeot", "Rouge");
console.log(myVehicule2);
// appel de la méthode
console.log(myVehicule.honk());

let myMoto = new Moto("Kawazaki", "Verte", 600);
console.log(myMoto.honk());

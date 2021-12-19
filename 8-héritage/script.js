
// On va aussi pouvoir faire hériter d'autres classes

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

class Moto extends Vehicule2 {
    constructor(brand, color, size) {
        super(brand, color) // permet d'hériter de son parent 
        this.size = size;
    }

    honk() {
        return `Ma voiture ${this.brand} fait tut`;
    }
}

let myVehicule2 = new Vehicule2("Peugeot", "Rouge");
console.log(myVehicule2);
// appel de la méthode
console.log(myVehicule.honk());

let myMoto = new Moto("Kawazaki", "verte", 600);
console.log(myMoto.honk());

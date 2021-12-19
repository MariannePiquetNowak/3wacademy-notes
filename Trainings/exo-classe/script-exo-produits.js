/*
    1)    on va créer une classe produit avec son constructeur qui aura 2 paramètres le nom et le prix
    2)    Pour chaque paramètre créer les méthodes GET et SET
    3)    Créer une méthode qui va permettre de calculer la TVA
    4)    créer une méthode qui va permettre de calculer le TTC
    5)    afficher le résultat proprement dans un fichier HTML

*/

/**
 * @property name
 * @property price
 * 
 * @method get
 * @method set
 * @method calculTva   
 * @method calculTtc
 */

class Product {
    constructor(name, price) {

        if(typeof name != 'string') {
            throw new Error("Ceci n'est pas une valeur alphabétique.");
        }

        if(typeof price != 'number') {
            throw new Error("Ceci n'est pas une valeur numérique.");
        }
        this._name = name;
        this._price = price;
    }

    /* ==== GETTER ====*/
    get getName() {
        return this._name;
    }

    get getPrice() {
        return this._price;
    }

    /* ==== SETTER ==== */
    set setName(value) {
        if(typeof value != "string") {
            throw new Error(`Veuillez entrer une valeur alphabétique.`) 
        }
        this._name = value;
    }

    set setPrice(value) {
        if(typeof value != "number") {
            throw new Error(`Veuillez entrer une valeur numérique.`) 
        }
        this._price = value;
    }

    /* ==== CALCUL TVA ==== */
    
    calculTva(montantTva) { 
        return montantTva / 100 * this._price;
    }

    /* ==== CALCUL TTC ==== */
    calculTtc(montantTva) {
        return this._price + this.calculTva(montantTva);
    }  
}

const montantTva = 20;

let product = new Product("Pomme", 4);
product.calculTva(montantTva);
product.calculTtc(montantTva);

let app = document.getElementById('app');
let tva = document.getElementById('tva');
let ttc = document.getElementById('ttc');

tva.innerHTML += product.calculTva(montantTva);
ttc.textContent += product.calculTtc(montantTva);





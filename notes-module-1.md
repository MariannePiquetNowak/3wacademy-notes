Codes réunion Zoom 
952 1379 4263
702237 

# Module 1 : les outils et bonnes pratiques de développement

<a href="#intro">Introduction aux Certificats de Compétence Professionnelle et préparation du projet
    personnel</a>
<a href="#poo">Approfondissement de la Programmation Orientée Objet</a>
<a href="#design-pat">Introduction aux Design Patterns</a>
<a href="#tools">Les outils de packaging web</a>
<a href="#env">Utilisation avancée d’un Environnement de Développement Intégré</a>
● Les outils de gestion de version
● Installation d’un serveur de production


### <div id="intro" >Introduction aux Certificats de Compétence Professionnelle et préparation du projet
    personnel</div>

- Présentation de ES6

#### Mots de clés `let`, `var`, `const`
Const, on ne peut lui assigner qu'une valeur tandis que let et var, on peut changer leur valeur

#### Destructuring Array 

```
const array = [1,2,3];
console.log(array);
```

// Version ES5
Avant, on pouvait faire ceci : 
```
const a = array[0];
console.log(a); // output 1
```

// En ES6
```
const [a, b, c, d] = array;
console.log(a) // output 1
```

Mais si on fait pour d, on a un undefined 
Ce qu'on fait, c'est lui assigné une valeur par défaut à d 
```
const [a, b, c, d = 4] = array;
console.log(array) // output 1, 2, 3, 4
```

#### Les opérateurs de décomposition 
```
// addition sur un tableau
const nombres = [5,10,25,5];

function maSomme(nb) {
    let somme = 0;

    for(leti=0; i < nombres.lenght; i++) {
        somme += nb[i];
    }

    return somme;

}

console.log(maSomme(nombres)); // output 45
```

Mais on veut faire ce tableau sur des valeurs libres : 
```
// Addition sur les nombres libres
const numbers = [5,10,25,5];

function faisMoiLaSomme(...numbers) { // fais la somme de veleurs libres
    
    console.log(numbers); // output 5,10,25,5
    let somme = 0;
    for(leti=0; i < numbers.lenght; i++) {
        somme += numbers[i]; // On les additionnes
    }
    return somme;
}

console.log(faisMoiLaSomme(5,10,25,5)); // exécute le calcul. Les valeurs en paramètres se placent dans le tableau numbers
```


#### Interpolation de chaines 
```
// ES5 version
let string = "une chaine";
string += "de caractères";
string += "très longue";
console.log(string) // une chaine de caractère très longue 

let name = "John";
let hello = "Bonjour" + name;
console.log(hello); // "Bonjour John"
```

```
// En ES6
let string2 = `
Je suis une chaine 
de caractère 
très longue
`;

console.log(string2);

let name2 = "Bonjour";
let hello2 = `Bonjour ${name2}`;
console.log(hello2); // "Bonjour John"


#### Fonctions fléchés 

```
// En ES5 
// Avec 1 paramètre
const saluer = function(nom) {
    return `Salut ${nom}`;
}
console.log(saluer);

// Avec plusieurs paramètrès 
const hello = function(name, surname) {
    name = name.toUppercase();
    surname = surname[0].toUppercase() + surname.slice(1);
    return "Bonjour" + surname + name + "!";
}

console.log(hello("doe", "john"));
```

```
// En ES6 
// avec 1 paramètre
const direAurevoir = prenom => `Au revoir ${prenom}`;
console.log(direAurevoir)

// Avec plusieurs paramètres
const direAurevoir = (name, surname) => {
    name = name.toUppercase();
    surname = surname[0].toUppercase() + surname.slice(1);
    return `Au revoir ${name} ${surname}`;
} 
console.log(direAurevoir("doe", "john"));
```

#### Fonction ternaire 
```
const vrai = true;

if(vrai) {
    console.log("Vrai");
} else {
    console.log("Faux");
}
```

// En ternaire 
```
vrai ? console.log("vrai") : console.log("Faux");

```

#### Les Boucles 
##### For ... in 
Elle sert à parcourir des propriétés énumérable (pour les objets)

```
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
```
##### For ... of 

Elle sert à parcourir des propriétés itérables (pour les tableaux)
```
let fruits = ["fraise", "pomme", "banane"];

for (let fruit of fruits) {
    console.log(`${fruit}`);
}
```

### <div id="poo">Approfondissement de la Programmation Orientée Objet</div>

#### LES CLASSES 
En javascript, une class peut avoir un effet trompeur. Js est un langage prototypale. 

```
// Les fonctions 
function Vehicule(brand, color) {
    this.brand = brand;
    this.color = color;
}

let myVehicule = new Vehicule("Peugeot", "Noir");
console.log(myVehicule);
```

```
// Les classes
class Vehicule2 {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

}
let myVehicule2 = new Vehicule2("Peugeot", "Rouge");
console.log(myVehicule2);
```

Mais à l'intérieur de notre classe, on va poiuvoir ajouter des méthodes pour créer des actions 

```
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
```

**On va aussi pouvoir faire hériter d'autres classes **

```
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
```


#### Les getters et setters

**Les getters vont permettre de modifier et les setters d'afficher' **

Les getters permettent d'accéder aux propriétés d'un objet.
Les setters permettent de modifier ou muter ces propriétés après que l'objet ait été créé.

```
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
```

#### LES MODULES 

 Imaginons que notre script est le fichier principal, il va servir uniquement pour l'affichage.

On a un fichier script unique qui regroupe tous les autres fichiers script.
Pour utiliser ce script, il faut utiliser un Live Server (un browser) à la méthode de Webpack (vu que c'est un module)


#### Les APIs
On peut utiliser `fetch`, qui est une fonction native de Javascript 

```
fetch('https://www.swapi.tech/api/people/1')
    .then((response) => {
        response.json() // On parse notre réponse en json
    })
    .then(response => {
        console.log(response.data)
    })
```

ou utiliser la librairie `axios`, qui parse automatiquement notre réponse en json

```
axios
    .get('https://www.swapi.tech/api/people/1')
    .then(response => {
        console.log(response.data)
    })
```
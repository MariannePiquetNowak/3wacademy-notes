
/***** En ES5 *****/
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

/****** En ES6 ******/
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

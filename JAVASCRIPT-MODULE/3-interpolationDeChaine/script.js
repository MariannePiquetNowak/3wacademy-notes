
/***** ES5 version ******/
let string = "une chaine";
string += "de caractères";
string += "très longue";
console.log(string) // une chaine de caractère très longue 

let name = "John";
let hello = "Bonjour" + name;
console.log(hello); // "Bonjour John"


/****** En ES6 ******/
let string2 = `
Je suis une chaine 
de caractère 
très longue
`;

console.log(string2);

let name2 = "Bonjour";
let hello2 = `Bonjour ${name2}`;
console.log(hello2); // "Bonjour John"

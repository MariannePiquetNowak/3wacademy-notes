/*
1)    Définir une classe livre ayant un constructeur avec les paramètres suivants
a.    Id,titre,  auteur (nom complet), prix 
b.    Initialiser votre constructeur (this._id = id ) 
2)    Mettre en place les différents GETTER et SETTER que vous aurez besoin 
3)    Attention Id doit être auto incrémenté
4)    livre devra hérité de bibliothèque
5)    Définir une méthode toString() permettant d'afficher les informations du livre en cours
6)    définir une classe bibliothèque ayant un constructeur avec les paramètres suivants
a.    Id,titre,  auteur (nom complet), prix, nombre de livre
7)    Attention à la sécurité des variables exemple un titre doit recevoir un string
*/

/* IMPORTS */
// import Library from './modules/library.js';
import Book from './modules/book.js';

let book1 = new Book("1984", "George Orwell", 20, 2)
let book2 = new Book("A comme Association", "Pierre Bottero", 25)
console.log(book1)
console.log(book2)

console.log(book1.toString())
console.log(book2.toString())

console.log(book2.getAuthor);


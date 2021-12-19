import Library from './library.js';

class Book extends Library {
    constructor(id, title, author, price, numberBook) {
        super(id, title, author, price, numberBook);
       
    }

    toString() {
        if (this.numberBook === null) {
          return `
                id : ${this.id}
                Titre : ${this.title}
                Auteur : ${this.author}
                Prix: ${this.price}€
            `;
        } else {
          return `
                id : ${this.id}
                Titre : ${this.title}
                Auteur : ${this.author}
                Prix: ${this.price}€
                Numéro du livre : ${this.numberBook}
            `;
        }
      }
    
}

export default Book;
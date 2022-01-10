class Library {
  
  static state = 1;

  constructor(title, author, price, numberBook = null) {
    // TOUJOURS EXECUTER LES VERIF AVANT LES PARAMETRES
    if (typeof title != "string") {
      throw new Error(`"${title}" n'est pas une valeur alphabétique.`);
    }
    if (typeof author != "string") {
      throw new Error(`"${author}" n'est pas une valeur alphabétique.`);
    }

    if (typeof price != "number") {
      throw new Error(`"${price}" n'est pas une valeur numérique.`);
    }

    this.id = this.constructor.state++; // A chaque fois qu'une variable va être créé, cela va incrémenté l'instance
    this.title = title;
    this.author = author;
    this.price = price;
    this.numberBook = numberBook;
  }

  /* ==== GETTER ==== */

  get getId() {
    return this.id;
  }

  get getTitle() {
    return this.title;
  }

  get getAuthor() {
    return this.author;
  }

  get getPrice() {
    return this.price;
  }

  get getNumberBook() {
    return this.numberBook;
  }

  /* ====== SETTERS ====== */

  set setTitle(title) {
    if (typeof title != "string") {
      throw new Error("Veuillez rentrer une chaine de caractère");
    }
    return (this.title = title);
  }

  set setAuthor(author) {
    if (typeof author != "string") {
      throw new Error("Veuillez rentrer une chaine de caractère");
    }
    return (this.author = author);
  }

  set setPrice(price) {
    if (typeof price != "number") {
      throw new Error("Veuillez rentrer une valeur numérique");
    }
    return (this.price = price);
  }

  set setNumberBook(value) {
    if (typeof value != "number") {
      throw new Error("Veuillez rentrer une valeur numérique");
    }
    return (this.numberBook = value);
  }
}

export default Library;

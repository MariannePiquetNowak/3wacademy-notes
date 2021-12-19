/**
 * DECLARATION
 */
 class Calculette
 {
     constructor(nb1, nb2)
     {
         //vérification si c'est un nombre - dans le cas ou l'utilisateur n'ajoute pas un nombre dès l'initialisation de la classe Calculette
         if(typeof nb1 != 'number' || typeof nb2 != "number")
         {
             throw new Error("Ceci n'est pas un nombre");
         }
 
         this._nb1 = nb1
         this._nb2 = nb2
     }
 
     /**
      * GETTER
      */
     get nombre1()
     {
         return this._nb1
     }
 
     get nombre2()
     {
         return this._nb2
     }
 
     /**
      * SETTER
      */
     set nombre1(value)
     {
         if(typeof value != 'number')
         {
             throw new Error("Ceci n'est pas un nombre");
         }
         this._nb1 = value;
     }
 
     set nombre2(value)
     {
         if(typeof value != 'number')
         {
             throw new Error("Ceci n'est pas un nombre");
         }
         this._nb2 = value;
     }
 
     /**
      * METHODES CALCULETTE
      */
     additionner()
     {
         return this._nb1 + this._nb2;
     }
     soustraire()
     {
         return this._nb1 - this._nb2;
     }
     multiplier()
     {
         return this._nb1 * this._nb2;
     }
     diviser()
     {
         if(this.nombre2 == 0)
         {
             throw new Error("Une division par 0 est interdite");
         }
 
         return this._nb1 / this._nb2;
     }
     modulo()
     {
         if(this.nombre2 == 0)
         {
             throw new Error("Interdit");
         }
 
         return this._nb1 % this._nb2;
     }
 }

 /**
 * INVOCATION
 */
let myCalc = new Calculette(5,2);
console.log(myCalc.additionner()); //7
console.log(myCalc.soustraire()); //3
console.log(myCalc.multiplier()); //10
console.log(myCalc.diviser()); //2.5
console.log(myCalc.modulo()); //1

let myCalc2 = new Calculette(5,0);
console.log(myCalc2.additionner()); //5
console.log(myCalc2.soustraire()); //5
console.log(myCalc2.multiplier()); //0
//console.log(myCalc2.diviser()); //erreur ligne 88
//console.log(myCalc2.modulo()); //erreur ligne 103

myCalc.nombre1 = 4; // modification du getter
myCalc.nombre2 = 8; // modification du getter
console.log(myCalc.additionner()); //12
console.log(myCalc.soustraire()); //-4

myCalc.nombre1 = "hacked!!!!"; // Uncaught Error: Ceci n'est pas un nombre
myCalc.nombre2 = null; // Uncaught Error: Ceci n'est pas un nombre
console.log(myCalc.additionner()); // ERREUR
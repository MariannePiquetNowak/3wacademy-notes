/*
Écrivez les classes Creature, Orc, Urukhai et ChiefOrc conformément au schéma ci-dessus, sachant que :

Urukhai et ChiefOrc héritent de Orc, qui elle-même hérite de Creature.

Actions :
- Une Creature peut faire : saySomething() et identity()
- Un Orc peut faire (en plus de saySomething() et identity()) : scream() et bite()
- Un Urukhai peut faire (en plus de saySomething(), identity(), scream() et bite()) : kill()
- Un ChiefOrc peut faire (en plus de saySomething(), identity(), scream() et bite()) : giveOrder()

*/

/* ======================================================================== *\
                CREATURE
/* ======================================================================== *\

/**
 *  Déclaration de la classe parente Creature 
 * Possède 3 props 
 * @property name, age, strength
 * @property age
 * @property strength
 * 
 * Possède 2 méthodes 
 * @method saySomething(words) 
 * @method identity()
 */


class Creature {
    constructor(name, age, strength) {
        this.name = name;
        this.age = age;
        this.strength = strength;
    }

    saySomething(words) {
        return console.log(`La créature parle et dit "${words.toUpperCase()}"`);
    }


    identity() {

        if(this.age === null) {
            return console.log(`La créature est un ${this.name} et possède ${this.strength} de force.`);
        } else {
            return console.log(`La créature est un ${this.name} de ${this.age} ans et possède ${this.strength} de force.`);

        }
    }
}


console.log("====== CREATURE ======");
let creature = new Creature("Orc", 29, 25);
creature.saySomething("Chargééééé !");
creature.identity();

/* ======================================================================== *\
               ORC
/* ======================================================================== *\

/**
 *  Déclaration de la classe enfant Orc
 * 
 * @property name
 * @property age
 * @property strength 
 * 
 * @method scream(words) 
 * @method bite(someone)
 */

class Orc extends Creature {
    constructor(name, age, strength) {
        super(name, age, strength) // permet d'hériter de son parent 
    }

    scream(words) {
        return console.log(`La créature ${this.name} crie "${words.toUpperCase()}" en courant au front zigouiller ces #@%$ de guildes.`);
        
    }

    bite(someone) {
        return console.log(`La créature ${this.name} a mordu ${someone}. Il gagne 10pts d'xp`);
    }

}


console.log("====== ORC ======");
let orc = new Orc("Orc", 31, 22);
orc.identity();
orc.saySomething("Gruh !");
orc.scream("Braaaaaah !!");
orc.bite("un mage");

/* ======================================================================== *\
                URUKHAI
/* ======================================================================== *\

/**
 *  Déclaration de la classe enfant Urukhai
 * @property name
 * @property strength + 10
 * @method kill(someone) 
 */

 class Urukhai extends Orc {
    constructor(name, strength) {
        super(name, null, strength + 10);
    }

    kill(someone){
        return console.log(`La créature ${this.name} a tué ${someone}.`);
    }
}

console.log("====== URUKHAI ======");
let urukhai = new Urukhai("Urukhai", 30);
urukhai.identity();
urukhai.saySomething("On en a gros !");
urukhai.scream("Waaaaaaaaaarg !!");
urukhai.kill("un elfe");

/* ======================================================================== *\
                CHEF ORC
/* ======================================================================== *\

/**
 *  Déclaration de la classe enfant ChiefOrc
 * @property name
 * @property age
 * @property strength + 2
 * @property isChief
 * @method giveOrder(someone) 
 */

 class ChiefOrc extends Orc {
    constructor(name, age, strength, isChief) {
        super(name, age, strength + 2);
        // strength = strength + 2;
        this.isChief = true;
    }

    giveOrder(someone) {
        if(this.isChief === true) {
            return console.log(`Le chef ${this.name} a donné un ordre à ${someone}`);
        }
    }

}

// Chef Orc 
console.log("====== CHEF ORC ======");
let chieforc = new ChiefOrc("Orc", 34, 20);
chieforc.giveOrder("un orc");
chieforc.identity();
chieforc.scream("Attrapez tous ces Pokémons !!");

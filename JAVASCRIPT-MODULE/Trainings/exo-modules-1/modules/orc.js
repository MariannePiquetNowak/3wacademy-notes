import Creature from './creature.js';

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

export default Orc;


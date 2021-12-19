import Orc from './orc.js';

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

export default ChiefOrc;

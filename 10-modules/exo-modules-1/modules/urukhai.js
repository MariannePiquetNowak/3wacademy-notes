import Orc from './orc.js';

class Urukhai extends Orc {
    constructor(name, strength) {
        super(name, null, strength + 10);
    }

    kill(someone){
        return console.log(`La créature ${this.name} a tué ${someone}.`);
    }
}
export default Urukhai;

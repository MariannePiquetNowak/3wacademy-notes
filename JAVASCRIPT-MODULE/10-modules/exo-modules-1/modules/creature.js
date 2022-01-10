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


export default Creature;

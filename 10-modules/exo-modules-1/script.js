import Creature from './modules/creature.js';
import Orc from './modules/orc.js';
import Urukhai from './modules/urukhai.js';
import ChiefOrc from './modules/chieforc.js';


console.log("====== CREATURE ======");
let creature = new Creature("Orc", 29, 25);
creature.saySomething("Chargééééé !");
creature.identity();


console.log("====== ORC ======");
let orc = new Orc("Orc", 31, 22);
orc.identity();
orc.saySomething("Gruh !");
orc.scream("Braaaaaah !!");
orc.bite("un mage");


console.log("====== URUKHAI ======");
let urukhai = new Urukhai("Urukhai", 30);
urukhai.identity();
urukhai.saySomething("On en a gros !");
urukhai.scream("Waaaaaaaaaarg !!");
urukhai.kill("un elfe");



console.log("====== CHEF ORC ======");
let chieforc = new ChiefOrc("Orc", 34, 20);
chieforc.giveOrder("un orc");
chieforc.identity();
chieforc.scream("Attrapez tous ces Pokémons !!");


console.log("script.js is charged") // ok
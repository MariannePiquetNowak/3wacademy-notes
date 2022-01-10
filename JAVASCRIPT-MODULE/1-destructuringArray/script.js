
const array = [1,2,3];
console.log(array);


// === Version ES5 ===
// Avant, on pouvait faire ceci : 

const a = array[0];
console.log(a); // output 1


// === En ES6 ===

const [a, b, c, d] = array;
console.log(a) // output 1

/*
Mais si on fait pour d, on a un undefined 
Ce qu'on fait, c'est lui assigné une valeur par défaut à d 
*/
const [a, b, c, d = 4] = array;
console.log(array) // output 1, 2, 3, 4



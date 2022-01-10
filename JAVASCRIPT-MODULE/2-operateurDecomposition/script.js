/***** Les opérateurs de décomposition ******/

// addition sur un tableau
const nombres = [5,10,25,5];

function maSomme(nb) {
    let somme = 0;

    for(leti=0; i < nombres.lenght; i++) {
        somme += nb[i];
    }

    return somme;

}

console.log(maSomme(nombres)); // output 45

/* ====================================== */

/* Mais on veut faire ce tableau sur des valeurs libres : */
// Addition sur les nombres libres
const numbers = [5,10,25,5];

function faisMoiLaSomme(...numbers) { // fais la somme de veleurs libres
    
    console.log(numbers); // output 5,10,25,5
    let somme = 0;
    for(leti=0; i < numbers.lenght; i++) {
        somme += numbers[i]; // On les additionnes
    }
    return somme;
}

console.log(faisMoiLaSomme(5,10,25,5)); // exécute le calcul. Les valeurs en paramètres se placent dans le tableau numbers


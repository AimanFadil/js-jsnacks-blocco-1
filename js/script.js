//PRIMO SNACK
const frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'] 
frigo.push('pesca')

console.log(frigo)

let cerca_frutto = prompt('Cerca il prodotto nel frigo');

let presente = false;

for (let i = 0; i < frigo.length; i++) {
    if (frigo[i] === cerca_frutto) {
        presente = true;
    }
}

if (presente) {
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero');
} 


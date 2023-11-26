//SECONDO SNACK

let num_ins = prompt("insersci il numero degli elementi");

let numeri_casuali = [];
for(let i = 0; i < num_ins; i++) {
    numeri_casuali.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Numeri casuali: ", numeri_casuali);
console.log("Gli ultimi 5 numeri: ", numeri_casuali.slice(-5));
// Exercici JavaScript - Arrays

let assignatures = ["PAI", "Bases de Dades", "Programacio", "Sistemes"];

console.log("Assignatures:", assignatures);
console.log("Nombre d assignatures:", assignatures.length);

// Afegir una assignatura nova
assignatures.push("Xarxes");
console.log("Despues de afegir Xarxes:", assignatures);

// Accedir per index
console.log("Primera assignatura:", assignatures[0]);

for (let i = 0; i < assignatures.length; i++) {
    console.log("Assignatura " + (i+1) + ": " + assignatures[i]);
}

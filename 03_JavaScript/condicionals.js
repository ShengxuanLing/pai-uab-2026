// Exercici JavaScript - Condicionals

let hora = 14;
let missatge;

if (hora >= 6 && hora < 12) {
    missatge = "Bon dia!";
} else if (hora >= 12 && hora < 20) {
    missatge = "Bona tarda!";
} else {
    missatge = "Bona nit!";
}

console.log("Son les " + hora + ": " + missatge);

// Exemple amb prompt (no funciona aqui, pero es per a provar al navegador)
// let edat = prompt("Quina edat tens?");
// if (edat >= 18) {
//     console.log("Ets major d'edat");
// } else {
//     console.log("Ets menor d'edat");
// }

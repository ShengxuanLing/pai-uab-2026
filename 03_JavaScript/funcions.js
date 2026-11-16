// Exercici JavaScript - Funcions

// Funcio simple
function saludar(nom) {
    return "Hola, " + nom + "!";
}

console.log(saludar("Rafael"));
console.log(saludar("Maria"));

// Funcio per calcular area
function calcularArea(base, altura) {
    return base * altura / 2;
}

console.log("Area del triangle:", calcularArea(10, 5));

// Funcio que no retorna res (només imprimeix)
function mostrarMissatge(text) {
    console.log("Missatge: " + text);
}

mostrarMissatge("Aquest es un exercici de funcions");

const numeros = [4, 3, 86, 7, 95, 0, 32];

let mayor = numeros[0];

for (i=0; i < numeros.length; i++){
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log(mayor);
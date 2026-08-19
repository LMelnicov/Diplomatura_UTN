const metros = 10000;

if(metros <= 1000) {
    console.log(`Debido a la distancia de: ${metros} metros, el medio de transporte debe ser a pie`)
} else if (metros > 1000 && metros <= 10000) {
    console.log(`Debido a la distancia de: ${metros} metros, el medio de transporte debe ser bicicleta`)
} else if (metros > 10000 && metros <= 30000) {
    console.log(`Debido a la distancia de: ${metros} metros, el medio de transporte debe ser colectivo`)
} else if (metros > 30000 && metros <= 100000) {
    console.log(`Debido a la distancia de: ${metros} metros, el medio de transporte debe ser auto`)
} else {
    console.log(`Debido a la distancia de: ${metros} metros, el medio de transporte debe ser avion`)
}
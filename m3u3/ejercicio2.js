
const area = document.getElementById('area')

const boton = document.getElementById('boton')

const resultado = document.getElementById('resultado')

boton.addEventListener('click', () => {
    const caracteres = area.value.length;

    resultado.textContent = `La cantidad de caracteres es de: ${caracteres}`
})

//Teniendo un cuadrado de color rojo en el documento de HTML:
//Desarrollar una función que, al hacer click en el mismo, éste se transforme en una círculo de color verde
let accion = document.getElementById("cuadradoid")

function circulo(color) {
    accion.style.backgroundColor =`${color}`
 
    accion.style.borderRadius = ("100%")
    
}


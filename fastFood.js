// TIPOS DE CARNE
let carneParrilla = 1800;
let pollo = 1500;
let veggie = 1200;
// ADICIONALES
let jamon = 30;
let queso = 25;
let salsaTomate = 5;
let mayonesa = 5;
let mostaza = 5;
let tomate = 15;
let lechuga = 10;
let cebolla = 10;
// USUARIO
nombre = "Daniel";
apellido = "Fuentes";
// PRIMERA FUNCIÓN - CALLBACK
function calculoHamburguesa(tipoHamburguesa,boolJamon,boolQueso,boolSalsaTomate,boolMayonesa,boolMostaza,boolTomate,boolLechuga,boolCebolla){
    let total = 0;
    switch(tipoHamburguesa){
        case "carne":
            total += carneParrilla;
            break;
        case "pollo":
            total += pollo
            break;
        case "veggie":
            total += veggie;
            break;
        default:
            return console.log("Tipo de hamburguesa no válido, ingrese otra opción.")
    }
    if (boolJamon) total += jamon;
    if (boolQueso) total += queso;
    if (boolSalsaTomate) total += salsaTomate;
    if (boolMayonesa) total += mayonesa;
    if (boolMostaza) total += mostaza;
    if (boolTomate) total += tomate;
    if (boolLechuga) total += lechuga;
    if (boolCebolla) total += cebolla;
    return total
}
// SEGUNDA FUNCIÓN "FASTFOOD"
function fastFood(nombreUsuario,apellidoUsuario,tipoHamburguesa,boolJamon,boolQueso,boolSalsaTomate,boolMayonesa,boolMostaza,boolTomate,boolLechuga,boolCebolla){
    let totalPrecio = calculoHamburguesa(tipoHamburguesa,boolJamon,boolQueso,boolSalsaTomate,boolMayonesa,boolMostaza,boolTomate,boolLechuga,boolCebolla);

    console.log(`Estimado ${nombreUsuario} ${apellidoUsuario}, el monto total a pagar es de: $${totalPrecio}`);
}
let mensaje = fastFood(nombre,apellido,"carne",true, false, false, true, true, false, true, false);
// console.log(mensaje)

function rentalCar(tipoVehiculo,diasAlquiler,sillaBebe){
    let costoVehiculo
    let costoTotal
    let vehiculo
    switch(tipoVehiculo){
        case 1:
            vehiculo = "compacto"
            costoVehiculo = 14000;
            break;
        case 2:
            vehiculo = "mediano"
            costoVehiculo = 17000;
            break;
        case 3:
            vehiculo = "camioneta"
            costoVehiculo = 28000;
            break;
        default:
            return console.log("Por favor, ingrese una opción válida.")
    }
    switch(sillaBebe){
        case "s":
            costoTotal = (costoVehiculo + 1200) * diasAlquiler;
            return console.log(`Estimado cliente: en base al tipo de vehículo ${vehiculo} alquilado, considerando el/los ${diasAlquiler} día/s utilizado/s y el adicional por la silla para niños, el monto total a pagar es de $${costoTotal}.`)
        case "n":
            costoTotal = costoVehiculo * diasAlquiler;
            return console.log(`Estimado cliente: en base al tipo de vehículo ${vehiculo} alquilado, considerando los ${diasAlquiler} día/s utilizado/s, el monto total a pagar es de $${costoTotal}.`)
        default:
            return console.log("Por favor, ingrese una opción válida.")
    }
}
// console.log(rentalCar(1, 3, "s")); // Ejemplo del total por vehículo compacto y silla
// console.log(rentalCar(2, 5, "n")); // Ejemplo del total por vehículo mediano sin silla
// console.log(rentalCar(4, 2, "n")); // Mensaje default si no elige una opción válida de vehículo
// console.log(rentalCar(1, 2, "x")); // Mensaje default si noelige una opción válida para la silla
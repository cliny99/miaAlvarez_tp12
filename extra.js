// FUNCIÓN UPPERCONVERTER
function upperConverter(palabra){
    let mayusculas = palabra.toUpperCase();
    return mayusculas;
}
// console.log(upperConverter("holaaaaaa"));

// FUNCIÓN DATATYPE
function dataType(dato){
    let tipoDato = typeof dato;
    return tipoDato;
}
// console.log(dataType(5));

// FUNCIÓN DOGAGE
function dogAge(edad){
    let edadPerruna = edad * 7;
    return edadPerruna;
}
// console.log(dogAge(5));

// FUNCIÓN HOURPRICE
function hourPrice(salarioMensual,diasTrabajados,horasDiarias){
    let calculo = salarioMensual / (diasTrabajados * horasDiarias);
    return calculo;
}
// console.log(hourPrice(500000,22,8));

module.exports = {upperConverter, dataType, dogAge, hourPrice}
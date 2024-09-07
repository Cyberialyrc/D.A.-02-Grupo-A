//ARCHIVO : Ejercicio1.js 
//AUTOR : Ricardo Gabriel Manrique Silva 
//FECHA : 07/09/24 
//DESCRIPCIÓN : Archivo JavaScript para calcular propina a base de un porcentaje y el total de la cuenta  
function Tips(Total, Percentage) { //Función para calcular la propina a base del porcentaje y con este, el total a pagar de la cuenta
    if (Total < 0 || Percentage < 0) { //Validación si son negativos
        return {
            tip: "Error",
            total: "Error"
        };
    }

    const TipAmount = Total * (Percentage / 100); //Se calcula la cantidad de la propina con el porcentaje deseado
    let Total_Amount = Total + TipAmount; //Se suma la propina calculada a la cuenta para tener el total a pagar
    return {
        tip: TipAmount.toFixed(2), //Retorna la propina con 2 decimales
        total: Total_Amount.toFixed(2) //Retorna el total a pagar con 2 decimales
    };
}

const BillAmount = parseFloat(prompt("Ingrese el total de la cuenta: ")); //Ingreso de la cuenta
const TipPercentage = parseInt(prompt("Ingrese el porcentaje que desea dejar de propina: ")); //Ingreso del porcentaje de la propina

if (isNaN(BillAmount) || isNaN(TipPercentage) || BillAmount < 0 || TipPercentage < 0) { //Validación que no sean valores nulos ni menores que 0
    console.log("Ingrese valores válidos no negativos.");
} else {
    const result = Tips(BillAmount, TipPercentage);
    if (result.total === "Error") { //Validación por si salta error en la función (Son negativos)
        console.log("Los valores ingresados no deben ser negativos.");
    } else {
        console.log("Propina: S/." + result.tip); //Impresión de la propina
        console.log("Total a pagar: S/." + result.total); //Impresión del total a pagar
    }
}
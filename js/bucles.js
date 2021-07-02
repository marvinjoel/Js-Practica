

/* Control de flujos: ciclos
    Creando ciclos while, do while y for */

/* Bucle while(Mientras): la condición entre paréntesis sea true,
    las declaraciones dentro del bucle se seguira ejecutando */

var num = 0;
while(num <= 100){
    console.log(num);
    num = num + 2;
}


// ----------------------------------------------------------------------------


/* do-while: primero puedes hacer las operaciones, luego puedes evaluarlas */





var pago = 0 , totalPago=0, deuda=80

do{
    pago = Number(prompt("Ingrese su pago: "));
    // el totalPago se sumara con el pago 

    totalPago = totalPago + pago;

    // evaluara si el totalPago es menor igual que la deuda 
    // si en totalPago pago es menor que 80, seguira en el bucle preguntando 
    // si el totalPago es igual o Mayor a 80, saldra del bucle
}while(totalPago < deuda)

// entra en una evaluacion de condición
// si el totalPago es igual a la deuda(80)
if (totalPago === deuda)
    alert("Tu deuda a sido cancelada con: "+totalPago+ "$Dolares")

// si el totalPago es mayor a la deuda(80)
else if(totalPago > deuda){
    alert("Tu deuda de: " +deuda+ " ah sido cancelada con: "+totalPago+ "$Dolares");
    alert("Tu vuelto es: "+(totalPago-deuda)+ "$Dolares")
}



// ----------------------------------------------------------------------------

for(var num = 0; num<= 100; num = num+2){
    console.log(num)
}


const jon = {
    nombre: 'Jose',
    apellido:'Carlos',
    edad: 24
}
// recorre propiedades de un objeto
for(const propiedad in jon){
    console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
}



// permite recorrer todos los elementos de cualquier objeto que sea iterable
 let numeros = [10,20,30,40,50,60,70,80,90]

 for(const elemento of numeros){
     console.log(`iterado ${elemento}`)
 }
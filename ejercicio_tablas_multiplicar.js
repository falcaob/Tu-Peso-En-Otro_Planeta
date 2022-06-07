/*
Ejercicio 9: escribe un programa que imprima todas las tablas de multiplicar (desde 1 al 10).
*/


for (i = 0, n = 8;  i <= 10; i++){
    resultado = 8 * i;
    console.log(`${n} X ${i} = ${resultado}`);
}



// profe con bucle dentro de bucle 

for (let j = 1; j <= 10; j++) {

    console.log(`Tabla del ${j}`);

    for (let i = 0; i <= 10; i++) {
        console.log(`${j} x ${i} = ${i*j}`);
    }
}


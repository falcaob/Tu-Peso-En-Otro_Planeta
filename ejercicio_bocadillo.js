/*
Escribe un programa con dos variables: litrosAceiteEnGarrafa con valor a 10 y litrosAceiteEnBocadillo con valor 0 . Haz un bucle while, de tal forma que en cada iteración se incremente en 1 el valor de la variable  litrosAceiteEnbocadillo y decremente en 1 valor el valor de la variable  litrosAceiteEnGarrafa. La variable  litrosAceiteEnbocadillo  debería quedar con un valor de 3. Por último, muestra con un console.log el valor de las variables  litrosAceiteEnGarrafa  y  litrosAceiteEnbocadillo  
*/

let litrosAceiteEnGarrafa = 10;
let litrosAceiteEnbocadillo = 0;

while (litrosAceiteEnbocadillo <= 3) {
    litrosAceiteEnbocadillo++;
    litrosAceiteEnGarrafa--;

    console.log(`${litrosAceiteEnbocadillo} en bocadillo y ${litrosAceiteEnGarrafa} en garrafa`);
}



/* del profe

let litrosAceiteEnGarrafa = 10;
let litrosAceiteEnBocadillo = 0;

while (litrosAceiteEnBocadillo < 3) {
    litrosAceiteEnBocadillo++;
    litrosAceiteEnGarrafa--;
    console.log(litrosAceiteEnBocadillo, litrosAceiteEnGarrafa);
}

console.log(`Litros en garrafa (primer bocadillo): ${litrosAceiteEnGarrafa}`);
console.log(`Litros en primer bocadillo: ${litrosAceiteEnBocadillo}`);

let litrosAceiteEnBocadillo2 = 0;

while ((litrosAceiteEnBocadillo2 < 8) && (litrosAceiteEnGarrafa > 0)) {
    litrosAceiteEnBocadillo2++;
    litrosAceiteEnGarrafa--;
    console.log(litrosAceiteEnBocadillo2, litrosAceiteEnGarrafa);
    
    // ya no tengo más aceite
    // if (litrosAceiteEnGarrafa === 0) {
    //     break;
    // }
}

console.log(`Litros en garrafa (segundo bocadillo): ${litrosAceiteEnGarrafa}`);
console.log(`Litros en segundo bocadillo: ${litrosAceiteEnBocadillo2}`); */
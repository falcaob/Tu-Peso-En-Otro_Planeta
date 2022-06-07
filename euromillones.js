/*
1. Crear un array de 5 números con los que número que juego
2. Crear un array con 2 números con las estrellas que juego
3. Crear una función que se llama realizarSorteo, que no recibe ningún parámetro y que devuelva un objeto con dos propiedades: numeros (array de cinco números aleatorios distintos comprendidos entre 1 y 49) y estrellas (array de dos números aleatorios distintos comprendidos entre 1 y 11) 
*/





/*
function generarNumeroAleatorio(max) {
    return Math.ceil(Math.random()*max);
}

function realizarSorteo() {

    const numerosSorteo = []
    while(numerosSorteo.length !== 5) {
        const numeroAleatorio = generarNumeroAleatorio(50);
        if(numerosSorteo.includes(numeroAleatorio) === false) {
            numerosSorteo.push(numeroAleatorio);
        }
    }

    console.log(numerosSorteo);
}

realizarSorteo();

function realizarEstrellas () {
    const numerosEstrellas = [];
    while(numerosEstrellas.length !== 2) {
        const aleatorios = generarNumeroAleatorio(12);
        if(numerosEstrellas.includes(aleatorios) === false) {
            numerosEstrellas.push(aleatorios);
        }
    }

    console.log(numerosEstrellas);
}

realizarEstrellas();

*/








// PROFE

function generarNumeroAleatorio(max) {
    return Math.ceil(Math.random()*max);
}

function realizarSorteo() {

    // creo el array vacío donde voy a insertar los números del sorte
    const numerosSorteo = []

    // sigo insertando número hasta tener 5
    while(numerosSorteo.length !== 5) {
        // creo número aleatorio entre 1 y 50 y lo guardo en una variable
        const numeroAleatorio = generarNumeroAleatorio(50);

        // comprueba si el número aleatorio generado está ya incluido dentro de los números del sorteo. Si no está incluido, se inserta en los números del sorteo y si no, no se hace nada y continúa a la siguiente iteracción.
        if(numerosSorteo.includes(numeroAleatorio) === false) {
            numerosSorteo.push(numeroAleatorio);
        }
    }

    // creo un array vacío donde voy a insertar las estrellas
    const estrellasSorteo = [];

    // sigo insertando estrellas hasta tener 2 que sean distintos valores
    while(estrellasSorteo.length !== 2) {

        const estrellaAleatoria = generarNumeroAleatorio(12);

        // solamente inserto en el array de estrellasSorteo cuando la estrella aleatoria generada no está dentro del array de estrellasSorteo

        if(estrellasSorteo.includes(estrellaAleatoria) === false) {
            estrellasSorteo.push(estrellaAleatoria);
        }
    }

    return {
        numeros: numerosSorteo,
        estrellas: estrellasSorteo
    };
}

const numerosApuesta = [2, 6, 16, 22, 45];
const estrellasApuesta = [2, 8];

for(let i=0; i<120000000; i++) {
    const sorteo = realizarSorteo();

    // console.log(`Mis números son ${numerosApuesta}`);
    // console.log(`Los números del sorteo ${sorteo.numeros}`);

    let numerosCoincidentes = 0;

    for(const numero of numerosApuesta) {
        if(sorteo.numeros.includes(numero)) {
            numerosCoincidentes++;
        }
    }

    let estrellasCoincidentes = 0;
    for(const estrella of estrellasApuesta) {
        if(sorteo.estrellas.includes(estrella)) {
            estrellasCoincidentes++;
        }
    }

    if((numerosCoincidentes === 5) && (estrellasCoincidentes === 2)) {
        console.log(numerosCoincidentes, estrellasCoincidentes);
    }
}
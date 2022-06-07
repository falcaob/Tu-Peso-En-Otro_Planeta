
function ajax(opciones, callback) {

    // crea el objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    // establece una función a invocar cuando el atributo readyState cambia
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status == 200) {  
            // los datos están en esta propiedad
            callback(this.responseText);
        }
    };

    // establece la configuración de la petición (tipo, url y asincronismo(lo recomendable))
    xhttp.open(opciones.method, opciones.url, true);

    // envía la petición al servidor
    xhttp.send('{}');
}


ajax({
    url: 'https://api.covid19api.com/dayone/country/spain/status/confirmed',
    method: 'GET'
}, (datos) => {
    // dias es un array de objetos
    const dias = JSON.parse(datos);

    //console.log(dias);
    
    //Mostrar por pantalla el número de casos no acumulativos por día para España 
    // itero o recorro el array de dias
    
    // console.log(dias[0].Cases, dias[0].Date)
    for (let i = 1; i < dias.length; i++) {
        const diaActual = dias[i];
        const diaAnterior = dias[i-1];
        const casosDia = diaActual.Cases - diaAnterior.Cases;
        // console.log(casosDia, diaActual.Date);
        // break;
    }

    // for(const dia of dias) {
    //     console.log(dia.Cases, dia.Date, dia.Country);
    // }
});


// Mostrar en pantalla todos los países disponible para la descarga de datos

ajax({
    url: 'https://api.covid19api.com/countries',
    method: 'GET'
}, (datosString) => {
    const paises = JSON.parse(datosString);
    for (const pais of paises) {
        console.log(pais.Country);
    }
});
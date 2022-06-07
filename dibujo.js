var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var color_boton = document.getElementById("boton_color");
var color_boton1 = document.getElementById("boton_color1");

//alert("Mi amore es la mejor");
//obtener el elemento a partir de una id
var d = document.getElementById("dibujito");
//obtener lienzo en 2D
//getContext es una función del objeto canvas
var lienzo = d.getContext("2d");
var ancho = d.width;

//console.log(lienzo);
/*var lineas = 30;
//límites, líneas totales de mi dibujo
//ciclo algo que ocurre mientras sea verdad
var l = 0; //esto es para que nos cuente las líneas
var yi, xf;
var xi, yf;
var xf2, xi2;
var colorsito = "red";
var colore = "blue";
var colorito = "green";
var colorr = "grey";

//ciclos solo paran cuando ponemos límites
for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorsito, 0, yi, xf, 300);
  console.log("Linea " + l);

  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colore, 300, yi, xf, 0);

  yf = 10 * l;
  xi = 10 * (l + 1);
  xf2 = xi2 = 290 - (l * 10);

  dibujarLinea(colorito, xi2, 0, 0, yf);
  dibujarLinea(colorr, 300, yi, xf2, 300);

}

/*while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorsito, 0, yi, xf, 300);
  //el ciclo hay que terminarlo
  console.log("Linea " + l);
  l = l + 1; //también l++;
}

//esto solo para dinujar linea del borde
dibujarLinea(colore, 299, 299, 299, 1);
dibujarLinea(colore, 299, 1, 1, 1);
*/
var color_lineal = "black";
dibujarLinea(color_lineal, 1, 1, 1, 299);
dibujarLinea(color_lineal, 1, 299, 299, 299);
dibujarLinea(color_lineal, 299, 299, 299, 1);
dibujarLinea(color_lineal, 299, 1, 1, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  //var x = texto.value;
  //alert("No me toques ahí " + texto.value);
  //podemos decir que linea es = al valor de la caja de texto
  lienzo.clearRect(0,0,300,300);
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorsito = color_boton.value;
  var colorsito1 = color_boton1.value;
  var espacio = ancho/ lineas;


  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorsito, 0, yi, xf, 300);
    console.log("Linea " + l);

    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorsito1, 300, yi, xf, 0);

  }


}







/*función para arrancar un trazo
lienzo.beginPath();
//var para elegir color
lienzo.strokeStyle = "blue";
//colocar punto en lugar correcto, Método o función
lienzo.moveTo(50, 10);
//función de trazar una línea
lienzo.lineTo(250, 2);
//dibujar el con el color que decidimos
lienzo.stroke();
//cerrar el camino
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(180, 10);
lienzo.lineTo(290, 200);
lienzo.stroke();
lienzo.closePath();*/

//función: herramienta que permite código que vamos a reusar
//function nombreFuncion(parámetro) {código que ejecuta la function}
//dibujarLinea("yellow", 300, 10, 10, 220);
//dibujarLinea("#AAF", 0, 10, 20, 300);
//dibujarLinea("#AAF", 0, 20, 30, 300);

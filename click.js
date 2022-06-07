var color = document.getElementById("sellecionar_color");
var cuadro = document.getElementById("areaDibujo");
var papel = cuadro.getContext("2d");

cuadro.addEventListener("mousedown", lineaInicial);
cuadro.addEventListener("mouseup", finLinea);
cuadro.addEventListener("mousemove",lineaMovimiento);

var colore = "black" //linea margenes
let mouse = false; // La variable mouse por defecto será false porque así lo definí

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    papel.beginPath();
    papel.lineWidth = 5;
    papel.strokeStyle = color;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath;
}

dibujarLinea(colore, 0, 0, 300, 0, cuadro);
dibujarLinea(colore, 300, 300, 0, 300, cuadro);
dibujarLinea(colore, 0, 300, 0 , 0, cuadro);
dibujarLinea(colore, 300, 0, 300, 300, cuadro);

function lineaInicial(event)
{
  mouse = true;
}

function finLinea(event)
{
  mouse = false;
}

function lineaMovimiento(event)
{
  if(mouse == true)
  {
    dibujarLinea(color.value, event.layerX - 1, event.layerY - 1,
    event.layerX + 1, event.layerY + 1, papel)
  }
}

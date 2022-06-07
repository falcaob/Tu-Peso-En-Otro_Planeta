//alert("todo bien");
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
//console.log(teclas);

//poniendo el keydown solo tengo que tener oprimida tecla
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
//donde empieza mi dibujo
var x = 100;
var y = 100;

//podemos hacer dinámica el punto rojo
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

//pongo lienzo como parámetro para no preocuparme de var internas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  //alert("OH POR DIOS");
  //console.log("Tecla oprimida");
  //console.log(evento.keyCode);//para el KeyCode

  /*if(evento.keyCode == teclas.UP)
  {
    console.log("Vamos pa arriba");
  }*/
  var colorcito = "green";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;

    /*dafault: igual que el else
      console.log("Otra tecla");
    break;*/

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }

}

let imagen = document.getElementById("imagen");
/* busca el id imagen y la guarda en la variable imagen */
let boton = document.getElementById("calcularBtn");
/* para guardar el boton de los sticker */
let pass = document.getElementById("ingresar");
/* para guardar el boton de la password */
/* --------------------------------------------------------------------- */
function cambiaBorde() {
  if (imagen.classList.contains("seleccionado")) {
    imagen.classList.remove("seleccionado");
  } else {
    imagen.classList.add("seleccionado");
  }
}
imagen.addEventListener("click", cambiaBorde);
/* --------------------------------------------------------------------- */



function resuelve() {
  let unoV = parseFloat(document.getElementById("uno").value);
  let dosV = parseFloat(document.getElementById("dos").value);
  let tresV = parseFloat(document.getElementById("tres").value);
  let suma = unoV + dosV + tresV;
  if (suma > 10) {
    document.getElementById("resultado").innerHTML =
      "Llevas demasiados stickers";
  } else {
    document.getElementById("resultado").innerHTML =
      "llevas " + suma + " stickers";
  }
}
boton.addEventListener("click", resuelve);
/* --------------------------------------------------------------------- */
function clave() {
  let primer = parseFloat(document.getElementById("selectuno").value);
  let segun = parseFloat(document.getElementById("selectdos").value);
  let tercer = parseFloat(document.getElementById("selecttres").value);
  if (primer==9 && segun==1 && tercer==1) {
    document.getElementById("password").innerHTML =
      "password 1 es correcto";
  } else {
    if (primer==7 && segun==1 && tercer==4){
      document.getElementById("password").innerHTML =
      "password 2 es correcto";

    }else{
      document.getElementById("password").innerHTML =
      "password incorrecto";
    }

  }
}
pass.addEventListener("click", clave);
/* actividad 3 password */
/* ----------------------------------------------------------------------- */
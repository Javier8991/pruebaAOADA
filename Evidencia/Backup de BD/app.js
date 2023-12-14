const nombre = document.querySelector("#nombre");
nombre.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const apellidop = document.querySelector("#apellidop");
apellidop.addEventListener("input", (e) => {
  console.log(e.target.value);
});
const apellidom = document.querySelector("#apellidom");
apellidom.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const instituto = document.querySelector("#instituto");
var institutoSeleccionado;
instituto.addEventListener("change", (e) => {
  institutoSeleccionado = instituto.value;
  console.log(institutoSeleccionado);
});
const nip = document.querySelector("#nip");
nip.addEventListener("input", (e) => {
  console.log(e.target.value);
});
const password = document.querySelector("#password");
password.addEventListener("input", (e) => {});

//encriptar la contraseña
function encriptarPassword(password) {
  //algoritmo HASH256
  const contrasenaEncriptada = CryptoJS.SHA256(password).toString();

  return contrasenaEncriptada;
}

const contrasenaEncriptada = encriptarPassword(password);

function registrarse() {
  var datos = {
    nombre: nombre.value,
    apellidop: apellidop.value,
    apellidom: apellidom.value,
    instituto: instituto.value,
    matricula: nip.value,
    contrasena: contrasenaEncriptada,
  };

  fetch("guardar_usuario.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //Indicamos que enciaremos datos en formato json
    },
    body: JSON.stringify(datos), //convertimos el objeto data en una cadena de texto en formato JSON.
  })
    .then((resultado) => resultado.json())
    .then((datos) => {
      console.log(datos);
    })
}
registrarse();


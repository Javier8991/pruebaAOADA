const registrar = document.querySelector('#registrarse');
registrar.addEventListener('click', function (){
  registrarse();
});

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
password.addEventListener("input", (e) => {
  console.log(contrasenaEncriptada)
});

//encriptar la contraseña
function encriptarPassword(password) {
  //algoritmo HASH256
  const contrasenaEncriptada = CryptoJS.SHA256(password).toString();

  return contrasenaEncriptada;
}

const contrasenaEncriptada = encriptarPassword(password);

function registrarse() {
  console.log("Estoy en la funcion Registrar")
  var datos = {
    nombre: nombre.value,
    apellidop: apellidop.value,
    apellidom: apellidom.value,
    instituto: instituto.value,
    matricula: nip.value,
    contrasena: contrasenaEncriptada,
  };
 console.log(datos,'objetos')
  fetch("includes/guardar_usuario.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" //Indicamos que enciaremos datos en formato json
    },
    body: JSON.stringify(datos)  //convertimos el objeto data en una cadena de texto en formato JSON.
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}



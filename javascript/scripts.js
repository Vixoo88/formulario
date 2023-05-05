const form = document.querySelector('form');
const carta = document.getElementById('carta');

function validarCorreo(correo) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}


// Función para crear la carta de presentación e intención
function crearCarta(e) {
  e.preventDefault(); // Prevenir el envío del formulario
  const rut = form.rut.value;
  const nombre = form.name.value;
  const apellidoPaterno = form.apellidop.value;
  const apellidoMaterno = form.apellidom.value;
  const fechaNacimiento = form.date.value;
  const edad = form.edad.value;
  const genero = form.genero.value;
  const celular = form.celular.value;
  const correo = form.correo.value;
  const profesion = form.profesion.value;
  const motivacion = form.motivacion.value;


  // Concatenar los datos en la carta
  const cartaTexto = `Estimados señores,


  Me dirijo a ustedes con el propósito de postular al cargo de su empresa. Mi nombre es ${nombre} ${apellidoPaterno} ${apellidoMaterno}, mi rut es ${rut}, nací el ${fechaNacimiento} y tengo ${edad} años.


  Soy ${genero === 'Hombre' ? 'un' : genero === 'Mujer' ? 'una' : 'una persona'} ${profesion} con experiencia en el area. Me considero una persona proactiva, responsable y comprometida, y estoy convencido de que puedo aportar valor a su empresa.


  ${motivacion}


  Agradezco de antemano su consideración y quedo a su disposición para cualquier consulta adicional.


  Atentamente,
  ${nombre} ${apellidoPaterno} ${apellidoMaterno}
  Celular: ${celular}
  Correo electrónico: ${correo}`;


  // Asignar la carta generada al campo de texto correspondiente
  carta.value = cartaTexto;
}

// Agregar el evento de click al botón "Crear carta"
const btnCrearCarta = document.querySelector('input[value="Crear carta"]');
btnCrearCarta.addEventListener('click', crearCarta);




const formulario = document.getElementById("formulario");
const botonEnviar = document.querySelector("button[type='submit']");

botonEnviar.addEventListener("click", validarFormulario);
formulario.addEventListener("submit", validarFormulario);



function validarFormulario() {
  let rut = document.getElementById("rut").value;
  let name = document.getElementById("name").value;
  let apellidop = document.getElementById("apellidop").value;
  let apellidom = document.getElementById("apellidom").value;
  let date = document.getElementById("date").value;
  let edad = document.getElementById("edad").value;
  let genero = document.getElementById("genero").value;
  let celular = document.getElementById("celular").value;
  let correo = document.getElementById("correo").value;
  let profesion = document.getElementById("profesion").value;
  let motivacion = document.getElementById("motivacion").value;

  // Validar el campo de Rut
  if (rut == "") {
    alert("Debe ingresar un RUT");
    return false;
  }

  // Validar el campo de Nombre
  if (name == "") {
    alert("Debe ingresar un nombre");
    return false;
  }

  // Validar el campo de Apellido Paterno
  if (apellidop == "") {
    alert("Debe ingresar un apellido paterno");
    return false;
  }

  // Validar el campo de Apellido Materno
  if (apellidom == "") {
    alert("Debe ingresar un apellido materno");
    return false;
  }

  // Validar el campo de Fecha de Nacimiento
  if (date == "") {
    alert("Debe ingresar una fecha de nacimiento");
    return false;
  }

  // Validar el campo de Edad
  if (edad == "" || isNaN(edad)) {
    alert("Debe ingresar una edad válida");
    return false;
  }

  // Validar el campo de Género
  if (genero == "") {
    alert("Debe seleccionar un género");
    return false;
  }

  // Validar el campo de Celular
  if (celular == "" || isNaN(celular)) {
    alert("Debe ingresar un número de celular válido");
    return false;
  }

  // Validar el campo de Correo electrónico
  if (correo == "") {
    alert("Debe ingresar un correo electrónico");
    return false;
  } else if (!correo.includes("@") || !correo.includes(".")) {
    alert("Debe ingresar un correo electrónico válido");
    return false;
  }

  // Validar el campo de Profesión
  if (profesion == "") {
    alert("Debe ingresar una profesión");
    return false;
  }

  // Validar el campo de Motivación
  if (motivacion == "") {
    alert("Debe ingresar una motivación para postular");
    return false;
  }
}


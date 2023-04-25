const form = document.querySelector('form');
const carta = document.getElementById('carta');


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

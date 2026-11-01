// FASE 4: Cuestionario sobre el Venerable Pedro Díez Gil.
// Se utilizan variables, funciones, if/else y eventos vistos en clase.

let preguntaActual = 1;
let puntaje = 0;
let respuestaSeleccionada = 0;
let respuestaComprobada = false;

const contador = document.getElementById("quiz-contador");
const puntajeTexto = document.getElementById("quiz-puntaje");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const mensajeRespuesta = document.getElementById("respuesta");
const botonResponder = document.getElementById("btn-responder");
const botonSiguiente = document.getElementById("btn-siguiente");
const barraProgreso = document.getElementById("barra-progreso");
const barraProgresoValor = document.getElementById("barra-progreso-valor");
const contenidoQuiz = document.getElementById("quiz-contenido");
const pantallaFinal = document.getElementById("quiz-final");
const resultadoFinal = document.getElementById("resultado-final");
const botonReiniciar = document.getElementById("btn-reiniciar");

// Muestra el enunciado y las cuatro opciones de cada pregunta.
function mostrarPregunta() {
  respuestaSeleccionada = 0;
  respuestaComprobada = false;
  mensajeRespuesta.textContent = "";
  botonResponder.disabled = true;
  botonResponder.hidden = false;
  botonSiguiente.hidden = true;

  contador.textContent = "Pregunta " + preguntaActual + " de 5";
  puntajeTexto.textContent = "Aciertos: " + puntaje;
  barraProgresoValor.style.width = (preguntaActual * 20) + "%";
  barraProgreso.setAttribute("aria-valuenow", preguntaActual);

  if (preguntaActual === 1) {
    pregunta.textContent = "¿Dónde nació Pedro Díez Gil?";
    opciones.innerHTML = '<button type="button" class="opcion" id="opcion1">Zaragoza</button><button type="button" class="opcion" id="opcion2">Pampliega (Burgos)</button><button type="button" class="opcion" id="opcion3">Tolosa</button><button type="button" class="opcion" id="opcion4">Albelda de Iregua</button>';
  } else if (preguntaActual === 2) {
    pregunta.textContent = "¿En qué año regresó a Zaragoza y comenzó su etapa en el Colegio Santo Tomás de Aquino?";
    opciones.innerHTML = '<button type="button" class="opcion" id="opcion1">1926</button><button type="button" class="opcion" id="opcion2">1935</button><button type="button" class="opcion" id="opcion3">1939</button><button type="button" class="opcion" id="opcion4">1983</button>';
  } else if (preguntaActual === 3) {
    pregunta.textContent = "¿Cómo se llamaba el libro que escribió para la enseñanza de la lectoescritura?";
    opciones.innerHTML = '<button type="button" class="opcion" id="opcion1">La escuela nueva</button><button type="button" class="opcion" id="opcion2">Chiquitín</button><button type="button" class="opcion" id="opcion3">Aprender jugando</button><button type="button" class="opcion" id="opcion4">El maestro</button>';
  } else if (preguntaActual === 4) {
    pregunta.textContent = "¿Qué reconocimiento recibió el 20 de mayo de 2023?";
    opciones.innerHTML = '<button type="button" class="opcion" id="opcion1">Fue declarado Venerable</button><button type="button" class="opcion" id="opcion2">Fue canonizado</button><button type="button" class="opcion" id="opcion3">Fue nombrado obispo</button><button type="button" class="opcion" id="opcion4">Recibió la Medalla de Oro</button>';
  } else if (preguntaActual === 5) {
    pregunta.textContent = "¿Cuál era el cuarto voto propio de la Orden de las Escuelas Pías?";
    opciones.innerHTML = '<button type="button" class="opcion" id="opcion1">La vida contemplativa</button><button type="button" class="opcion" id="opcion2">La atención a los enfermos</button><button type="button" class="opcion" id="opcion3">La dedicación a la educación de la niñez</button><button type="button" class="opcion" id="opcion4">La construcción de escuelas</button>';
  }

  // Cada botón guarda el número de la opción elegida.
  document.getElementById("opcion1").addEventListener("click", function () { seleccionarRespuesta(1); });
  document.getElementById("opcion2").addEventListener("click", function () { seleccionarRespuesta(2); });
  document.getElementById("opcion3").addEventListener("click", function () { seleccionarRespuesta(3); });
  document.getElementById("opcion4").addEventListener("click", function () { seleccionarRespuesta(4); });
}

// Marca la opción elegida.
function seleccionarRespuesta(numero) {
  if (respuestaComprobada === false) {
    respuestaSeleccionada = numero;

    document.getElementById("opcion1").className = "opcion";
    document.getElementById("opcion2").className = "opcion";
    document.getElementById("opcion3").className = "opcion";
    document.getElementById("opcion4").className = "opcion";
    document.getElementById("opcion" + numero).className = "opcion seleccionada";

    botonResponder.disabled = false;
  }
}

// Compara la respuesta elegida con la correcta y suma un punto si corresponde.
function comprobarRespuesta() {
  if (respuestaSeleccionada === 0 || respuestaComprobada === true) {
    return;
  }

  let respuestaCorrecta = 0;
  let explicacion = "";

  if (preguntaActual === 1) {
    respuestaCorrecta = 2;
    explicacion = "Nació en Pampliega (Burgos) el 14 de abril de 1913.";
  } else if (preguntaActual === 2) {
    respuestaCorrecta = 3;
    explicacion = "Regresó en 1939 y permaneció allí durante 46 años.";
  } else if (preguntaActual === 3) {
    respuestaCorrecta = 2;
    explicacion = "Escribió Chiquitín, utilizado durante décadas en escuelas de toda España.";
  } else if (preguntaActual === 4) {
    respuestaCorrecta = 1;
    explicacion = "El papa Francisco reconoció sus virtudes heroicas y lo declaró Venerable.";
  } else if (preguntaActual === 5) {
    respuestaCorrecta = 3;
    explicacion = "Su cuarto voto era dedicarse a la educación de la niñez.";
  }

  respuestaComprobada = true;

  if (respuestaSeleccionada === respuestaCorrecta) {
    puntaje = puntaje + 1;
    mensajeRespuesta.textContent = "¡Correcto! " + explicacion;
  } else {
    mensajeRespuesta.textContent = "No es correcto. La respuesta era: " + document.getElementById("opcion" + respuestaCorrecta).textContent + ". " + explicacion;
  }

  document.getElementById("opcion1").disabled = true;
  document.getElementById("opcion2").disabled = true;
  document.getElementById("opcion3").disabled = true;
  document.getElementById("opcion4").disabled = true;

  botonResponder.hidden = true;
  puntajeTexto.textContent = "Aciertos: " + puntaje;
  botonSiguiente.hidden = false;

  if (preguntaActual === 5) {
    botonSiguiente.textContent = "Ver resultado";
  } else {
    botonSiguiente.textContent = "Siguiente pregunta";
  }
}

// Pasa a la siguiente pregunta o muestra el resultado.
function avanzarPregunta() {
  if (respuestaComprobada === true) {
    if (preguntaActual < 5) {
      preguntaActual = preguntaActual + 1;
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
  }
}

// Muestra el puntaje final.
function mostrarResultado() {
  contenidoQuiz.hidden = true;
  pantallaFinal.hidden = false;
  resultadoFinal.textContent = "Obtuviste " + puntaje + " de 5 respuestas correctas.";

  if (puntaje === 5) {
    resultadoFinal.textContent += " ¡Excelente! Conocés muy bien la vida y el legado de Pedro Díez Gil.";
  } else if (puntaje >= 3) {
    resultadoFinal.textContent += " ¡Muy bien! Repasá los datos que te resultaron más difíciles.";
  } else {
    resultadoFinal.textContent += " Te invitamos a recorrer nuevamente la página y conocer más sobre su historia.";
  }
}

// Vuelve al comienzo para realizar el cuestionario otra vez.
function reiniciarQuiz() {
  preguntaActual = 1;
  puntaje = 0;
  pantallaFinal.hidden = true;
  contenidoQuiz.hidden = false;
  mostrarPregunta();
}

// Eventos: ejecutan las funciones cuando se hace clic en los botones.
botonResponder.addEventListener("click", comprobarRespuesta);
botonSiguiente.addEventListener("click", avanzarPregunta);
botonReiniciar.addEventListener("click", reiniciarQuiz);

// Primera pregunta al cargar la página.
mostrarPregunta();

const MAX_RESPONSES = 60; // Número máximo de respuestas permitidas
const CIERRE_FECHA_HORA = new Date('2024-07-29T08:00:00'); // Fecha y hora de cierre (Año-Mes-DíaTHora:Minuto:Segundo)
const EMAILS = []; // Agregar correo/s a donde llegará la notificación cuando se cierre el formulario

function closeFormOnMaxResponsesOrDate() {
  // Obtén el formulario activo
  var form = FormApp.getActiveForm();
  // Obtén todas las respuestas del formulario
  var responses = form.getResponses();
  
  // Obtén la hora actual
  var ahora = new Date();
  
  console.log(form.isAcceptingResponses())
  
  // Verifica si se alcanzó el número máximo de respuestas o si se alcanzó la fecha y hora de cierre
  if ((responses.length >= MAX_RESPONSES || ahora >= CIERRE_FECHA_HORA) && form.isAcceptingResponses()) {
    form.setAcceptingResponses(false);
    
    var diaCierre = Utilities.formatDate(ahora, Session.getScriptTimeZone(), "dd/MM");
    var horaCierre = Utilities.formatDate(ahora, Session.getScriptTimeZone(), "HH:mm");

    var mensajeCierre;
    if (responses.length >= MAX_RESPONSES) {
      // Si se cerró por número de respuestas
      mensajeCierre = 'El formulario se cerró automáticamente el día ' + diaCierre + ' a las ' + horaCierre + ' por haber alcanzado el cupo máximo para esta actividad.';
    } else {
      // Si se cerró por fecha y hora
      mensajeCierre = 'El formulario se cerró automáticamente el día ' + diaCierre + ' a las ' + horaCierre + ' por haber alcanzado la fecha límite de inscripción de esta actividad.';
    }
    
    // Establece el mensaje de cierre
    form.setCustomClosedFormMessage(mensajeCierre);
    
    Logger.log(mensajeCierre);

    // Consigue titulo del Fomulario para mandarlo en el asunto del correo
    var titulo = form.getTitle();

    EMAILS.forEach(function(email) {
      MailApp.sendEmail({
        to: email,
        subject: 'IMPORTANTE [' + titulo + ' ha sido CERRADO]',
        body: mensajeCierre
      });
    });

  } else {
    Logger.log('El formulario aún acepta respuestas. Respuestas actuales: ' + responses.length);
  }
}

function setTrigger() {
  // Elimina todos los disparadores existentes para evitar duplicados
  ScriptApp.getProjectTriggers().forEach(trigger => ScriptApp.deleteTrigger(trigger));
  // Crea un nuevo disparador para que se ejecute cada vez que se envíe una respuesta
  ScriptApp.newTrigger('closeFormOnMaxResponsesOrDate')
           .forForm(FormApp.getActiveForm())
           .onFormSubmit()
           .create();
}

// Ejecuta esta función una vez para configurar el disparador
function initialize() {
  setTrigger();
}

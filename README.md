# Cierre Triggereado para Formularios de Google Forms

<h3>Este proyecto nace de la necesidad de automatizar el cierre los formularios de Google ante la inexistencia de esta opción para esta herramienta.</h3>
<h5>Utilizar este script con la herramienta App Script se consiguen las siguentes posibilidades:</h5>
  <ul> 
    <li>Automatizar el cierre de un formulario por cantidad de respuestas.</li>
    <li>Automatizar el cierre de un formulario en una fecha y hora determinadas.</li>
    <li>Personalizar el mensaje de cierre del formulario.</li>
    <li>Configurar una o más direcciones de correo electrónico para recibir aviso cuando el formulario se cierre.</li>
  </ul>
  
<h5>Para configurar un formulario de esta manera se deberá seguir los siguentes pasos:</h5>
  <ul><h7> Paso 1: Creá un formulario de google - si bien quizá es algo obvio para configurar un formalario hay ser propietario de uno y tener permisos de edición si es de un tercero.</h7></ul>
  <ul><h7>Paso 2: Ingresá al editor de código para las herramientas de Google - Ir al apartado "Editor de secuencia de comandos", esta opción se encuentra en la parte superior derecha en el simbolo de tre puentos que dice "Más", nos abrirá otra pertaña en el navegador donde nos creará un proyecto de AppScript, se si quiere se puede cambiar el nombre al proyecto, ya que por defecto se llamará "Proyecto sin título".</h7></ul>
  <ul><h7>Paso 3: Copiá y pegá el código del repositorio - Se creará automaticamento un archivo llamdo "Código.gs", el nombre de este archivo tambien se puede cambiar, donde se pegará el código del archivo "autocierre.gs" que se encuentra en este repositorio y guardamos cambios con CTRL + S.</h7></ul>
  <ul><h7>Paso 4: Configurá los paramatros según tus criterios - En las primeras líneas hay 2 constantes, estas son MAX_RESPONSES (para definir la cantidad de respuestas máxima) y CIERRE_FECHA_HORA (para definir la fecha límite), se deben configurar según el criterio deseado.</h7></ul>
  <ul><h7>Paso 5: Configurá Activadores/Triggers - Ir al apartado Activadores en AppScript, este se encuentra la columna izquierda y es la cuarta opción, en esta sección configurar 2 activadores, hay que seleccionar "Añadir activador", para el primer activador aplicar la siguente configuración:</h7>
    <li>Seleccionar qué función ejecutar = "initialize"</li>
    <li>Seleccionar qué despliegue se debe ejecutar = "Principal"</li>
    <li>Selecciona la fuente del evento = "De un formulario"</li>
    <li>Selecciona el tipo de evento = "Al enviarse el formulario"</li>
    <h7>Cuando quieras guardar la configuración Google solicitará permisos, seleccionar la cuenta propietaria el formulario, luego Google dirá que no ha verificado la App ya que no ha sigo desarrollada por ellos, seleccionar "Advanced", despues "Go to "Nombre del proyecto"(unsafe)" y al final "Allow" (solicita permisos para ver y manipular Formulario, enviar emails y ejecutarse cuando no estés presente) Y para el segundo:</h7>
    <li>Seleccionar qué función ejecutar = "initialize"</li>
    <li>Seleccionar qué despliegue se debe ejecutar = "Principal"</li>
    <li>Selecciona la fuente del evento = "Según tiempo"</li>
    <li>Selecciona el tipo de activador basado en la hora = "Fecha y hora especifica"</li>
    <li>En el campo inferior escribir una fecha y hora posterior a la constante CIERRE_FECHA_HORA, con un minuto es suficiente, esto es para programar una ejecución en caso que el formulario no se haya cerado por cantidad máxima de respuetas.</li>
    </ul>
    <ul><h7>Paso OPCIONAL 1: Configurar correo/s - Si se desea recibir notificación cuando se cierre el formulario en la 3ra línea en la constante EMAILS entre comillas y separados por comas pones los correos deseados, ej: en caso de ser uno EMAILS = ["ejemplo@mail.com"]  y en caso de ser más EMAILS = ["ejemplo@mail.com","ejemplo2@mail.com"].</h7></ul>
    <ul><h7>Paso OPCIONAL 2: Deshabilitar uno de los conficionales - Si se desea un número indeterminado de respuestas definir la variable MAX_RESPONSES como "Infinity" y deberemos eliminar el primer activador, ej: "const MAX_RESPONSES = Infinity;", se no se quiere una fecha límite para el cierre definir CIERRE_FECHA_HORA como "null" y deberemos eliminar el segundo activador, ej: "const CIERRE_FECHA_HORA = null;".
    </h7></ul>
  

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
  <h7> Paso 1: Creá un formulario de google - si bien quizá es algo obvio para configurar un formalario hay ser propietario de uno y tener permisos de edición si es de un tercero.</h7>
  <h7>Paso 2: Ingresá al editor de código para las herramientas de Google - Ir al apartado "Editor de secuencia de comandos", esta opción se encuentra en la parte superior derecha en el simbolo de tre puentos que dice "Más", nos abrirá otra pertaña en el navegador donde nos creará un proyecto de AppScript.</h7>
  <h7>Paso 3: Copiá y pegá el código del repositorio - Crear un archivo llamado con extensión ".gs" donde se pegará el código del archivo "autocierre.gs" que se encuentra en este repositorio y guardamos cambios con CTRL + S.</h7>
  <h7>Paso 4: Configurá los paramatros según tus criterios - En las primeras líneas hay 2 constantes, estas son MAX_RESPONSES (para definir la cantidad de respuestas máxima) y CIERRE_FECHA_HORA (para definir la fecha límite), se deben configurar según el criterio deseado.</h7>
  <h7>Paso 5: Configurar Activadores/Triggers: Ir al apartado Activadores en AppScript, este se encuentra la columna izquierda y es la cuarta opción, en esta sección hay que seleccionar "Añadir activador"</h7>

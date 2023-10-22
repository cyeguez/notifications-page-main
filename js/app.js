
const counter = document.querySelector(".header__title--counter"); //ubicación del contador de notificaciones sin leer.
const allComments = document.querySelectorAll(".wrapper article"); // el contenedor de todas las publicaciones.
let unRead = document.querySelectorAll("article.active") // Notificaciones  no leídas.
let cont=0; //Declaracion del contador.

function updateCounter(value) { //Creo la función encargada de actualizar el contador de notificaciones sin leer.
  let numNotifications = value;
  counter.innerHTML = numNotifications; // Muestro el valor del contador de notificaciones sin leer.
}



updateCounter(unRead.length);

allComments.forEach(function (notification) {
  notification.addEventListener("click", function () {
    
    if(notification.classList.contains("active")) {
      cont+=1;    // cuento las veces que presiono las publicaciones sin leer.
      let index= unRead.length; // Obtengo el número total de notificaciones no leídas.
      let value = index - cont; //Cálculo el el número de publicaciones sin leer restantes.
      notification.classList.remove("active"); // Elimino la clase activa al darle click.
     
      updateCounter(value); // Llamo al método updateCounter para actualizar el contador de notificaciones no leídas.
      
    }


  });
   
});




  
   
  


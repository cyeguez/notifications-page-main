
const counter = document.querySelector(".header__title--counter"); //ubicación del contador de notificaciones sin leer
const allComments = document.querySelectorAll(".wrapper article");
let unRead = document.querySelectorAll("article.active") // Notificaciones  no leídas
let cont=0;

function updateCounter(value) {
  let numNotifications = value;
  counter.innerHTML = numNotifications;
}



updateCounter(unRead.length);

allComments.forEach(function (notification) {
  notification.addEventListener("click", function () {
    
    if(notification.classList.contains("active")) {
      cont+=1;    
      let index= unRead.length;
      let value = index - cont;
      console.log(value);
      notification.classList.remove("active");
     
      updateCounter(value);
      
    }


  });
   
});




  
   
  


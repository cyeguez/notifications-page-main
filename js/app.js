const posInd = document.getElementById('positionIdicador');

const allComments= document.querySelectorAll('.wrapper>article');



allComments.forEach((comment)=>{
  comment.addEventListener('click', function(){
    posInd.classList.remove("indicador");
  });
})
let makeAllRead=document.querySelector('.read')
let unread=document.querySelectorAll('.unread')
let redDot = document.querySelectorAll(".red-dott");

makeAllRead.addEventListener('click',() =>{
    
    unread.forEach(element => {
        if(element.classList.contains('unread')){
        element.classList.remove("unread");
        makeAllRead.innerHTML='Make all unread'
        }else{
            element.classList.add("unread");
            makeAllRead.innerHTML='Make all as read'

        }
    })
    redDot.forEach(elementt =>{
        if (elementt.style.display === "none") {
            elementt.style.display = "inline";
          } else {
            elementt.style.display = "none";
          }
    }

)})
        // element.style.backgroundColor='hsl(0, 0%, 100%)'      }
    
    

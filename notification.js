let makeAllRead=document.querySelector('.read')
let unread=document.querySelectorAll('.unread')
let redDot = document.querySelectorAll(".red-dott");
let notificationNum=document.querySelector('.notification-num')

makeAllRead.addEventListener('click',() =>{
    
    unread.forEach(element => {
        if(element.classList.contains('unread')){
        element.classList.remove("unread");
        makeAllRead.innerHTML='Make all unread'
        makeAllRead.style.color='hsl(219, 85%, 26%)'
        notificationNum.innerHTML='0';
        }else{
            element.classList.add("unread");
            makeAllRead.innerHTML='Make all as read';
            makeAllRead.style.color='hsl(219, 12%, 42%)';
            notificationNum.innerHTML='3';

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
    
    

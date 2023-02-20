const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open")
})


// const NavSwitcherToggle = document.querySelector(".Nav-switcher-toggler");
// NavSwitcherToggle.addEventListener("click",()=>{
//     document.querySelector(".nav-switcher").classList.toggle("open")
// })

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open"); 
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    
    alternateStyles.forEach((style)=>{

        if(color === style.title){
            style.removeAttribute('disabled');
        }
        else{
            style.setAttribute("disabled","true");
        }
    }
    )
}
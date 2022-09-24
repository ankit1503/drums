var numOfDrum = document.querySelectorAll(".drum").length;

for(i=0;i<numOfDrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
       var buttonText=this.innerHTML;
       makeSound(buttonText);
       pressKeyFun(buttonText);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    pressKeyFun(event.key);
})
function makeSound(key)
{
    var audio ;
       switch(key)
       {
        case "w":
             audio =new Audio("sounds/tom-1.mp3");
           break;
           case "a":
            audio =new Audio("sounds/tom-2.mp3");
          break;
          case "s":
            audio =new Audio("sounds/tom-3.mp3");
          break;
          case "d":
            audio =new Audio("sounds/tom-4.mp3");
          break;
          case "j":
            audio =new Audio("sounds/crash.mp3");
          break;
          case "k":
            audio =new Audio("sounds/snare.mp3");
          break;
          case "l":
            audio =new Audio("sounds/kick-bass.mp3");
          break;
          default:
            audio =new Audio("sounds/kick-bass.mp3");
          
       }
       audio.play(); 
}

function pressKeyFun(key)
{
    var activeButton= document.querySelector("."+key);
   
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
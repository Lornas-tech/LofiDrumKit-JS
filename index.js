
//detects button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
 
 var buttonInnerHTML = this.innerHTML;
 
 makeSound(buttonInnerHTML);
 
});

}

//detects keyboard press

document.addEventListener("keypress", function(event) {

makeSound(event.key);

});

function makeSound(key) { 

   switch (key) {
   case "w":
     var audio = new Audio('sounds/lofikick.mp3');
audio.play();
     break;
 
      case "a": 
      var audio = new Audio('sounds/lofisnare.mp3');
audio.play();
      break;

      case "s":
        var audio = new Audio('sounds/lofihihat.mp3');
audio.play();
      break;

      case "d":
        var audio = new Audio('sounds/lofishaker.mp3');
audio.play();
        break;

      case "j": 
        var audio = new Audio('sounds/lofikeys3.mp3');
audio.play();
        break; 
   default:
   
 }
};
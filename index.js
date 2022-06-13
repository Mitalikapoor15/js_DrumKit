var numberOfButtons = document.querySelectorAll(".drum").length;  //to determine the number of buttons that need to be clicked.

for (i=0; i<numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });   //event listener will note whenever a button gets clicked.

} //looping so as to incorporate multiple buttons
  // otherwise querySelectorAll needs to be specified for
  //each and every element of the button array.

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
                  break;
    case "d":
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
                  break;
    case "j":
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
                  break;
    case "k":
      var kick = new Audio ("sounds/kick-bass.mp3");
      kick.play();
                  break;
    case "l":
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
                  break;
    default:
    console.log("Wrong key was pressed.");

} //always add break statements!!!
}


//Adding animations to the buttons using timeout method...
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

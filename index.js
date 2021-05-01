function makeSound(key)
{
  switch (key)
  {
    case "w":
      var tom1 = new Audio("https://github.com/dhiren-rajesh/Basic-Drum-Kit/blob/main/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("https://github.com/dhiren-rajesh/Basic-Drum-Kit/blob/main/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("https://github.com/dhiren-rajesh/Basic-Drum-Kit/blob/main/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("https://github.com/dhiren-rajesh/Basic-Drum-Kit/blob/main/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("https://github.com/dhiren-rajesh/Basic-Drum-Kit/blob/main/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("https://github.com/dhiren-rajesh/Basic-Drum-Kit/blob/main/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("https://github.com/dhiren-rajesh/Basic-Drum-Kit/blob/main/kick-bass.mp3");
      kick.play();
      break;
    default : console.log(key);
  }
}
function buttonAnimation(currentKey)
{
  var ck= document.querySelector("."+currentKey);
  ck.classList.add("pressed");
  setTimeout(function(){ck.classList.remove("pressed");}, 100);
}
function handleClick()
{
  var bih = this.innerHTML;
  makeSound(bih);
  buttonAnimation(bih);
}
function handleKey(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
}
for(var i=0; i<(document.querySelectorAll(".drum").length);i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
document.addEventListener("keypress", handleKey);

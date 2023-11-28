const handleKeyboardInput = (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
};

const handleClick = (event) => {
  makeSound(event.srcElement.innerHTML);
  buttonAnimation(event.srcElement.innerHTML);
};

const makeSound = (event) => {
  switch (event) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();

      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();

      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();

      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();

      break;
    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();

      break;
    case "l":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();

      break;
    default:
      break;
  }
};

const elements = document.querySelectorAll(".drum");

elements.forEach((element) => {
  element.addEventListener("click", handleClick);
});

document.addEventListener("keypress", handleKeyboardInput);

const buttonAnimation = (currentKey) => {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
};

const moveByArrows = (e) => {
    switch(e.key) {
      case "ArrowLeft": 
      moveLeft();
      block.style.transform = "translateX(" + x + "px)";
      break;
      case "ArrowRight": 
      moveRight();
      block.style.transform = "translateX(" + x + "px)";
      break;
    }
  }
  addEventListener("keydown", moveByArrows);
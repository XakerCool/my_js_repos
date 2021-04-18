
window.addEventListener("load", () => {

  const button_left__tooltip = $("span", { className: "button_tooltip button_left__tooltip" });
  const button_right__tooltip = $("span", { className: "button_tooltip button_right__tooltip" });

  button_left__tooltip.innerText = "Prev slide";
  button_right__tooltip.innerText = "Next slide";

  const button_left = $("div", {
    className: "button button_left"
  }, button_left__tooltip);
  const button_right = $("div", {
    className: "button button_right"
  }, button_right__tooltip);


  const buttons_container = $("div", { className: "buttons" }, button_left, button_right);

  const slider = Slider.fromData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], createSlide);
  

  const sliderContainer = $("div", { className: "slider_content", tabindex: 0 });
  document.body.querySelector(".slider").append(buttons_container);
  sliderContainer.tabIndex = 0;
  document.body.querySelector(".slider").append(sliderContainer);
  console.log(sliderContainer.attributes);
  slider.appendTo(sliderContainer);

  button_left.addEventListener("click", () => {
    slider.prevSlide();
  });

  button_right.addEventListener("click", () => {
    slider.nextSlide();
  });

  let isSpacePressed = false;
  let delayedLeftPress = null;
  let delayedRightPress = null;
  let isAltPressed = false;
  let getIndexDelay = null;

  let slideIndexStr = "";

  // Клавиша отпущенаp
  sliderContainer.addEventListener("keyup", (event) => {
    const getUserIndex = (num) => {
      if (isAltPressed) {
        slideIndexStr += num;
      }
    }
    switch (event.code) {
      case "ArrowLeft": {

        if (event.ctrlKey || isSpacePressed) {
          slider.firstSlide()
        } else if (delayedLeftPress === null) {
          delayedLeftPress = setTimeout(() => {
            slider.prevSlide();
            delayedLeftPress = null;
          }, 200);
        } else {
          clearTimeout(delayedLeftPress);
          delayedLeftPress = null;
          slider.firstSlide();
        }

      } break;

      case "ArrowRight": {
        
        if (event.ctrlKey || isSpacePressed) {
          slider.lastSlide()
        } else if (delayedRightPress === null) {
          delayedRightPress = setTimeout(() => {
            slider.nextSlide();
            delayedRightPress = null;
          }, 200);
        } else {
          clearTimeout(delayedRightPress);
          delayedRightPress = null;
          slider.lastSlide();
        }

        event.preventDefault();
      } break;
      
      case "Space": {
        isSpacePressed = false;
        event.preventDefault();
      } break;
      case "AltLeft": {
        isAltPressed = false;
        event.preventDefault();
        
        clearTimeout(getIndexDelay);
        getIndexDelay = null;
        slider.goToSlide(parseInt(slideIndexStr));

        console.log(slideIndexStr);
        slideIndexStr = "";
      } break;
      case "AltRight": {
        isAltPressed = false;
        event.preventDefault();

        clearTimeout(getIndexDelay);
        getIndexDelay = null;
        slider.goToSlide(parseInt(slideIndexStr));

        console.log(slideIndexStr);
        slideIndexStr = "";
      } break;


      case "Digit1": {
        getUserIndex(1);
        event.preventDefault;
      } break;
      case "Digit2": {
        getUserIndex(2);
        event.preventDefault;
      } break;
      case "Digit3": {
        getUserIndex(3);
        event.preventDefault;
      } break;
      case "Digit4": {
        getUserIndex(4);
        event.preventDefault;
      } break;
      case "Digit5": {
        getUserIndex(5);
        event.preventDefault;
      } break;
      case "Digit6": {
        getUserIndex(6);
        event.preventDefault;
      } break;
      case "Digit7": {
        getUserIndex(7);
        event.preventDefault;
      } break;
      case "Digit8": {
        getUserIndex(8);
        event.preventDefault;
      } break;
      case "Digit9": {
        getUserIndex(9);
        event.preventDefault;
      } break;
      case "Digit0": {
        getUserIndex(0);
        event.preventDefault;
      } break;

      case "Numpad1": {
        getUserIndex(1);
        event.preventDefault;
      } break;
      case "Numpad2": {
        getUserIndex(2);
        event.preventDefault;
      } break;
      case "Numpad3": {
        getUserIndex(3);
        event.preventDefault;
      } break;
      case "Numpad4": {
        getUserIndex(4);
        event.preventDefault;
      } break;
      case "Numpad5": {
        getUserIndex(5);
        event.preventDefault;
      } break;
      case "Numpad6": {
        getUserIndex(6);
        event.preventDefault;
      } break;
      case "Numpad7": {
        getUserIndex(7);
        event.preventDefault;
      } break;
      case "Numpad8": {
        getUserIndex(8);
        event.preventDefault;
      } break;
      case "Numpad9": {
        getUserIndex(9);
        event.preventDefault;
      } break;
      case "Numpad0": {
        getUserIndex(0);
        event.preventDefault;
      } break;
    }

  });


  sliderContainer.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Space": {
        isSpacePressed = true;
        event.preventDefault();
      } break;
      case "AltLeft": {
        isAltPressed = true;

        if (getIndexDelay === null) {
          getIndexDelay = setTimeout(() => {
            getIndexDelay = null;
            isAltPressed = false;
            slider.goToSlide(parseInt(slideIndexStr));
          }, 1000);
        }

        event.preventDefault();
      } break;
      case "AltRight": {
        isAltPressed = true;

        if (getIndexDelay === null) {
          getIndexDelay = setTimeout(() => {
            getIndexDelay = null;
            isAltPressed = false;
            slider.goToSlide(parseInt(slideIndexStr));
          }, 1000);
        }

        event.preventDefault();
      } break;
    }
  });

//   sliderContainer.addEventListener("mouseleave", (event) => {
//     slider.stop();
//   });

  
//   sliderContainer.addEventListener("mousemove", (event) => {
//     const left = sliderContainer.offsetLeft;
  
//     const halfWidth = sliderContainer.offsetWidth / 2;

//     const center = left + halfWidth;

//     const dx = event.pageX - center; 

//     slider.play(
//       Math.sign(dx), 
//       ((halfWidth - Math.abs(dx)) / halfWidth) * 2000 + 200
//     );
//   });


  slider.goToSlide(0);
});


const createSlide = (index) => {
  return $("div", { 
      className: "slide__content", 
      style: {
        width: 100 + "%",
        height: 100 + "%",
      }
    }, 
    $("img", {
      className: "slide__content_img",
      src: "Images/" + index + ".jpg" 
    })
  );
}
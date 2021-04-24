

const mock = () => {
  let sections = createArray(index => [
    $("h1", {}, "Header " + (index + 1)),
    $("section", {
      style: {
        height: randomInt(200, 1000) + "px"
      }
    }, $("h2", {}, "Second header of header " + (index + 1)))
  ]) (7);

  document.body.append(...sections.flat());

};

// 1. Прогесс бар 
// 2. Дозагрузка контента
// 3. Паралакс
window.addEventListener("load", () => {

  // mock();

  const documentWidth = document.body.offsetWidth;
  const documentHeight = document.body.offsetHeight - window.innerHeight;

  const headerPositions = Array.from(document.querySelectorAll("h1")).map(element => element.offsetTop);

  const headerContents = Array.from(document.querySelectorAll("h1")).map(element => element.innerText);

  const subtitlePositions = Array.from(document.querySelectorAll("h2")).map(element => element.offsetTop);
  subtitlePositions.forEach(pos => console.log((pos * 100 / documentHeight)));
  const subtitleContents = Array.from(document.querySelectorAll("h2")).map(element => element.innerText);

  console.log(headerPositions, headerContents);

  const checkpoints = headerPositions.map(position => 
    $("div", { 
        className: "progress-bar__checkpoint",
        style: {
          left: (position * 100 / documentHeight) + .5 + "%"
        },
        onclick: () => {
          // window.scrollBy - прокручивает НА Y пикселей от текущей позиции скорла 
          window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
          });
        }
      })
  );

  const subtitleCheckpoints = subtitlePositions.map(position => 
    $("div", { 
      className: "progress-bar__checkpoint subtitle_checkpoint",
      style: {
        left: getCords(position, documentHeight)
      },
      onclick: () => {
        // window.scrollBy - прокручивает НА Y пикселей от текущей позиции скорла 
        window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth"
        });
      }
    })
  );

  let index = 0;
  checkpoints.forEach(checkpoint => {
    checkpoint.append($("div", { className: "checkpoint__tooltip" }, $("span", {}, headerContents[index])));
    
    index++;
  });
  index = 0;
  
  const progressBar = $("div", {
    className: "progress-bar__bar"
  })
  
  const progressContainer = $("div", {
    className: "progress-bar"
  }, progressBar, ...checkpoints, ...subtitleCheckpoints);

  

  document.body.append(progressContainer);

  subtitleCheckpoints.forEach(checkpoint => {
    checkpoint.append($("div", { className: "checkpoint__tooltip" }, $("span", {}, subtitleContents[index])));
    if (checkpoint.offsetLeft > documentWidth / 2) {
      let tooltips = checkpoint.children;
      for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].classList.add("tooltip_left_direction");
        
      }
    }
    index++;
  });
  index = 0;
  checkpoints.forEach(checkpoint => {
    checkpoint.append($("div", { className: "checkpoint__tooltip" }, $("span", {}, headerContents[index])));
    if (checkpoint.offsetLeft > documentWidth / 2) {
      let tooltips = checkpoint.children;
      for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].classList.add("tooltip_left_direction");
        
      }
    }
    index++;
  });
  // const debouncedHandler = debounce((event) => {
  //   document.body.style.backgroundColor = "hsl(" + randomInt(0, 359) + ", 100%, 80%)";

  //   console.log(event, window.scrollX, window.scrollY);
  // }) (500);


  const throttledHandler = throttle(() => {
    
    let lastIndex = headerPositions.findIndex(position => window.scrollY < position);
    if (lastIndex < 0) {
      lastIndex = checkpoints.length;
    }


    checkpoints.forEach((checkpoint, index) => {
      if (index < lastIndex) {
        checkpoint.classList.add("progress-bar__checkpoint_active");
      } else {
        checkpoint.classList.remove("progress-bar__checkpoint_active");
      }
    })


    console.log(window.scrollY, document.body.offsetHeight - window.innerHeight);

    progressBar.style.width = (window.scrollY * 100 / (document.body.offsetHeight - window.innerHeight)) + "%";


    // document.body.style.backgroundColor = "hsl(" + randomInt(0, 359) + ", 100%, 80%)";

    // console.log(event, window.scrollX, window.scrollY);
  }) (100);

  window.addEventListener("scroll", throttledHandler);

  // window.addEventListener("mousewheel", (event) => {
  //   console.log(event);
  // });

});

const getCords = (position, documentHeight) => {
  let pos = (position * 100 / documentHeight);
  if (pos > 100) {
    pos = 99;
  }
  return pos + .5 +  "%";
}
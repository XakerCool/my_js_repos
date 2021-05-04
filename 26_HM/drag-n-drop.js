let container = null;
let currentItem = null;
let currentPlaceholder = null;
let placeholderIndex = 0;
let innerX = 0;
let innerY = 0;


window.addEventListener("load", () => {

  container = $("div", {
    className: "drag-n-drop"
  },
    ...createArray(createItem)(7)
  );

  document.body.append(container);

  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("mousemove", drag);

});

const createItem = (index) => {
  const item = $("div", { 
      className: "drag-n-drop__item",
      dataset: {
        index
      },
      onmousemove: dragOver,
    }
  )
  const content = $("div", { 
      className: "drag-n-drop__content",
      onmousedown: startDrag(item),
    }, index);

  item.append(content);
  return item;
}


const createPlacehodler = (height, width, index) => {
  const item = $("div", { 
      className: "drag-n-drop__placeholder",
      style: {
        width: width + "px",
        height: height + "px",
      }

    }
  )
  const content = $("div", { 
      className: "drag-n-drop__placeholder-content ",
    });

  item.append(content);

  return item;
}



const startDrag = (item) => (event) => {
  currentItem = item;
  
  const width = currentItem.offsetWidth;
  const height = currentItem.offsetHeight;
  currentPlaceholder = createPlacehodler(height, width);
  placeholderIndex = currentItem.dataset.index;
  
  innerX = item.offsetLeft - event.pageX;
  innerY = item.offsetTop - event.pageY;

  console.log(innerX);
  
  currentItem.style.width = width + "px";
  currentItem.style.height = height + "px";
  
  currentItem.classList.add("drag-n-drop__item_dragging");



  container.insertBefore(currentPlaceholder, currentItem);
  
  // console.log(item, event);

  
  let x = event.pageX + innerX;
  let y = event.pageY + innerY;

  
  currentItem.style.transform = "translate(" + x + "px," + y + "px)";
}

const drag = (event) => {
  
  if (currentItem === null) {
    return;
  } 
  
  event.preventDefault(); // чтобы выключить выделение текста

  let x = event.pageX + innerX;
  let y = event.pageY + innerY;


  const itemPadding = parseInt(getComputedStyle(currentItem).padding); //падинг
  const itemCords = {
    left: currentItem.getBoundingClientRect().left,
    top: currentItem.getBoundingClientRect().top
  }; // просто корды

  let trueItemCords = { //корды с учётом падингов
    left: itemCords.left + itemPadding,
    top: itemCords.top + itemPadding,
  };
  let containerCords = { // корды контейнера
    left: container.offsetLeft,
    top: container.offsetTop,
  };

  
  // if(trueItemCords.left > containerCords.left
  //   & (currentItem.clientWidth - itemPadding) + itemCords.left <= containerCords.left + container.clientWidth
  //   & trueItemCords.top >= containerCords.top
  //   & (currentItem.clientHeight - itemPadding) + itemCords.top <= containerCords.top + container.clientHeight) {
  //   currentItem.style.transform = "translate(" + x + "px," + y + "px)";
  // } else {
  //   currentItem.style.transform = "translate(" + x - 10 + "px," + y - 10 + "px)";
  // }

  const combineHorizontAndVertical = () => {
    if (y < containerCords.top - itemPadding) {
      y = containerCords.top - itemPadding - 1;
      currentItem.style.transform = "translate(" + x + "px," + y + "px)";
    } else if (y + (currentItem.clientHeight - (itemPadding * 2)) > (containerCords.top + container.clientHeight) - itemPadding) {
      y = (containerCords.top + container.clientHeight) - (currentItem.clientHeight - (itemPadding * 2)) - itemPadding - 1;
      currentItem.style.transform = "translate(" + x + "px," + y + "px)";
    } else {
      currentItem.style.transform = "translate(" + x + "px," + y + "px)";
    }
  }

  if (x < containerCords.left - itemPadding) {//левый край
    x = containerCords.left - itemPadding + 1;
    combineHorizontAndVertical();
  } else if (x + (currentItem.clientWidth - (itemPadding * 2)) > (containerCords.left + container.clientWidth) - itemPadding) {//правый край
    x = containerCords.left + itemPadding - 1;
    combineHorizontAndVertical();
  } else if (y < containerCords.top - itemPadding) {//верх
    y = containerCords.top - itemPadding - 1;
    currentItem.style.transform = "translate(" + x + "px," + y + "px)";
  } else if (y + (currentItem.clientHeight - (itemPadding * 2)) > (containerCords.top + container.clientHeight) - itemPadding) {//низ
    y = (containerCords.top + container.clientHeight) - (currentItem.clientHeight - (itemPadding * 2)) - itemPadding - 1;
    currentItem.style.transform = "translate(" + x + "px," + y + "px)";
  } else {
    currentItem.style.transform = "translate(" + x + "px," + y + "px)";
  }

  

}

const dragOver = (event) => {
  if (currentItem === null) {
    return;
  }

  const item = event.currentTarget;
  const itemIndex = item.dataset.index;
  // console.log(placeholderIndex, item.dataset.index);

  if (itemIndex < placeholderIndex) {
    container.insertBefore(currentPlaceholder, item);
    placeholderIndex = item.dataset.index;
  } else {
    container.insertBefore(currentPlaceholder, item.nextSibling);
    placeholderIndex = item.dataset.index + 1;
  }

  // console.log(item, currentPlaceholder);

}

const stopDrag = (event) => {
  if (currentItem === null) {
    return;
  }

  innerX = 0;
  innerY = 0;
  currentItem.classList.remove("drag-n-drop__item_dragging");
  currentItem.style.transform = null;

  currentItem.style.width = null;
  currentItem.style.height = null;
  
  container.insertBefore(currentItem, currentPlaceholder);
  currentPlaceholder.remove();
  placeholderIndex = 0;
  
  Array.from(container.children).forEach((item, index) => {
    item.dataset.index = index;
  });
  
  currentItem = null;
  currentPlaceholder = null;
}
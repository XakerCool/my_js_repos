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
    right: currentItem.getBoundingClientRect().right, 
    left: currentItem.getBoundingClientRect().left,
    top: currentItem.getBoundingClientRect().top,
    bottom: currentItem.getBoundingClientRect().bottom
  }; // просто корды

  let trueItemCords = { //корды с учётом падингов
    right: itemCords.right - itemPadding, 
    left: itemCords.left + itemPadding,
    top: itemCords.top + itemPadding,
    bottom: itemCords.bottom - itemPadding
  };
  let containerCords = { // корды контейнера
    right: container.getBoundingClientRect().right,
    left: container.getBoundingClientRect().left,
    top: container.getBoundingClientRect().top,
    bottom: container.getBoundingClientRect().bottom,
  };

  // console.log("right ", trueItemCords.right, containerCords.right);
  // console.log("left ", trueItemCords.left, containerCords.left);
  // console.log("top ", trueItemCords.top, containerCords.top);
  // console.log("bottom ", trueItemCords.bottom, containerCords.bottom);
  
  if(trueItemCords.right <= containerCords.right
    & trueItemCords.left >= containerCords.left
    & trueItemCords.top >= containerCords.top
    & trueItemCords.bottom <= containerCords.bottom) {
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
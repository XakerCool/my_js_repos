/**
 * 
 * @param {*} tag 
 * @param {*} attributes 
 * @param  {...any} children 
 * @returns {HTMLElement}
 */
const $ = (tag, attributes = {}, ...children) => {
    const element = document.createElement(tag);
  
    Object.entries(attributes)
      .forEach(([key, value]) => {
        if (key === "style") {
          Object.entries(value).forEach(([cssKey, cssValue]) => {
            element.style[cssKey] = cssValue;
          });
        } else if (key.startsWith("on")) {
          element.addEventListener(key.slice(2), value);
        } else if(key === "dataset") {
          Object.entries(value).forEach(([dataKey, dataValue]) => {
            element.dataset[dataKey] = dataValue;
          });
        }else {
          element[key] = value;
        }
  
      });
  
    element.append(...children);
  
  return element;
}

// throttle
// Выполнять обработчик не чаще чем раз в N ms
const throttle = func => delay => {
  let timerId = null;

  return (...args) => {
    if (timerId === null) {
      // func(...args);
      timerId = setTimeout(() => {
        timerId = null;
        func(...args);
      }, delay);
    }
  };
}
const $fetch = async (url, method = "GET", body = null) => {
  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null
  }); 

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    return response.status + " " + response.statusText;
  }
}
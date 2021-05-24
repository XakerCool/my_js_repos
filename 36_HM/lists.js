const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));
  
const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

const createRandomArray = (min, max) => 
  createArray(() => randomInt(min, max));
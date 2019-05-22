var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

<<<<<<< HEAD
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
=======
destructivelyRemoveElementFromEndOfArray(array){
>>>>>>> d76d8124fcc128f304fbc606fffc1085e5afb7ba
  array.pop();
  return array;
}

<<<<<<< HEAD
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
=======
// function removeElementFromBeginningOfArray(array){
//   array.shift();
//   return array;
// }
>>>>>>> d76d8124fcc128f304fbc606fffc1085e5afb7ba

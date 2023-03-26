const arrayElementSwapper = (array, indexOne, indexTwo) => {
  if (isNaN(indexOne) || isNaN(indexTwo)) {
    return "Indices should be of type number";
  } else {
    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
    return array;
  }
};

console.log(arrayElementSwapper([1, 2, 3, 4, 5], "one", 0));

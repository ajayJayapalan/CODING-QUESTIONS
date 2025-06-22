const mergeSortedArray = (arr1, arr2) => {
  const arr3 = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arr3.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr3.push(arr2[j]);
    j++;
  }

  arr1 = arr3.slice(0, arr1.length);
  arr2 = arr3.slice(arr1.length);

  return { arr1, arr2 };
};

const mergeSortedArray2 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let j = 0;
    if (arr1[i] > arr2[j]) {
      let temp = arr1[i];
      arr1[i] = arr2[j];
      arr2[j] = temp;
      while (j < arr2.length - 1) {
        if (arr2[j] < arr2[j + 1]) {
          break;
        } else {
          let temp = arr2[j];
          arr2[j] = arr2[j + 1];
          arr2[j + 1] = temp;
        }
        j++;
      }
    }
  }

  return { arr1, arr2 };
};

console.log(mergeSortedArray([1, 4, 8, 10], [2, 3, 9]));
console.log(mergeSortedArray2([1, 4, 8, 10], [2, 3, 9]));

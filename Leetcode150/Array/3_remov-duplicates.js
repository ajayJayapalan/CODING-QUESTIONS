const removeDupliates = (arr = []) => {
  let k = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[k] !== arr[i]) {
      k++;
      arr[k] = arr[i];
    }
  }

  return [k + 1, arr.slice(0, k + 1)];
};

console.log(removeDupliates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

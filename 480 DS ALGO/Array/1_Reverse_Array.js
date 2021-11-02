let input = [1, 2, 3, 4, 0, -2, 6];
input = "some string";
// 1.
((arr = []) => {
  const temp = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    temp[arr.length - 1 - i] = arr[i];
  }

  console.log(temp);
})(input);

// space: O(n^2) && time : O(n)

// 2.
((arr) => {
  arr = arr.split("");
  const justLowerThanMiddleTerm = Math.ceil((arr.length + 1) / 2) - 1;
  const lenMin = arr.length - 1;
  for (let i = 0; i < justLowerThanMiddleTerm; i++) {
    let temp = arr[i];
    arr[i] = arr[lenMin - i];
    arr[lenMin - i] = temp;
    console.log(arr[i], arr[lenMin - i]);
  }
  arr = arr.join("");
  console.log(arr);
})(input);

// space: O(n) && time : O(n)

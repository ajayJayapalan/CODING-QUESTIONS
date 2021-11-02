/* Fibonacci series upto nth */

// using array
((n) => {
  let arr = [];
  arr.push(0);
  arr.push(1);
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  console.log(arr);
})(10);

// without array
((n) => {
  let a = 0;
  let b = 1;
  let c;
  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
})(10);

// recursion
const fibo = (n) => {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
};

const fiboOfn = (n, i = 0) => {
  if (i === n) return n;
  console.log(fibo(i));
  return fiboOfn(n, ++i);
};

fiboOfn(10);

// loop to recursion.
const fibo2 = (n, a = 0, b = 1, i = 0) => {
  if (i === n) {
    console.log(a + b);
    return (a+b)
  } else {
    if (a === 0 && b === 1) {
      console.log(a);
      console.log(b);
      console.log(a + b);
      i+=3;
    } else {
      console.log(a + b);
    }

    return fibo2(n, b, a + b, ++i);
  }
};

fibo2(10);

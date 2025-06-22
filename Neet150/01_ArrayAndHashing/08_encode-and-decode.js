const encode = (strs = []) => {
  return strs.map((str) => `${str.length}#` + str).join("");
};

const decode = (str) => {
  const output = [];
  const input = str.split("");

  let index = 0;
  while (index < input.length) {
    const length = Number(str[index]);
    const start = index + 2;
    const end = start + length;
    output.push([...input].slice(start, end).join(""));
    index = index + length + 2;
  }

  return output;
};

const values = ["lint", "code", "love", "you"];

const encoded = encode(values);
console.log({ encoded });

const decoded = decode(encoded);
console.log({ decoded });

/* 
{ encoded: '4#lint4#code4#love3#you' }
{ decoded: [ 'lint', 'code', 'love', 'you' ] }
 */

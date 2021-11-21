const displayAsArray = (node, str = "") => {
  let clone = { ...node };
  const nodeArr = [];
  // console.log("===clone===", clone);
  let i = 0;
  while (clone !== null) {
    nodeArr.push(clone.data);
    clone = clone.next;
    i++;
  }
  console.log(str, nodeArr);
};

module.exports = {
  displayAsArray,
};

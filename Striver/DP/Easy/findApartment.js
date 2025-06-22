const findApartment = (blocks = [], requirement = []) => {
  let minDistance = Infinity;
  let minIndex = -1;

  const isFacilityInThisBlock = (key, blockIndex) => blocks[blockIndex][key];

  const findDistanceIfitSatisfies = (fromIndex, currentIndex, reqArr) => {
    for (let i = 0; i < requirement.length; i++) {
      const building = requirement[i];
      if (isFacilityInThisBlock(building, currentIndex)) {
        if (reqArr[i] === false) {
          reqArr[i] = Math.abs(currentIndex - fromIndex);
        }
      }
    }
  };

  const findMaxDistance = (blockIndex) => {
    const req = new Array(requirement.length).fill(false);
    let left = blockIndex - 1;
    let right = blockIndex;

    while (left >= 0 || right < blocks.length) {
      if (!req.includes(false)) break;

      if (left >= 0) {
        findDistanceIfitSatisfies(blockIndex, left, req);
        left--;
      }

      if (right < blocks.length) {
        findDistanceIfitSatisfies(blockIndex, right, req);
        right++;
      }
    }

    return Math.max(...req);
  };

  for (let i = 0; i < blocks.length; i++) {
    const maxDistance = findMaxDistance(i);
    console.log({ maxDistance });
    if (maxDistance < minDistance) {
      minDistance = maxDistance;
      minIndex = i;
    }
  }

  return minIndex;
};

const findApartment2 = (blocks = [], requirement = []) => {};

const blocks = [
  { gym: false, school: true, store: false },
  { gym: true, school: false, store: false },
  { gym: true, school: true, store: false },
  { gym: false, school: true, store: false },
  { gym: false, school: true, store: true },
];

const requirement = ["gym", "store"];

console.log(findApartment(blocks, requirement));

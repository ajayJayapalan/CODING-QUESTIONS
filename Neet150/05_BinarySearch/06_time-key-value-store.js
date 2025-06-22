// question: https://leetcode.com/problems/time-based-key-value-store/
// solution: https://github.com/neetcode-gh/leetcode/blob/main/javascript/0981-time-based-key-value-store.js
class TimeStamp {
  static #store = {};
  /* 
        {
            [key] : [[time1, value1], .... [time_n, value_n]]
        }
    */

  findSetIndex(arr, timestamp) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = (left + right) >> 1;
      let [time, value] = arr[mid];
      if (time < timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }

  findGetIndex(arr, timestamp) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = (left + right) >> 1;
      let [time, value] = arr[mid];
      if (time === timestamp) return mid;
      if (time < timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left - 1;
  }

  setValue(key, value, timestamp) {
    let arr = TimeStamp.#store[key] ?? [];
    const index = this.findSetIndex(arr, timestamp);

    arr = [...arr.slice(0, index), [timestamp, value], ...arr.slice(index)];
    TimeStamp.#store[key] = arr;
  }

  getValue(key, timestamp) {
    let arr = TimeStamp.#store[key];
    const index = this.findGetIndex(arr, timestamp);
    const result = arr[index];

    // console.log({ arr, index, result });
    console.log(result, "for", timestamp);
    return result;
  }
}

const timeStamp = new TimeStamp();
timeStamp.setValue("foo", "bar", 1);
timeStamp.getValue("foo", 1);
timeStamp.getValue("foo", 3);
timeStamp.getValue("foo", 5);
timeStamp.setValue("foo", "bar2", 4);
timeStamp.getValue("foo", 4);
timeStamp.getValue("foo", 7);
timeStamp.getValue("foo", 5);
timeStamp.getValue("foo", 3);

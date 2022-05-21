const theNumber = 380;
const arr = () => {
  const arr = [];
  for (let i = 1; i <= 1000; i++) {
    arr.push(i);
  }
  return arr;
};

// simple search
console.time("simple search O(n)");
for(let i = 0; i < arr().length; i++) {
  if(arr()[i] === theNumber) {
    console.log(`${arr()[i]} is the number, it is at ${i}. element of array`);
  }
}
console.timeLog("simple search O(n)");

// binary search
console.time("binary search O(log n)");
let recursiveFunc = (arr, x, start, end) => {
  if (start > end) return false;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) {
    return `${x} is the number, it is at ${mid}. element of array`;
  }

  if ( x > arr[mid] ) {
    return recursiveFunc(arr, x, mid + 1, end);
  } else {
    return recursiveFunc(arr, x, start, mid - 1);
  }

}
console.log(recursiveFunc(arr(), theNumber, 0, arr().length - 1));
console.timeLog("binary search O(log n)");
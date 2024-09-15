let arr = [210, 1000, 4, 500, 17, 301, 15];
let max = 0;
let sec = 0;
let th = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    th = sec;
    sec = max;
    max = arr[i];
  } else if (sec < max && sec < arr[i]) {
    th = sec;
    sec = arr[i];
  } else if (th < sec && th < arr[i]) {
    th = arr[i];
  }
}

console.log(max);
console.log(sec);
console.log(th);

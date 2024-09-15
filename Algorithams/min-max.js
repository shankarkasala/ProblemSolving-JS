let arr = [16,8,3,9]

//solution-1
let min = Math.min(...arr)
let max = Math.max(...arr)

console.log(min,max)

//solution-2
let m = Infinity

for(let i = 0; i < arr.length; i++) {
  if(m > arr[i]) {
    m = arr[i]
  }
}

console.log(m)
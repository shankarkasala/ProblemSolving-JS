let arr = [1,2,3,4,5,6,7,8,9]

//solution-1
let sum = arr.reduce((acc,cur) =>acc + cur)
console.log(sum)

//solution-2
let ans = 0

for(let i = 0; i<= arr.length; i++) {
  ans += i
}
console.log(ans)
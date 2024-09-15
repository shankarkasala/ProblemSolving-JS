let d = '3467'

//solution-1
let sol = d.split('').reduce((acc,cur) => Number(acc) + Number(cur))
console.log(sol)

//solution-2
function digitSum(num) {
  if(Number(num)) {
    return num % 10 + digitSum(Math.floor(Number(num) / 10))
  } else return 0
}

let res = digitSum(d)
console.log(res)
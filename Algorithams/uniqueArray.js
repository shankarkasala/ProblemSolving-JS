let arr = [1,2,9,2,3,9,4,3,1,4,5]

//solution-1
let res = arr.filter((res,i) => arr.indexOf(res) !== i)
console.log(res)

//solution-2
let obj = {}
let sol = []
arr.map(res => {
  if(!obj[`${res}`]) {
    obj[`${res}`] = res
    sol.push(res)
  }
})

console.log(sol)
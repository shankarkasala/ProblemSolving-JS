let arr = [1,2,2,9,2,3,9,4,3,1,4,5]

let obj = {}
arr.map(res => {
  if(!obj[`${res}`]) {
    obj[`${res}`] = 1
  } else {
    obj[`${res}`] += 1
  }
})

console.log(obj)
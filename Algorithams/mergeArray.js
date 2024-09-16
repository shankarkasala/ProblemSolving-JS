let arr1 = [3,2,5,3,4]

let arr2 = [9,1,8,0,7]

let res = [...arr1]

for(let i = 1; i < arr2.length; i++) {
  res.push(arr2[i])
}
console.log(res)

let sol =[...new Set([...arr1, ...arr2])]
console.log(sol)

let ans = [...arr1, ...arr2]
console.log(ans)

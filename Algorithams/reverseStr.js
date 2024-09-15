let str = 'hello'

//solution-1
let rev = str.split('').reverse().join('')
console.log(rev)

//solution-2
let sp = str.split('')
let res = []

for(let i = sp.length - 1; i>=0; i--) {
  res.push(sp[i])
}
console.log(res.join(''))
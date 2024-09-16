let str = 'hello javascript welcome javascriptjavascript';

let s1 = str.split(' ');
let ans = '';
for (let i = 0; i < s1.length - 1; i++) {
  let j = i + 1;
  let l1 = s1[i].split('').length;
  let l2 = s1[j].split('').length;
  if (l1 < l2) {
    ans = s1[i + 1];
  }
}

console.log(ans);

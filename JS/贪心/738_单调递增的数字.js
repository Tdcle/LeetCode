var monotoneIncreasingDigits = function(n) {
  if(n<10) return n
  let num = []
  while(n>0){
    num.push(n%10)
    n = Math.floor(n/10)
  }
  num.reverse()
  let res=0, num_equal = 0
  for(let i=0; i<num.length-1; i++){
    if(num[i+1]>num[i]){
      for(let j=0;j<=num_equal;j++){
        res = res*10 + num[i]
      }
      num_equal = 0
    }
    else if (num[i+1]<num[i]){
      res = res*10 + num[i]-1
      for(let j=i+1-num_equal;j<num.length;j++){
        res = res*10 + 9
      }
      return res
    }
    else{
      num_equal++
    }
  }
  for(let i=0;i<=num_equal;i++){
    res = res*10 + num[num.length-1]
  }
  return res
};

// var monotoneIncreasingDigits = function(n) {
//     n = n.toString()
//     n = n.split('').map(item => {
//         return +item
//     })
//     let flag = Infinity
//     for(let i = n.length - 1; i > 0; i--) {
//         if(n [i - 1] > n[i]) {
//             flag = i
//             n[i - 1] = n[i - 1] - 1
//             n[i] = 9
//         }
//     }

//     for(let i = flag; i < n.length; i++) {
//         n[i] = 9
//     }

//     n = n.join('')
//     return +n
// };

console.log(monotoneIncreasingDigits(1000000000))
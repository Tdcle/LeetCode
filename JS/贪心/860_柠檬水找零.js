var lemonadeChange = function(bills) {
    let pockets = {
      5:0,
      10:0,
      20:0,
    }
    for(let i=0; i<bills.length; i++){
      if(bills[i] ===5){
        pockets[5]++
      }
      else if(bills[i] === 10){
        if(pockets[5] < 1) return false
        else{
          pockets[5]--
          pockets[10]++
        }
      }
      else{
        let ten = 15
        if(pockets[10]>0){
          pockets[10]--
          if(pockets[5] <1) return false
          else{
            pockets[5]--
            pockets[20]++
          }
        }
        else{
          if(pockets[5] < 3) return false
          else{
            pockets[5] -= 3
            pockets[20]++
          }
        }
      }
    }
    return true
};
console.log(lemonadeChange([5,5,5,10,20]))
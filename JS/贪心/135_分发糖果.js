var candy = function(ratings) {
  if(ratings.length === 1) return 1
  let results = ratings.length
  let up = 0, down = 0, pre = Infinity
  for(let i=1; i<ratings.length; i++){
    if(ratings[i]<ratings[i-1]){
      if(up > 0){
        pre = up
        up = 0
      }
      else{
        down++
        results += down
        if(down >= pre) results ++
      } 
    }
    else if(ratings[i]>ratings[i-1]){
      down = 0
      pre = 0
      up++
      results += up
    }
    else{
      up = 0
      down = 0
      pre = Infinity
    }
  }
  return results
};
console.log(candy([1,3,2,2,1]))
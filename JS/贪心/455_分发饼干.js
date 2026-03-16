var findContentChildren = function(g, s) {
  g.sort((a,b)=>a-b)
  s.sort((a,b)=>a-b)
  let index = 0
  for(let i=0; i<=s.length; i++){
    if(index >= g.length) break
    if(g[index]<=s[i]){
      index++
    }
  }
  return index
};

console.log(findContentChildren([1,2,3], [1,1])); // 1
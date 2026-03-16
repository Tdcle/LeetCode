var generateParenthesis = function(n) {
    const res = [];
    function dfs(path, numL, numR){
        if(path.length === 2*n){
            res.push(path)
        }
        if(numL < n){
            dfs(path+'(', numL+1, numR)
        }
        if(numR < numL){
            dfs(path+')', numL, numR+1)
        }
    }
    dfs('', 0, 0)
    return res;
};
console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) // ["()"]
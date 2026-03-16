var backspaceCompare = function(s, t) {
    const init_string = (S) => {
        let s_arr = S.split('');
        let slow = 0
        for(let i=0; i<s_arr.length; i++){
            if(s_arr[i] === '#'){
                if(slow !== 0){
                    slow--
                }
            }else{
                s_arr[slow] = s_arr[i]
                slow++
            }
        }
        return s_arr.slice(0,slow).join('')
    }
    init_s = init_string(s)
    init_t = init_string(t)
    if(init_s === init_t)   return true
    return false
};

s = "ab#c"
t = "ad#c"
console.log(backspaceCompare(s, t))

// 还可以用栈
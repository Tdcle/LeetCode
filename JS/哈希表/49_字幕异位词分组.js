var groupAnagrams = function(strs) {
    let ans = []
    let map = new Map()
    for(let str of strs){
        let s = str.split("").sort().join("")
        if(map.has(s)){
            ans[map.get(s)].push(str) 
        }else{
            map.set(s, ans.length)
            ans.push([str])
        }
    }
    return ans
};
strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))


// 由于互为字母异位词的两个字符串包含的字母相同，因此两个字符串中的相同字母出现的次数一定是相同的，故可以将每个字母出现的次数使用字符串表示，作为哈希表的键。

// 由于字符串只包含小写字母，因此对于每个字符串，可以使用长度为 26 的数组记录每个字母出现的次数。需要注意的是，在使用数组作为哈希表的键时，不同语言的支持程度不同，因此不同语言的实现方式也不同。

// var groupAnagrams = function(strs) {
//     const map = new Object();
//     for (let s of strs) {
//         const count = new Array(26).fill(0);
//         for (let c of s) {
//             count[c.charCodeAt() - 'a'.charCodeAt()]++;
//         }
//         map[count] ? map[count].push(s) : map[count] = [s];
//     }
//     return Object.values(map);
// };

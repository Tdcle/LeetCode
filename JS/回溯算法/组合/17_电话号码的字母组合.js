var letterCombinations = function(digits) {
    if (!digits) return [];
    const map = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ]);
    let result = [];
    const dfs = (arr, idx) => {
        if (arr.length === digits.length) {
            result.push(arr.join(''));
            return;
        }
        let str = map.get(digits[idx]);
        for (let j = 0; j < str.length; j++) {
            arr.push(str[j]);
            dfs(arr, idx + 1);
            arr.pop();
        }
    };
    dfs([], 0);
    return result;
};
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
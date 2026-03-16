var rotate = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for(let i=0; i<Math.floor(m/2); i++){
        for(let j=i; j<n-1-i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[m-1-j][i];
            matrix[m-1-j][i] = matrix[m-1-i][n-1-j];
            matrix[m-1-i][n-1-j] = matrix[j][n-1-i];
            matrix[j][n-1-i] = temp;
        }
    }
    return matrix;
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
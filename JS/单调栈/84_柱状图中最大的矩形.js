var largestRectangleArea = function(heights) {
    let minLeft = new Array(heights.length).fill(-1)
    let minRight = new Array(heights.length).fill(heights.length)
    let stack = []
    for(let i=0; i<heights.length; i++){
        let t = i-1
        while(t>=0 && heights[t]>=heights[i]){
            t = minLeft[t]
        }
        minLeft[i] = t
    }
    for(let i=heights.length-1; i>=0; i--){
        let t = i+1
        while(t<heights.length && heights[t]>=heights[i]){
            t = minRight[t]
        }
        minRight[i] = t
    }
    let maxArea = 0
    for(let i=0; i<heights.length; i++){
        maxArea = Math.max(maxArea, heights[i]*(minRight[i]-minLeft[i]-1))
    }
    return maxArea
};
console.assert(largestRectangleArea([2,1,5,6,2,3]));
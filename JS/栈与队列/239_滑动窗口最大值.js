var maxSlidingWindow = function(nums, k) {
    var myqueue = function(){
        this.queue = []
    }
    myqueue.prototype.push = function(x){
        while(this.queue.length && x > this.queue[this.queue.length-1]){
            this.queue.pop()
        }
        this.queue.push(x)
    }
    myqueue.prototype.pop = function(x){
        if(x === this.queue[0]) this.queue.shift()
    }
    myqueue.prototype.front = function(){
        return this.queue[0]
    }
    let q = new myqueue()
    let left = 0,right = k-1
    let res = []
    for(let i=0; i<k; i++){
        q.push(nums[i])
    }
    res.push(q.front())
    while(right < nums.length-1){
        q.pop(nums[left])
        left++
        right++
        q.push(nums[right])
        res.push(q.front())
    }
    return res
};

nums = [1,3,-1,-3,5,3,6,7]
console.log(maxSlidingWindow(nums, 3))
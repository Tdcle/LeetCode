var MyStack = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size = this.queue.length
    while(size --> 1){
        this.queue.push(this.queue.shift())
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let x = this.pop()
    this.queue.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length
};

var obj = new MyStack()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
console.log(param_2,param_3,param_4)
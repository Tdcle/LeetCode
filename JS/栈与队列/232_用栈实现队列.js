var MyQueue = function() {
    this.stackIn = []
    this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const size = this.stackOut.length
    if(size){
        return this.stackOut.pop()
    }
    while(this.stackIn.length){
        this.stackOut.push(this.stackIn.pop())
    }
    return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const x = this.pop()
    this.stackOut.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stackIn.length && !this.stackOut.length
};


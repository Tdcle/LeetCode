var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      let index = stack.pop();
      map.set(nums2[index], nums2[i]);
    }
    stack.push(i);
  }

  let res = [];
  for (let j = 0; j < nums1.length; j++) {
    res[j] = map.get(nums1[j]) || -1;
  }
  return res;
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]))
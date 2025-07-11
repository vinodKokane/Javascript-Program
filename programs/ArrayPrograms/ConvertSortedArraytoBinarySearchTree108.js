// 108. Convert Sorted Array to Binary Search Tree
// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.


// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

function sortedArrayToBST(nums) {
    // console.log("Input :- ", nums);
    if (nums.length === 0) return null;
    const mid = Math.floor(nums.length / 2);
    const root = {
        val: nums[mid],
        left: null,
        right: null
    };
    root.left = sortedArrayToBST(nums.slice(0, mid));
    // console.log("Right :- ", nums.slice(mid + 1));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}


console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));






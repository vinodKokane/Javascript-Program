// 26. Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

Input: nums = [1, 1, 2]
function removeDuplicates(nums) {
    // const filterNums = nums.filter((num, index) => {
    //     // if (index === nums.indexOf(num)) {
    //     //     console.log(index, nums.indexOf(num), num);
    //     // }
    //     // console.log("-----------------------------------------");
    //     // console.log("Nums are : " + num);
    //     // console.log("Current Index is : " + index);
    //     // console.log("Index of Number : " + nums.indexOf(num));
    //     // console.log(index === nums.indexOf(num));

    //     // console.log("-----------------------------------------"); its correct but not accepted by leetcode
    //     return index === nums.indexOf(num);
    // })
    // console.log(filterNums);
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
console.log(removeDuplicates(nums));
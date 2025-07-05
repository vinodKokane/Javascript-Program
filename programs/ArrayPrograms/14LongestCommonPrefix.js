// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

Input: strs = [""]
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    if (strs[0] !== "") {
        for (let i = 0; i < strs[0].length; i++) {
            // console.log(strs[0][i]);
            for (let j = 1; j < strs.length; j++) {
                if (strs[0][i] !== strs[j][i]) {
                    return strs[0].slice(0, i);
                }
            }
        }
    } else {
        return ''
    }
}

console.log(longestCommonPrefix(strs));


// < !--121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//     Example 2:

// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104 -- >
// Day-1  - > 7
// Day-2  - > 1
// Day-3  - > 5
// Day-4  - > 3
// Day-5  - > 6
// Day-6  - > 4

Input: prices = [7, 6, 4, 3, 1];

function maxProfit(prices) {
    if (prices.length < 2) return 0;

    let minPrice = prices[0];//buying price
    let maxProfits = 0;

    //starting from the second day, we will check the price of each day
    for (let i = 1; i < prices.length; i++) { // start i = 1
        let potantialProfit = prices[i] - minPrice;
        if (potantialProfit > maxProfits) {
            maxProfits = potantialProfit;
        }
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maxProfits;
}
console.log("Max Profit is: ", maxProfit(prices));
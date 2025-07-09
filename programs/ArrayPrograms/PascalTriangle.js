
// Example 1:

Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
function generate(numRows) {
    const triangle = [];
    // for (let i = 0; i < numRows; i++) {
    //     const row = new Array(i + 1);
    //     row[0] = 1;
    //     row[row.length - 1] = 1;
    //     for (let j = 1; j < row.length - 1; j++) {
    //         row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    //     }
    //     triangle.push(row);
    // }
    // console.log(triangle);
    for (let i = 0; i < numRows; i++) {
        const row = [];
        let sum = 0;
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                // console.log("T1 - " + triangle[i - 1][j - 1], "T2 - " + triangle[i - 1][j]);
                // console.log("i- " + i, "j- " + j, "i - 1", i - 1, "j - 1", j - 1);
                sum = triangle[i - 1][j - 1] + triangle[i - 1][j];
                row.push(sum);
            }
            console.log("--------------------------");

            console.log("Row - " + j, row);
            console.log("--------------------------");
        }
        // console.log("Row - " + i, row);
        triangle.push(row);
    }
    console.log(triangle);

}

generate(numRows);


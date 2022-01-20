/** LEVEL 2.1
 * Plant your new seeds. This time, write a function that takes an array of 
 * seeds and any number of rows and columns to plant your seeds in a grid 
 * represented by a 2D array.
 */

/**
 * Returns a 2D array representing all seeds in a grid of size 
 * row x cols.
 *
 * @param {array} seeds - Array of the Seeds in your packet.
 * @param {number} rows - The number of rows.
 * @param {number} cols = The number of columns.
 * @return {array} - 2D array representing grid of planted Seeds.
 */ 
  
function grid(seeds, rows, cols) {
    const planted = new Array(rows);

    // Create a 2D array for the row x cols grid using 1D array
    for (let i = 0; i < rows; i++) {
        planted[i] = new Array(cols);
    }

    // Plant each seed into the grid 
    while (i < seeds.length) {
        for (let m = 0; m < rows; m++) {
            for (let n = 0; n < cols; n++) {
                planted[m][n] = seeds[i];
                i++;
            } 
        }
    }
    
    return planted;
}
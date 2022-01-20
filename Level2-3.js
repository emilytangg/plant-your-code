/** LEVEL 2.3
* Some plants need more sun. Write a function that re-orders your plants so 
* that their heights don't cast shadows on each other and then prioritizes 
* your plants by their health.
*/

/**
 * The Plant class
 */

var Plant = class Plant {
/**
 * @param {number} height - height in number of inches
 * @param {string} health - string of either "below average", "average", or
 * "above average"
 */
    constructor(height, health) {
        this.height = height;
        this.health = health;
    }
}
    
/**
 *
 * Write a function that passes in an array of Plants and
 * orders the array from shortest Plant to tallest.
 * If two heights are the same, then order by least healthiest
 * to healthiest.
 *
 * @param {Plant[]} plants - Array of Plants
 * @return {array} - Array of Plants ordered from shortest
 * to tallest.
 */
    
function reorderPlants(plants) {
    let min = 0;
    let max = 0;
    const order = [];

    for (let i = 0; i < plants.length; i++) {
        console.log(plants.sort(function(a, b){return a.height - b.height}));
    }
    

    return plants;
}

reorderPlants([{height: 4, health: 'average'}, {height: 2, health: 'average'}]);
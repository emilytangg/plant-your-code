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
    plants.sort((a, b) => {
        if (a.height > b.height) return 1;
        if (a.height < b.height) return -1;
        if (a.health > b.health) return -1;
        if (a.health < b.health) return 1;
    });
    
    return plants;
}

/* My original solution
function reorderPlants(plants) {
    plants.sort((a, b) => {
        if (a.height > b.height) {
            return 1;
        } else if (a.height < b.height) {
            return -1;
        } else {
            if (a.health > b.health) {
                return -1;
            } else if (a.health < b.health) {
                return 1;
            }
        }
    });

    return plants;
}
*/
// ---BEFORE LOOKING AT SOLUTION---
// const removeFromArray = function(array, ...remove) {
//     for(let i = 0; i < remove.length; i++) {
//         if (array.includes(remove[i])) {
//             array.splice(array.indexOf(remove[i]), 1); 
//         }
//     }
//     return array;
// };

const removeFromArray = function(arr, ...remove) {
    return arr.filter(val => !remove.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;

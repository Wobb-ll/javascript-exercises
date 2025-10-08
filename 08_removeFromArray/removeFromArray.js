const removeFromArray = function(array, ...remove) {
    for(let i = 0; i < remove.length; i++) {
        if (array.includes(remove[i])) {
            array.splice(array.indexOf(remove[i]), 1); 
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

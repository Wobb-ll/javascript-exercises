const reverseString = function(string) {
    const arrString = string.split('');
    arrString.reverse();
    const output = arrString.join('');
    return output;
};

// Do not edit below this line
module.exports = reverseString;

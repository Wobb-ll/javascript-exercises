const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }
    const sum = [];
    if(a < b) {
        for (i = 0; a <= b; i++) {
        sum[i] = a;
        a++
    }} else if (a > b) {
        for (i = 0; b <= a; i++) {
            sum[i] = b;
            b++
        } 
    }
    const finalSum = sum.reduce((total, val) => total + val);
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

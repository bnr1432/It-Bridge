exports.GreatestThreeNumber = function(a, b, c) {
    // return Math.max(a, b, c);
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
};   

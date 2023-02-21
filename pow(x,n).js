// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / myPow(x, -n);
    } else if (n % 2 === 0) {
        return myPow(x * x, n / 2);
    } else {
        return x * myPow(x, n - 1);
    }
};
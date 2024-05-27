function sum(value, currentSum = 0) {
    if (value < 0) {
        return currentSum;
    } else {
        return sum(value - 1, currentSum + value);
    }
}
console.log(sum(10))

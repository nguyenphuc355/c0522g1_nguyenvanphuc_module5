function sumFibonacci(amount) {
    var num1 = 0;
    var num2 = 1;
    var num3;
    var sum = num1 + num2;
    var arr = num1 + "," + num2;
    for (var i = 3; i <= amount; i++) {
        num3 = num1 + num2;
        sum += num3;
        arr += "," + num3;
        num1 = num2;
        num2 = num3;
    }
    return "Dãy fibonacci: ( " + arr + " )" + " ,Tổng: " + sum;
}
console.log(sumFibonacci(10));

function sumFibonacci(amount: number): string {
    let num1: number = 0;
    let num2: number = 1;
    let num3: number;
    let sum: number = num1 + num2;
    let arr: string = num1 + "," + num2;
    for (let i = 3; i <= amount; i++) {
        num3 = num1 + num2;
        sum += num3;
        arr += "," + num3;
        num1 = num2;
        num2 = num3;
    }
    return "Dãy fibonacci: ( " + arr + " )" + " ,Tổng: " + sum;
}

console.log(sumFibonacci(10));



function fibonacci(num: number): number {
    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

let arr: Array<number> = [];
let sum: number = 0;

for (let i = 0; i < 10; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}

console.log("Dãy fibonacci: " + arr + ", Tổng: " + sum);
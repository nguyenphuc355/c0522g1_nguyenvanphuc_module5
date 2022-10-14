let seed1 = 0;
let seed2 = 1;
let seed3;
let sum = 0;
let str = [];
for (let i = 1; i <= 15; i++) {
    seed3 = seed1 + seed2;
    str.push(seed3);
    sum += seed3;
    seed1 = seed2;
    seed2 = seed3;
}
console.log(`dãy fibonacci: ${str}`);
console.log(`sum: ${sum}`);
//# sourceMappingURL=variable.js.map
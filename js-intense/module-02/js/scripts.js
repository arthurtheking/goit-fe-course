'Use strict'

const refs = {
    input : 0,
    numbers : [],
    total : 0
};

do {
    refs.input = prompt('Enter your number');
    if(refs.input !== null) {
    refs.numbers.push(Number(refs.input))
};
} while (refs.input);

for (num of refs.numbers) {
    refs.total += num;
};

console.log(refs.total);
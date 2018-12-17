'Use strict'

const refs = {
    input : 0,
    numbers : [],
    total : 0
};

do {
    refs.input = prompt('Enter your number');
    refs.numbers.push(Number(refs.input));
    if(refs.input === null) {
        refs.numbers.pop();
    };
} while (refs.input);

for (num of refs.numbers) {
    refs.total += num;
};

console.log(refs.total);
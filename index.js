// Using loop 1 + 2+ 3 + .... + n
const sum_to_n_a = function(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i
    }

    return total
};

const sum_to_n_b = function(n) {
    return n * (n + 1) / 2;
};

const sum_to_n_c = function(n) {
    if (n === 1) {
        return 1;
    }

    return n + sum_to_n_c(n - 1);
};

const number = 45;

const result1 = sum_to_n_a(number);
const result2 = sum_to_n_b(number);
const result3 = sum_to_n_c(number);


console.log('sum_to_n_a', result1);
console.log('sum_to_n_b', result2);
console.log('sum_to_n_b', result3);

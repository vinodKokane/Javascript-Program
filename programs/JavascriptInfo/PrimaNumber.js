Input: number = 10;
function isPrime(num) {
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
}
const result = isPrime(number);
result ? console.log(`${number} is a prime number.`) : console.log(`${number} is not a prime number.`);

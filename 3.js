module.exports = {
    func: function () {
        let num = 600851475143;
        let curr_prime = 1;

        while (num > 1) {
            curr_prime = find_next_prime(curr_prime);
            if (num % curr_prime === 0) {
                num /= curr_prime;
            }
        }

        console.log(curr_prime);
    }
}

function find_next_prime(num) {
    let next_prime = num;
    let found = false;

    while (!found) {
        next_prime++;
        if (isPrime(next_prime)) found = true;
    }

    return next_prime;
}

function isPrime(num) {
    let isPrime = true;
    for (i = 2; i < num && isPrime; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}
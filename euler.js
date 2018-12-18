// Get how many files are in the directory to know how many euler were already done
const fs = require('fs');
const dir = './';

let euler_count = fs.readdirSync(dir).length - 1; // Minus this file

let euler_funcs = [];

for (let i = 1; i <= euler_count; i++) {
    console.log('Euler No. ' + i + ' : ');
    euler_funcs.push(require('./' + i + '.js'));
    euler_funcs[i - 1].func();
    console.log();
}

//euler.func_1 = function () {
//    let sum = 0;
//
//    for (let i = 1; i < 1000; i++) {
//        if (i % 3 === 0 || i % 5 === 0) {
//            sum += i;
//        }
//    }
//
//    console.log(sum);
//}
//
//euler.func_2 = function () {
//    let sum = 0;
//    let last_fib = 1;
//    let curr_fib = 2;
//    let help = 0;
//
//    while (curr_fib < 4000000) {
//        if (curr_fib % 2 === 0) {
//            sum += curr_fib;
//        }
//
//        help = curr_fib;
//        curr_fib += last_fib;
//        last_fib = help;
//    }
//
//    console.log(sum);
//}

//euler.func_3 = function () {
//    let num = 600851475143;
//    let curr_prime = 1;
//    
//    while (num > 1) {
//        curr_prime = find_next_prime(curr_prime);
//        if (num % curr_prime === 0) {
//            num /= curr_prime;
//            console.log(curr_prime);
//        }
//    } 
//
//    console.log(curr_prime);
//}
//
//function find_next_prime(num) {
//    let next_prime = num;
//    let found = false;
//    
//    while (!found) {
//        next_prime++;
//        if (isPrime(next_prime)) found = true;
//    }
//    
//    return next_prime;
//}
//
//function isPrime(num) {
//    let isPrime = true;
//    for (i=2; i<num && isPrime; i++) {
//        if (num % i === 0) {
//            isPrime = false;
//        }
//    }
//    return isPrime;
//}

//function parseThisInt(num) {
//    let parsed = parseInt(num);
//    
//    if (num > 0 && num !== NaN && num !== undefined && num !== null) {
//        return parsed;
//    }
//    
//    console.log('Enter a goddamn number ffs.');
//    return 0;
//}

//var stdin = process.openStdin();
//
//stdin.addListener("data", function(s) {
//    let num = parseThisInt(s);
//    
//    if (num !== 0) {
//        console.log("Euler Number : [" + s.toString().trim() + "]");
//        if (typeof euler[FUNC_NAME + num] === 'function') {
//            euler[FUNC_NAME + num]();
//        } else {
//            console.log('Still not done yet.');
//        }
//    }
//});
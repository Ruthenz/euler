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
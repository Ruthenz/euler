module.exports = {
    func: function () {
        let sum = 0;
        let last_fib = 1;
        let curr_fib = 2;
        let help = 0;

        while (curr_fib < 4000000) {
            if (curr_fib % 2 === 0) {
                sum += curr_fib;
            }

            help = curr_fib;
            curr_fib += last_fib;
            last_fib = help;
        }

        console.log(sum);
    }
}
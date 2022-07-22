process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function isPrime(num) {
    for (var i = 2; i * i <= num; i++)
        if (num % i == 0)
            return 0;
    return 1;
}

function main(input) {
    input = input.split('\n');
    var tc = parseInt(input.shift());
    while (tc --) {
        var num = parseInt(input.shift());
        if (num == 4) {
            console.log('Deepa');
            continue;
        }
        var i;
        for (i = 3; i * 2 <= num; i += 2)
            if (isPrime(i) && isPrime(num - i)) {
                console.log('Deepa');
                break;
            }
        if (i * 2 > num)
            console.log('Arjit');
    }
}
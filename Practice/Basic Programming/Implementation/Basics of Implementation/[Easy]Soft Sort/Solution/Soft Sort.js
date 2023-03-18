process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const MOD = 1000000007;

    input = input.split('\n');

    var fact = new Array(1000001);
    fact[0] = 1;
    for (var i = 1; i <= 1000000; i++)
        fact[i] = fact[i - 1] * i % MOD;

    var t = Number(input[0]);
    for (var i = 1; i <= t; i++) {
        var n = Number(input[i]);
        console.log((3 * fact[n] + 3) % MOD);
    }
}
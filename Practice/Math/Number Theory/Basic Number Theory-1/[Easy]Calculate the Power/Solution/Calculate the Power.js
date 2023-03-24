process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

const MOD = 1000000007n;

function pow(a, b) {
    var result = 1n;
    while (b) {
        if (b % 2n)
            result = result * a % MOD;
        a = a * a % MOD;
        b >>= 1n;
    }
    return result;
}

function main(input) {
    const [A, B] = input.split(" ").filter(Boolean).map(BigInt);
    console.log(Number(pow(A, B)));
}
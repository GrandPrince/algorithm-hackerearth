process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

const MOD = 1000000007;

function pow(value, power) {
    var result = 1;
    while (power) {
        if (power % 2)
            result = Number(BigInt(result) * BigInt(value) % BigInt(MOD));
        power = power / 2 >> 0;
        value = Number(BigInt(value) * BigInt(value) % BigInt(MOD));
    }
    return result;
}

function main(input) {
    input = input.split(/\r?\n/);
    
    var line = 0, T = parseInt(input[line++]);
    while (T--) {
        var [N, K] = input[line++].split(' ').map(Number);
        var A = input[line ++].split(' ').map(Number).slice(0, N).sort((a, b) => a - b);

        var count = 1;
        for (var i = 1; i < K; i++)
            count = count * i % MOD;
        count = pow(count, MOD - 2);
        for (var i = 1; i < K; i++)
            count = count * (N - i) % MOD;

        var result = 0;
        for (var i = 0; i <= N - K; i++) {
            result = Number((BigInt(result) + BigInt(A[i]) * BigInt(count)) % BigInt(MOD));
            count = Number(BigInt(count) * BigInt(pow(N - 1 - i, MOD - 2)) * BigInt(N - K - i) % BigInt(MOD));
        }
        console.log(result);
    }
}

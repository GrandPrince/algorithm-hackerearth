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

function pow(num, exp) {
    var result = 1;
    while(exp) {
        if (exp % 2)
            result = Number(BigInt(result) * BigInt(num) % BigInt(MOD));
        num = Number(BigInt(num) * BigInt(num) % BigInt(MOD));
        exp = (exp / 2) >> 0;
    }
    return result;
}

function main(input) {
    input = input.split('\n');    
    t = parseInt(input[0]);

    var MW = new Array(100001).fill(0);
    for (var i = 1; i <= 10000; i++)
        for (var j = i; j <= 10000; j += i)
            MW[j] = (MW[j] + pow(i, j)) % MOD;
    
    for (var i = 1; i <= t; i++) {
        var [a, b] = input[i].split(' ').map(Number);
        var result = 0;
        for (var j = a; j <= b; j++)
            result = (result + MW[j]) % MOD;
        console.log(result);
    }
}
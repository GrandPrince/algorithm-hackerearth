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

function mul(a, b) {
    return Number(BigInt(a) * BigInt(b) % BigInt(MOD));
}

function pow(a, b) {
    var result = 1;
    while (b) {
        if (b % 2)
            result = mul(result, a);
        b >>= 1;
        a = mul(a, a);
    }
    return result;
}

function c(n, k) {
    var result = 1;
    if (k == 0)
        return result;
    for (var i = 1; i <= k; i++)
        result = mul(result, i);
    result = pow(result, MOD - 2);;
    for (var i = n - k + 1; i <= n; i++)
        result = mul(result, i);
    return result;
}

function main(input) {
    input = input.split("\n");

    var T = Number(input[0]);
    for (var i = 1; i <= T; i++) {
        var count = new Array(26).fill(0);
        for (var j = 0; j < input[i].length; j++)
            count[input[i].charCodeAt(j) - "a".charCodeAt(0)]++;                          
        var vowel = count[0] + count[4] + count[8] + count[14] + count[20];
        var consonant = input[i].length - vowel;
        if (consonant < vowel - 1)
            console.log(-1);
        else
        {            
            var result = c(consonant + 1, consonant - (vowel - 1));
            for (var j = 0; j < 26; j++) {
                if (j == 0 || j == 4 || j == 8 || j == 14 || j == 20) {
                    result = mul(result, c(vowel, count[j]));
                    vowel -= count[j];
                } else {
                    result = mul(result, c(consonant, count[j]));
                    consonant -= count[j];
                }
            }
            console.log(result);
        }
    }
}
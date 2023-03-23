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
    const [T, ...N] = input.split("\n").filter(Boolean).map(Number);
    for (var i = 0; i < T; i++) {
        var result = 1;
        for (var j = 2; j <= N[i]; j++) {
            if (N[i] % j === 0) {
                var cnt = 0;
                while (N[i] % j === 0) {
                    N[i] /= j;
                    cnt++;
                }
                result *= (cnt + 1);
            }
        }
        console.log(result);
    }
}
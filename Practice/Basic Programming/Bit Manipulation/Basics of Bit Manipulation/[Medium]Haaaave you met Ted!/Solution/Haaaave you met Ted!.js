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
    input = input.split("\n");

    var line = 0, T = Number(input[line++]);
    while (T--) {
        var N = Number(input[line++]), S = input[line++].split(" ").filter(Boolean).map(Number);
        var result = Number.MAX_SAFE_INTEGER;
        for (var i = 0; i < N; i++)
            result = Math.min(result, S[i].toString(2).split("1").length - 1);
        console.log(result);
    }
}
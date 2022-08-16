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
    var N = parseInt(input);
    if (N % 4 == 2) {
        console.log(0);
        return;
    }
    if (N % 4 == 0)
        N /= 4;

    var result = 0;
    for (var i = 1; i * i <= N; i++) {
        if (N % i == 0)
            result++;
    }
    console.log(result);
}
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
    input = input.split('\n');

    t = parseInt(input[0]);
    for (i = 1; i <= t; i++) {
        n = input[i];
        if (n.includes("21") || parseInt(n) % 21 == 0)
            console.log("The streak is broken!");
        else
            console.log("The streak lives still in our heart!");
    }
}
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
    var line = 0;
    var T = parseInt(input[line++]);
    while (T--) {
        var N = parseInt(input[line++]), M = parseInt(input[line++]);
        if (M == 0 || (N % 2 == 0 && M * 2 <= N))
            console.log('Yes');
        else
            console.log('No');
    }
}
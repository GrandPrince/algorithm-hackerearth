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

    var line = 0, t = Number(input[line++]);
    while (t--) {
        var n = Number(input[line++]), favour = new Array(n), anger = new Array(n);
        var result = 0, maximum = new Array(2).fill(0);
        for (var i = 0; i < n; i++) {
            [favour[i], anger[i]] = input[line++].split(" ").map(Number);
            result += anger[i];

            var sum = favour[i] + anger[i];
            if (sum >= maximum[0]) {
                maximum[1] = maximum[0];
                maximum[0] = sum;
            } else if (sum >= maximum[1])
                maximum[1] = sum;
        }
        console.log(maximum[0] + maximum[1] - result);
    }
}
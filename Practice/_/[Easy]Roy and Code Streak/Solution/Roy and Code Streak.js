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

    var line = 0, T = Number(input[line++]);
    while (T--) {
        var N = Number(input[line++]), vis = new Array(1000001).fill(0), result = 0, count = 0;
        while (N--) {
            var [S, R] = input[line++].split(' ').filter(Boolean).map(Number);
            if (R == 0)
                count = 0;
            else {
                if (vis[S] == 0) {
                    vis[S] = 1;
                    count++;
                    result = Math.max(result, count);
                }
            }
        }
        console.log(result);
    }
}
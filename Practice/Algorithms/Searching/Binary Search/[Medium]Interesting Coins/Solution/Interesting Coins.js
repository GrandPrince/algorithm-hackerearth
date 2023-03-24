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
        var N = Number(input[line++]), coins = input[line++].split(" ").filter(Boolean).map(Number);

        var left = 0, right = 1000000000;
        while (left < right) {
            var mid = (left + right) >> 1, current = 0;

            for (var i = 0; i < N; i++) {
                if (current >= coins[i] + mid)
                    break;
                current = Math.max(current + 1, coins[i] - mid);
            }
            if (i < N)
                left = mid + 1;
            else
                right = mid;
        }
        console.log(right);
    }
}
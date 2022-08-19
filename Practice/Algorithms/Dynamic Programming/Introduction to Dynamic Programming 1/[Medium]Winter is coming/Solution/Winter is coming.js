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
        var N = Number(input[line++]), A = input[line++].split(' ').filter(Boolean).map(Number);
        
        var index = new Array(N).fill(-1), sum = 0, left = 0, right = N;
        index[0] = 0;
        for (var i = 0; i < N; i++) {
            sum = (sum + A[i]) % N;
            if (index[sum] != -1) {
                if (i + 1 - index[sum] < right - left + 1) {
                    left = index[sum] + 1;
                    right = i + 1;
                }
            }            
            index[sum] = i + 1;
        }
        console.log(left + ' ' + right);
    }
}
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
    
    var N = parseInt(input[0]);
    var LR = input.slice(1).map(value => value.split(' ').map(Number)).sort((A, B) => A[0] - B[0]);
    
    var result = 500000500000, last = 0;
    for (var i = 0; i < N; i++) {
        if (last >= LR[i][0])
            LR[i][0] = last + 1;
        if (LR[i][0] <= LR[i][1]) {
            result -= ((LR[i][0] + LR[i][1]) * (LR[i][1] - LR[i][0] + 1) / 2);
            last = LR[i][1];
        }
    }
    console.log(result);
}
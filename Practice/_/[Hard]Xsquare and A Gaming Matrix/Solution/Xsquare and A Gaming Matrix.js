// Sample code to perform I/O:
 
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
        const N = Number(input[line++]);
        const M = new Array(N);
        for (i = 0; i < N; i++)
            M[i] = input[line++].split(" ").filter(Boolean).map(Number);
        
        const score = new Array(N);
        for (i = 0; i < N; i++) {
            score[i] = new Array(N - i);
            for (j = 0; j < N - i; j++) {
                score[i][j] = new Array(N - i);
                for (k = 0; k < N - i; k++) {
                    if (i == 0)
                        score[i][j][k] = M[j][k];
                    else
                        score[i][j][k] = Math.max(
                            M[j][k] + Math.max(score[i - 1][j][k + 1], score[i - 1][j + 1][k], score[i - 1][j + 1][k + 1]),
                            M[j][k + i] + Math.max(score[i - 1][j][k], score[i - 1][j + 1][k], score[i - 1][j + 1][k + 1]),
                            M[j + i][k] + Math.max(score[i - 1][j][k], score[i - 1][j][k + 1], score[i - 1][j + 1][k + 1]),
                            M[j + i][k + i] + Math.max(score[i - 1][j][k], score[i - 1][j][k + 1], score[i - 1][j + 1][k]));
                }
            }
        }
        console.log(score[N - 1][0][0]);
    }
}
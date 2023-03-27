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
 
    var T = Number(input[0]);
    for (var i = 1; i <= T; i++) {
        var [S, N, M, K] = input[i].split(" ").filter(Boolean).map(Number);
        
        var total = 1;
        for (var j = 1; j <= N; j++)
            total *= j / (S - j + 1);
        
        var result = 0;
        if (N >= K)
            for (var j = Math.max(0, Math.min(N - K, S - M)); j >= Math.max(0, N - M); j--) {
                var current = total;
                for (var k = 1; k <= N - j; k++)
                    current *= (M - k + 1) / k;
                for (var k = 1; k <= j; k++)
                    current *= (S - M - k + 1) / k;
                result += current;
            }
        console.log(result.toFixed(6));
    }
}
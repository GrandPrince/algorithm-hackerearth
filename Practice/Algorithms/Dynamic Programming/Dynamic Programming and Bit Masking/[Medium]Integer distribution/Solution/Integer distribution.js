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
    
    var N = parseInt(input[0]), A = input.slice(1).map(Number);
    var max = new Array(1 << N).fill(-1), min = new Array(1 << N).fill(Number.MAX_SAFE_INTEGER);
    max[0] = min[0] = 0;
    for (var i = 0; i < (1 << N); i++)
        if (max[i] != -1)
            for (var j = 0; j < N; j++)
                for (var k = j + 1; k < N; k++)
                    if ((i & (1 << j)) == 0 && (i & (1 << k)) == 0) {
                        var l = i | (1 << j) | (1 << k);
                        max[l] = Math.max(max[l], max[i] + (A[j] ^ A[k]));
                        min[l] = Math.min(min[l], min[i] + (A[j] ^ A[k]));
                    }
    console.log(min[(1 << N) - 1], max[(1 << N) - 1]);
}
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
    
    var line = 0, T = parseInt(input[line++]);
    while (T--) {
        var N = parseInt(input[line++]), A = input[line++].split(' ').map(Number);
        for (var i = 0; i < N && A[i] == i + 1; i++);
        if (i == N)
            [A[N - 2], A[N - 1]] = [A[N - 1], A[N - 2]];
        else {
            A[A.indexOf(i + 1)] = A[i];
            A[i] = i + 1;
        }            
        console.log(A.join(' '));
    }
}

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
        var N = Number(input[line++]);
        var A = input[line++].split(" ").filter(Boolean).map(Number).sort((a, b) => a - b);
        
		if (N == 2 || N == 3)
			console.log(A[N - 1] - A[0]);
		else
			console.log((A[N - 1] - A[0]) + (A[N - 2] - A[1]));
	}
}
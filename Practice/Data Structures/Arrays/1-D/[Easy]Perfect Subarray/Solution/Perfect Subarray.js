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

    input = input[1].split(' ');
    var result = 0;
    for (var i = 0; i < N; i++) {
        var sum = 0;
        for (var j = i; j < N; j++) {
            sum += parseInt(input[j]);
            if (Math.floor(Math.sqrt(sum)) === Math.ceil(Math.sqrt(sum)))
                result++;
        }
    }
    console.log(result);
}
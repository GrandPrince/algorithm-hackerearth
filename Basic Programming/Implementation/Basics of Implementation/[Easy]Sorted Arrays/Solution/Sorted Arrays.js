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
    var N = parseInt(input.shift());

    input = input[0].split(' ');
    var result = 0, current = parseInt(input[0]);
    for (var i = 1; i < N; i++) {
        var num = parseInt(input[i]);
        if (current < num)
            current = num;
        else {
            current++;
            result += (current - num);
        }
    }
    console.log(result);
}

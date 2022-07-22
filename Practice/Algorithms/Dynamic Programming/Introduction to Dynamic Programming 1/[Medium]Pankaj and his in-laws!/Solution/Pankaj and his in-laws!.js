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
    var t = parseInt(input[0]);

    input = input[1].split(' ');
    var result = [1];
    for (var i = 1; i < t; i++) {
        result.push(1);
        for (var j = 0; j < i; j++)
            if (parseInt(input[j]) <= parseInt(input[i]))
                result[i] = Math.max(result[i], result[j] + 1)
    }
    console.log(Math.max(...result).toString(2));
}

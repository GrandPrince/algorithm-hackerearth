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

    var T = parseInt(input[0]);
    for (var i = 1; i <= T; i++) {
        var pos = 0, result = new Array();
        for (var j = 0; j < input[i].length; j++) {
            var order = input[i].charCodeAt(j) - 'a'.charCodeAt(0);
            result.push((order - pos + 38) % 26 - 12);
            pos = order;
        }
        console.log(result.join(' '));
    }
}
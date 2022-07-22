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
    
    for (var i = 1; i <= t; i++) {
        var countR = input[i].split('r').length - 1;
        var countU = input[i].split('u').length - 1;
        var countB = input[i].split('b').length - 1;
        var countY = input[i].split('y').length - 1;
        console.log(Math.min(countR, countU, countB, countY));
    }
}
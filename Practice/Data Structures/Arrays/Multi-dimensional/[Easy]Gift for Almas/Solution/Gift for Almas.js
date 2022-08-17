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
    
    var n = parseInt(input[0]), matrix = input.slice(1, n + 1).map(value => value.split(' ').map(Number)), instruction = input[n + 1];
    var rotate = ([...instruction].reduce((total, value) => total += (value == 'R' ? 1 : -1), 0) + 4) % 4;      var result = Array.from(Array(n), () => new Array(n));
    for (var i = 0; i < n; i++)
        for (var j = 0; j < n; j++) {
            var [x, y] = [i, j];
            for (var k = 0; k < rotate; k++)
                [x, y] = [y, n - 1 - x];
            result[x][y] = matrix[i][j];
        }
    console.log(result.map(value => value.join(' ')).join('\n'));
}
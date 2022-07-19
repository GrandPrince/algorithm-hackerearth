process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var data = input.split(' ');
    var A = parseInt(data[0]), B = parseInt(data[1]), N = parseInt(data[2]);
    var step = A - B;
    var result = Math.floor((N - A + step - 1) / step) + 1;
    console.log(result);
}
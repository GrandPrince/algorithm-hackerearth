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
 
    var T = Number(input[0]);
    for (var i = 1; i <= T; i++) {
        var N = Number(input[i]);
        console.log(N);
    }
}
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
    var N = Number(input);
    var res = 1;
    for (var i = 1; i <= N; i++) {
        res *= i;
    }
    console.log(res);
}
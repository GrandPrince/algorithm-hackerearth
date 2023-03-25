process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
const MX = 1000000;
 
function main(input) {
    input = input.split("\n");
 
    var N = Number(input[0]);
    var A = input[1].split(" ").filter(Boolean).map(Number);
 
    var count = new Array(MX + 1).fill(0);
    for (var i = 0; i < N; i++)
        count[A[i]]++;
 
    var result = new Array();
    for (var i = 0; i < N; i++)
        if (count[A[i]] == 1)
            result.push(A[i]);
    console.log(result.sort((a, b) => a - b).join(" "))
}
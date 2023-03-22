process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
const MN = 1000000;
 
function main(input) {
    input = input.split("\n");
 
    var phi = Array.from(Array(MN + 1), (_, index) => index);
    for (var i = 2; i <= MN; i++)
        if (phi[i] == i) {
            phi[i]--;
            for (var j = i + i; j <= MN; j += i)
                phi[j] *= (i - 1) / i;
        }
    
    var t = Number(input[0]);
    for (var i = 1; i <= t; i++) {
        var n = Number(input[i]);
        console.log(phi[n]);
    }
}
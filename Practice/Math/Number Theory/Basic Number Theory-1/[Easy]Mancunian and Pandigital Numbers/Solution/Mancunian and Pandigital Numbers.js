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
 
    var count = new Array(MX + 1);
    count[0] = 0;
    for (var i = 1; i <= MX; i++) {
        count[i] = count[i - 1];
        
        if (String(i).split("").sort().every((value, index) => value - 1 == index))
            count[i]++;
    }
 
    var Q = Number(input[0]);
    for (var i = 1; i <= Q; i++) {
        var [L, R] = input[i].split(" ").filter(Boolean).map(Number);
        console.log(count[R] - count[L - 1]);
    }
}
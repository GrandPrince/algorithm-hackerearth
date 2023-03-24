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
    var primeFactors = Array.from(Array(MN + 1), (_, index) => index);
    for (var i = 2; i * i <= MN; i++)
        if (primeFactors[i] == i)
            for (var j = i + i; j <= MN; j += i)
                if (primeFactors[j] == j)
                    primeFactors[j] = i;
    
    input = input.split("\n");
 
    var N = Number(input[0]);
    for (var i = 1; i <= N; i++)
    {
        var R = Number(input[i]);
        console.log(R - primeFactors[R]);
    }
}
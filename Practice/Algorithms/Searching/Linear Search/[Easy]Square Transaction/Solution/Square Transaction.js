// Sample code to perform I/O:
 
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
    const [T, _, Q, ...targets] = input.filter(Boolean).map(Number);
    const A = input[1].split(" ").filter(Boolean).map(Number);
    A.forEach((value, index) => A[index] = (index === 0 ? value : A[index - 1] + value));
    for (target of targets) {
        const result = A.findIndex(value => value >= target);
        console.log(result + Number(result !== -1));
    }
}
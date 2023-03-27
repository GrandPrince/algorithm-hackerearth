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
    const [T, ...tests] = input.split("\n");
    
    for (const test of tests) {
        const [X, Y, N] = test.split(" ").map(Number);
 
        var numbers = Array.from(Array(X), _ => Y);
        numbers.push(X * Y);
        for (var i = X; i < N - 1; i++)
            numbers.push(numbers[i] * 2 - numbers[i - X]);
        console.log(numbers[N - 1]);
    }
}
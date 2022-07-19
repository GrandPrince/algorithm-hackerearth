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
    var str = input.split('\n')[1], result = "";
    for (var i = 25; i >= 0; i--) {
        var ch = String.fromCharCode('a'.charCodeAt(0) + i);
        var pos = str.indexOf(ch);
        if (pos != -1) {
            result += ch;
            str = str.substring(pos + 1);
        }
    }
    console.log(result);
}
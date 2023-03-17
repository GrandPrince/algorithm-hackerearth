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
        var [bt1, bt2, mt1, mt2] = input[i].split(" ").filter(Boolean).map(Number);
        if (bt1 > bt2)
            [bt1, bt2] = [bt2, bt1];
        if (mt1 > mt2)
            [mt1, mt2] = [mt2, mt1];
        var leftRight = Math.min(bt2, mt2), rightLeft = Math.max(bt1, mt1);
        if (leftRight > rightLeft)
            console.log("Nothing");
        else if (leftRight < rightLeft)
            console.log("Line");
        else
            console.log("Point");
    }
}
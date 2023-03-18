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
 
    var line = 0, T = Number(input[line++]);
    while (T--) {
        var [D1, D2] = input[line++].split(" ");
        var [D1, M1, Y1] = D1.split(":").filter(Boolean).map(Number);
        var [D2, M2, Y2] = D2.split(":").filter(Boolean).map(Number);
        if (D1 >= M1) {
            M1++;
            if (M1 == 13) {
                M1 = 2;
                Y1++;
            }
        }
        if (D2 < M2 - 1) {
            M2--;
            if (M2 == 0) {
                M2 = 12;
                Y2--;
            }
        }
 
        var result = 0;
        while (Y1 < Y2 || Y1 == Y2 && M1 <= M2) {
            if (Y1 % 100 == M1 + 1)
                result++;
            M1++;
            if (M1 == 13) {
                M1 = 2;
                Y1 ++;
            }
        }
        console.log(result);
    }
}
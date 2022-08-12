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
    input = input.split('\n');
    N = parseInt(input[0]);

    var stations = input.slice(1, N + 1).map((value, index) => value.split(' ').map(Number)).sort((A, B) => A[0] - B[0]);
    var [D, P] = input[N + 1].split(' ').map(Number);
    
    var index;
    for (index = N - 1; index >= 0 && stations[index][0] > D; index--);

    var result = 0;
    while (D > P) {
        if (D - P > stations[index][0]) {
            console.log(-1);
            return;
        }
        var min = D, next;
        for (var i = index; i >= 0 && D - P <= stations[i][0]; i--)
            if (D - P - stations[i][1] < min) {
                min = D - P - stations[i][1];
                next = i;
            }
        P = P - (D - stations[next][0]) + stations[next][1];
        D = stations[next][0];
        index = next - 1;
        result++;
    }
    console.log(result);
}
    
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
    t = parseInt(input[0]);

    for (var i = 1; i <= t; i++) {
        input[i] = input[i].split(' ');
        var S = input[i][0], K = parseInt(input[i][1]) - 1;
        var result = S[K];
        S = S.split('')
            .map((value, index) => Object.assign({}, {value: value, index: index}))
            .sort((A, B) => {
                if (A.value == B.value)
                    return A.index - B.index;
                return B.value.localeCompare(A.value);
            });
        for (var j = 1; j < S.length; j++ ) {
            result += S[K].value;
            K = S[K].index;
        }
        console.log(result);
    }
}
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
    input = input.split(/\r?\n/);
    var N = parseInt(input[0]);

    var result = {};
    for (var i = 1; i <= N; i++) {
        var S = input[i].split(' ');
        S.map((str) => {
            if (str.match(/^\d+$/)) {
                if (isNaN(result[str]))
                    result[str] = 0;
                result[str]++;
                if (S[0] === "G:")
                    result[str]++;
            }
        });
    }
    
    var maximum = Math.max(...Object.values(result));
    var isDate = (Object.keys(result).length !== 0);
    Object.keys(result).map(key => {
        if (result[key] === maximum && key != 19 && key != 20)
            isDate = false;
    });
    console.log(isDate ? "Date" : "No Date");
}
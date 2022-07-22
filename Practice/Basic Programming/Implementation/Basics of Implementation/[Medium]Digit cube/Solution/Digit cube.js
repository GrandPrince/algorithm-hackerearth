process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function getDigitSum(num) {
    var sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function main(input) {
    input = input.split('\n');
    var T = parseInt(input[0]);
    
    for (var i = 1; i <= T; i++) {
        var data = input[i].split(' ');
        var n = parseInt(data[0]), k = parseInt(data[1]);
        var result = [];
        while (k--) {
            var sum = getDigitSum(n);
            sum = sum * sum * sum;
            var index = result.indexOf(sum);
            if (index != -1) {
                k %= (result.length - index);
                n = result[index + k];
                break;
            }
            result.push(sum);
            n = sum;
        }
        console.log(n);
    }
}

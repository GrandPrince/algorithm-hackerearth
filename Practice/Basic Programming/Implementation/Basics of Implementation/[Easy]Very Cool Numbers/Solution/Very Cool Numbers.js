process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function calcCoolness(num) {
    result = 0;
    while (num) {
        if (num % 8 == 5)
            result++;
        num >>= 1;
    }
    return result;
}

function main(input) {
    input = input.split('\n');

    coolness = new Array(100001);
    for (i = 1; i <= 100000; i++) {
        coolness[i] = calcCoolness(i);
    }
    
    T = parseInt(input[0]);
    for (i = 1; i <= T; i++) {
        data = input[i].split(' ').map(Number);

        R = data[0], K = data[1];
        result = 0;
        for (j = 1; j <= R; j++)
            if (coolness[j] >= K)
                result++;
        console.log(result);
    }
}
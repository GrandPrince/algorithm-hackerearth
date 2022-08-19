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

    var T = Number(input[0]);
    for (var i = 1; i <= T; i++) {
        var count = new Array(26).fill(0), total = new Array();
        total.push([0, 0, 0]);
        for (var j = 0; j < input[i].length; j++) {
            count[input[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
            var min = Math.min(count[0], Math.min(count[1], count[2]));
            total.push([count[0] - min, count[1] - min, count[2] - min]);
        }
        total.sort();

        var result = 0;
        for (var j = 0; j < total.length;) {
            for (var k = j + 1; k < total.length; k++)
                if (total[j][0] != total[k][0] || total[j][1] != total[k][1] || total[j][2] != total[k][2])
                    break;
            result += (k - j) * (k - j - 1) / 2;
            j = k;
        }       

        console.log(result);
    }
}

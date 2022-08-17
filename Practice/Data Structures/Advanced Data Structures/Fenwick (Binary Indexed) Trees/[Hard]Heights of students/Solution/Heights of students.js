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
    var T = parseInt(input[0]), line = 1;
    while (T--)
    {
        var N = parseInt(input[line++]), heights = input[line++].split(' ').map(Number);
    
        var result = 0, max = -1;
        var sort = new Array();
        for (var i = heights.length - 1; i >= 0; i--) {
            var left = 0, right = sort.length;
            while (left < right) {
                var mid = ((left + right) / 2) >> 0;
                if (heights[i] > sort[mid])
                    left = mid + 1;
                else
                    right = mid;
            }
            result += right;
            sort.splice(right, 0, heights[i]);
            for (next = right + 1; next < sort.length && heights[i] == sort[next]; next++);
            if (right - (sort.length - next) > max)
                max = right - (sort.length - next);
        }
        console.log(result - max);
    }
}

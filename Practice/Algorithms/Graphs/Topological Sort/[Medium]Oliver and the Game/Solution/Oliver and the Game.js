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
    var N = parseInt(input[0]);

    var nodes = new Array(N + 1).fill().map(() => new Array());
    for (var line = 1; line < N; line++) {
        var [A, B] = input[line].split(' ').map(Number);
        nodes[A].push(B);
    }

    pre = new Array(N + 1), post = new Array(N + 1);
    var stack = new Array(), index = 0;

    stack.push(1);
    while (stack.length) {
        var root = stack.pop();
        pre[root] = ++index;
        for (var i = nodes[root].length - 1; i >= 0; i--)
            stack.push(nodes[root][i]);
    }

    stack.push(1);
    while (stack.length) {
        var root = stack.pop();
        post[root] = index--;
        for (var i = 0; i < nodes[root].length; i++)
            stack.push(nodes[root][i]);
    }

    var Q = parseInt(input[line++]);
    for (; line <= N + Q; line++) {
        var [type, X, Y] = input[line].split(' ').map(Number);
        if (type == 0) {
            var temp = X;
            X = Y;
            Y = temp;
        }
        console.log(pre[X] > pre[Y] && post[X] < post[Y] ? "YES" : "NO");
    }
}
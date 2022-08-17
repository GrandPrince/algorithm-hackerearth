process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

var root;
function findRoot(x) {
    while (root[x] != -1)
        x = root[x];
    return x;
}

function union(x, y) {
    var rx = findRoot(x), ry = findRoot(y);
    if (rx != ry) {
        root[ry] = rx;
        return true;
    }
    return false;
}

function main(input) {
    input = input.split('\n');
    var line = 0;
    var n = parseInt(input[line++]);
    var m = parseInt(input[line++]);
    line++;
    
    var count = n - 1;
    root = new Array(n + 1).fill(-1);
    for (var i = 0; i < m; i++) {
        var [a, b] = input[line++].split(' ').map(Number);
        if (union(a, b))
            count--;
    }
    
    var q = parseInt(input[line++]);
    line++;

    var result = new Array();
    for (var i = 0; i < q; i++) {
        var [a, b] = input[line++].split(' ').map(Number);
        if (union(a, b))
            count--;
        result.push(count);
    }
    console.log(result.join(' '));
}
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
var bit, N, Q;
 
function update(index, value) {
    while(index <= N) {
        bit[index] += value;
        index += index & -index;
    }
}
 
function sum(index) {
    var result = 0;
    while (index) {
        result += bit[index];
        index -= index & -index;
    }
    return result;
}
 
function main(input) {
    input = input.split("\n");
 
    [N, Q] = input[0].split(" ").filter(Boolean).map(Number);
    const A = input[1].split(" ").filter(Boolean).map(Number);
    const query = Array();
    for (i = 0; i < Q; i++) 
        query.push([i, ...input[i + 2].split(" ").filter(Boolean).map(Number)]);
    
    const block = Math.sqrt(N);
    query.sort((a, b) => (Math.floor(a[1] / block) != Math.floor(b[1] / block)) ? (a[1] - b[1]) : (a[2] - b[2]));
    
    bit = Array(N + 1).fill(0);
    const sort = Array.from(A).sort((a, b) => a - b);
    const rank = A.map(value => sort.indexOf(value) + 1);
 
    var L = 0, R = 0, result = Array(N), count = 0;
    for (i = 0; i < Q; i++) {
        while(R < query[i][2]) {
            count += sum(N) - sum(rank[R]);
            update(rank[R], 1);
            R++;
        }
        while (R > query[i][2]) {
            R--;
            count -= sum(N) - sum(rank[R]);
            update(rank[R], -1);
        }
        while(L < query[i][1] - 1) {
            count -= sum(rank[L] - 1);
            update(rank[L], -1);
            L++;
        }
        while(L > query[i][1] - 1) {
            L--;
            count += sum(rank[L] - 1);
            update(rank[L], 1);
        }
        result[query[i][0]] = count;
    }
    for (i = 0; i < Q; i++)
        console.log(result[i]);
}
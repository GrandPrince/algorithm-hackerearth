process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
var childrenIDs, isDeleted;
 
function DFS(root) {
    var result = isDeleted[root];
    for (var i = 0; i < childrenIDs[root].length; i++)
        result += DFS(childrenIDs[root][i]);
    return result;
}
 
function main(input) {
    input = input.split("\n");
 
    var N = Number(input[0]);
    var parentIDs = input[1].split(" ").filter(Boolean).map(Number);
    var M = Number(input[2]);
    var deleteIDs = input[3].split(" ").filter(Boolean).map(Number);    
 
    childrenIDs = Array.from(Array(N), () => new Array());
    for (var i = 0; i < N; i++)
        if (parentIDs[i] != -1)
            childrenIDs[parentIDs[i] - 1].push(i);
    
    isDeleted = new Array(N).fill(0);
    for (var i = 0; i < M; i++) {
        deleteIDs[i]--;
        isDeleted[deleteIDs[i]] = 1;
        childrenIDs[deleteIDs[i]] = [];
    }
 
    console.log(DFS(0));
}
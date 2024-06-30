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
    // Initialize pointers for the start and end of the string
    let l = 0, r = input.length - 1;
    
    // Loop to compare characters from start and end towards the center
    while (l < r) {
        if (input[l] != input[r]) {
            // If characters do not match, it's not a palindrome
            console.log("NO");
            return;
        }
        l++;
        r--;
    }

    // If all characters match, it is a palindrome
    console.log("YES");
}

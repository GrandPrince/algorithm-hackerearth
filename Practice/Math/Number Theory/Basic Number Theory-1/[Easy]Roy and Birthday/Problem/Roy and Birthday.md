### Problem

<p>Its Roy's birthday and he is decorating his house with balloons.<br>
He has 26 different types of balloons. They are represented by <strong>[a-z]</strong>.</p>
<p>Now Roy does not want to have few particular balloons together. Actually he doesn't want to keep any of the two vowel (i.e <strong>[a,e,i,o,u]</strong> ) balloons together.<br>
So, in one arrangement no two vowels should be together. Given the string of balloons there can be many such arrangements possible.<br>
Help Roy in finding the number of possible arrangements.</p>
<p>Number of such arrangements can be quite large, so print it modulo 1000000007 (10<sup>9</sup> + 7)<br>
Also, there's a chance that no such arrangement is possible. Print "<strong>-1</strong>" in such cases (without quotes)</p>
<p><strong>Input:</strong><br>
First line contains <strong>T</strong>, number of test cases.<br>
Each of next T lines contains a string composed of lower case letters representing all the balloons.</p>
<p><strong>Output:</strong><br>
For each test case print the required answer.</p>
<p><strong>Constraints:</strong><br>
1 &lt;= <strong>T</strong> &lt;= 100<br>
1 &lt;= <strong>Length of string</strong> &lt;= 1000000 (10<sup>6</sup>)</p>
<p><strong>Note:</strong> Sum of string lengths over all the test cases in one file does not exceed 1000000 (10<sup>6</sup>)</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>2<br>abe<br>ae</td>
        <td>2<br>-1</td>
    </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>Test #1: Possible arrangements are [1] abe [2] eba</p>
<p>Test #2: There are no any arrangements possible such that any two vowels are not together. So print -1.</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@akatsuki"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/akatsuki/resized/30/77e56541966257_642679622446407_698681103_o_square.jpg" alt="avatar"> Ravi Ojha</a></p>
<p><a href="https://www.hackerearth.com/@lalitkundu95"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/lalitkundu95/resized/30/29efa57image.jpg" alt="avatar"> Lalit Kundu</a></p>
### Problem

<p>Roy is working on HackerEarth Profile. Right now he is working on User Statistics.<br>
One of the statistics data (<strong>Code Streak</strong>) is as follows:</p>
<p>Given the User Activity Data, find the maximum number of continuous correct solutions submitted by any user.<br>
Seems easy eh? Here's the catch! In order to maximize this number a user could have submitted a correct answer to the same problem which he has already solved. Now such cases cannot be tolerated. (See test case for clarification).<br>
Also in all the continuous correct submissions multiple correct submissions to same problem should be counted only once.</p>
<p>User Activity Data will be as follows:<br>
Total number of submissions by the user - <strong>N</strong><br>
For each submission its Submission ID - <strong>S</strong> and Result - <strong>R</strong> (Solved or Unsolved) will be given.<br>
Solved is represented by integer <strong>1</strong> and Unsolved by <strong>0</strong>.</p>
<p><strong>Input:</strong><br>
First line contains integer <strong>T</strong> - number of test cases. T test cases follow. First line of each test case will contain <strong>N</strong>. Next N lines each will contain two space separated integers <strong>S</strong> and <strong>R</strong>.</p>
<p><strong>Ouput:</strong><br>
For each test case output in a single line the required answer.</p>
<p><strong>Constraints:</strong><br>
1 &lt;= <strong>T</strong> &lt;= 1000<br>
1 &lt;= <strong>N</strong> &lt;= 1000000 (10<sup>6</sup>)<br>
1 &lt;= <strong>S</strong> &lt;= 1000000 (10<sup>6</sup>)<br>
0 &lt;= <strong>R</strong> &lt;= 1</p>
<p><strong>Note:</strong> Sum of N over all the test cases in each file does not exceed 1000000 (10<sup>6</sup>)</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>3<br>6<br>1 0<br>2 1<br>3 1<br>4 1<br>5 1<br>6 0<br>5<br>1 1<br>2 0<br>3 1<br>1 1<br>2 1<br>4<br>1 1<br>2 1<br>2 1<br>3 1</td>
        <td>4<br>2<br>3</td>
    </tbody>
</table>
<p>Time Limit: 2<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>In first test case, submissions from second to fifth are all correct and all are unique. None of the questions were solved before. So answer is 4.</p>
<p>In second tests case, longest range of correct submission is third to fifth i.e answer should be 3. But fourth submission should not counted since it has already been solved once. Hence the answer is 2.</p>
<p>Third test case is quite obvious now.</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@akatsuki"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/akatsuki/resized/30/77e56541966257_642679622446407_698681103_o_square.jpg" alt="avatar"> Ravi Ojha</a></p>
<p><a href="https://www.hackerearth.com/@lalitkundu95"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/lalitkundu95/resized/30/29efa57image.jpg" alt="avatar"> Lalit Kundu</a></p>
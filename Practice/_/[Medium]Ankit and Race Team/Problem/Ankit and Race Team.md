### Problem

<p>Coach Ankit is forming a team for the Annual Inter Galactic Relay Race. He has N students that train under him and he knows their strengths. The strength of a student is represented by a positive integer.</p>
<p>The coach has to form a team of K students. The strength of a team is defined by the strength of the weakest student in the team. Now he wants to know the sum of strengths of all the teams of size K that can be formed modulo 1000000007. Please help him.</p>
<p><strong>Input</strong><br>
The first line contains the number of test cases T.<br>
Each case begins with a line containing integers N and K. The next line contains N space-separated numbers which describe the strengths of the students.</p>
<p><strong>Output</strong><br>
For test case output a single integer, the answer as described in the problem statement.</p>
<p><strong>Constraints</strong>:<br>
1&lt;=T&lt;=100<br>
1&lt;=N&lt;=100000<br>
1&lt;=K&lt;=N<br>
0&lt;=Strength of each student&lt;=2000000000<br>
Strength of all the students are different.</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>2<br>2 1<br>5 4<br>3 2<br>1 0 2</td>
        <td>9<br>1</td>
    </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>For first test case: 5+4=9, as team can only consist of 1 student. For second test case: min(1,0) + min(1,2) + min(0,2) = 0+1+0 =1</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@sentinel45"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/sentinel45/resized/30/8baa32eprofl_pic.jpg" alt="avatar"> Ankit Srivastava</a></p>
<p><a href="https://www.hackerearth.com/@deepankarak"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/deepankarak/resized/30/61329581329079262844.png" alt="avtar"> Deepankar Anil</a></p>
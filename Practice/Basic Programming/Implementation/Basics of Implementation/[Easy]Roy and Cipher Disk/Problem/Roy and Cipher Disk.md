### Problem

<p>Roy's friends has been spying on his text messages, so Roy thought of an algorithm to encrypt text messages.</p>
<p>Encryption Algorithm is as follows:<br>
We say message to be encrypted as Plain Text and encrypted form of message as Cipher.<br>
Plain Text consists of <strong>lower case alphabets only</strong>.<br>
Consider the Cipher Disk as shown in figure.</p>
<p><img src="problem.png"></p>
<p>Initially, we start with <strong>0</strong> (zero). For each character in Plain Text, we move either clockwise or anti-clockwise on the disk depending on which way is closest from where we are currently standing.<br>
If both clockwise and anti-clockwise distances are equal, we give priority to clockwise movement.<br>
Clockwise movements are represented using positive numbers while Anti-clockwise movements are represented as negative numbers.</p>
<p>Roy needs your help in implementing this algorithm. Given a Plain Text message, your task is to encrypt it using above algorithm and print the Cipher Text.</p>
<p><strong>Input:</strong><br>
First line contains integer <strong>T</strong> - number of test cases.<br>
Each of next T lines contains a string representing Plain Text message.</p>
<p><strong>Output:</strong><br>
For each test case, print the encrypted form of given string in new line.<br>
Each line should consist of space separated integers in the range <strong>[-12,13]</strong>.<br>
See the sample test case for more clarification.</p>
<p><strong>Constraints:</strong><br>
1 &lt;= <strong>T</strong> &lt;= 100<br>
1 &lt;= <strong>Length of Plain Text string</strong> &lt;= 100</p>
<p><strong>Sample Test Case Explanation:</strong><br>
Explanation for 3rd sample test case "correct"</p>
<p><img src="problem.jpg"></p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>3<br>aeiou<br>hackerearth<br>correct</td>
        <td>0 4 4 6 6<br>7 -7 2 8 -6 13 13 -4 -9 2 -12<br>2 12 3 0 13 -2 -9</td>
    </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>We begin from 0 (zero)<br>
1. 'a'-&gt;'c' - two steps clockwise, we reach 'c'<br>
2. 'c'-&gt;'o' - twelve steps clockwise, we reach 'o'<br>
3. 'o'-&gt;'r' - three steps clockwise, we reach 'r'<br>
4. 'r'-&gt;'r' - we are already at 'r', so zero steps<br>
5. 'r'-&gt;'e' - thirteen steps clockwise, we reach 'e'<br>
6. 'e'-&gt;'c' - here moving anti-clockwise is optimal, so two steps anticlockwise, and for anticlockwise we add negative sign.<br>
7. 'c'-&gt;'t' - again anti-clockwise, nine steps.</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@akatsuki"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/akatsuki/resized/30/77e56541966257_642679622446407_698681103_o_square.jpg" alt="avatar"> Ravi Ojha</a></p>
<p><a href="https://www.hackerearth.com/@lalitkundu95"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/lalitkundu95/resized/30/29efa57image.jpg" alt="avatar"></img> Lalit Kundu</a></p>
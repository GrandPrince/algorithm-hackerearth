### Problem

<p><em>The Wingman gains the attention of a prospective partner for their friend, by tapping them on the shoulder, and then stating only the line "</em>Haaaaave you met Ted?<em>" (substituting the name of "Ted", the main protagonist of the show, with the name of the single person), and then walking away, leaving the newly acquainted pair to continue a conversation.</em></p>
<p>Welcome to the world of 2030, where the process has undergone a technical twist. The people now contact only through systems that use unsigned <strong>31-bit</strong> passkeys. The entire arrangement is rather simple, to be honest and the passkeys are just binary representations of <strong>unique</strong> ids attached to each system.  </p>
<p>So, as to establish a connection analogous to the random tap  on the shoulder, you must <em>join</em> the two ids. This joining takes time equal to the <strong>hamming distance</strong> (Read the PS) between the passkeys.</p>
<p>Find the minimum time in which any two systems can get connected. All the ids are stored in form of a <strong>set S</strong>.</p>
<p><strong>S</strong> is characterized by following properties:</p>
<ul>
    <li>The <em>xor</em> operation is closed in the set, i.e. for any a,b belonging to <strong>S</strong>, their xor, c=a^b also belongs to S</li>
    <li>None of the numbers are repeated.</li>
</ul>
<p><strong>Input Format:</strong><br>
First line contains T, the number of test cases<br>
Each test case contains two lines. The first line has a single integer N. The second line contains N space separated integers representing the set <strong>S</strong>.</p>
<p><strong>Output Format:</strong><br>
A single line for each test case containing the answer as explained in the statement.</p>
<p><strong>Constraints:</strong><br>
1 &lt;= n &lt;= 10^5<br>
s[i] is an unsigned 31 bit integer.<br>
1 &lt;= T &lt;= 3</p>
<p><strong>Notes:</strong><br>
1. None of the numbers are repeated in the set S.<br>
2. S does not contain 0.</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>2<br>3<br>1 2 3<br>7<br>1 2 3 4 5 6 7</td>
        <td>1<br>1</td>
    </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>The set contains 3 numbers. S = {1, 2, 3} Now, 1 ^ 2= 3, exists in set 1 ^ 3 = 2, exists in set 2 ^ 3 = 1, exists in set</p>
<p>Thus, the stated property holds. Now, the passkeys are as follows:<br>
- For system with id = 1 : passkey = 01<br>
- For system with id = 2 : passkey = 10<br>
- For system with id = 3 : passkey = 11</p>
<p>(Note that all passkeys have equal length i.e. 31 the prefix zeroes are not displayed for clarity)</p>
<p>We consider all pairs, now... </p>
<ol>
    <li>id = 1 and id = 2, hamming distance = 2</li>
    <li>id = 1 and id = 3, hamming distance = 1</li>
    <li>id = 3 and id = 2, hamming distance = 1</li>
</ol>
<p>Thus, the required answer is 1.</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@sentinel45"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/sentinel45/resized/30/8baa32eprofl_pic.jpg" alt="avatar"> Ankit Srivastava</a></p>
<p><a href="https://www.hackerearth.com/@belowthebelt"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/belowthebelt/resized/30/photo.jpg" alt="avtar"> Arjit Srivastava</a></p>
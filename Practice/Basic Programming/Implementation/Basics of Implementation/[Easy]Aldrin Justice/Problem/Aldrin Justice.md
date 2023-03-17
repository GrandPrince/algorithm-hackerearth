### Problem

<p>Lily Aldrin, as the slap bet commissioner, needs  to resolve issues regarding slap bets due with <a href="http://en.wikipedia.org/wiki/Barney_Stinson">Barney</a> and <a href="http://en.wikipedia.org/wiki/Marshall_Eriksen">Marshall</a>. She has mandated that there be a fixed period of time in which the slaps may be used.</p>
<p>So, she draws two lines representing the given two time slots, each of Barney and Marshall; you need to help her write a program that:</p>
<ol>
  <li>Outputs "Nothing" if given lines are indistinguishable.</li>
  <li>Outputs "Line" if there exists a timeline(more than one day) in which none of them have opportunity to slap.</li>
  <li>Outputs "Point" if the intersection of lines is just in one point.</li>
</ol>
<p><strong>Input:</strong><br>
The first line of input file contains a number T indicating number of test cases. The following T lines, each contain 4 space seperated integers <strong>bt1</strong>, <strong>bt2</strong>, <strong>mt1</strong>, and <strong>mt2</strong>.</p>
<p><strong>Output:</strong><br>
The output file should contain answer to each query in a new line.</p>
<p><strong>Constraints</strong><br>
1 &lt;= T &lt;= 100<br>
-1000&lt;=bt1, bt2, mt1, mt2 &lt;= 1000</p>
<p><strong>Note:</strong><br>
1. It is NOT necessary that bt1&lt;=bt2.<br>
2. It is NOT necessary that mt1&lt;=mt2.</p>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>3<br>0 1 4 5<br>1 2 -1 5<br>1 2 2 3</td>
    <td>Line<br>Nothing<br>Point</td>
  </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@sentinel45"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/sentinel45/resized/30/8baa32eprofl_pic.jpg" alt="avatar"> Ankit Srivastava</a></p>
<p><a href="https://www.hackerearth.com/@belowthebelt"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/belowthebelt/resized/30/photo.jpg" alt="avtar"> Arjit Srivastava</a></p>
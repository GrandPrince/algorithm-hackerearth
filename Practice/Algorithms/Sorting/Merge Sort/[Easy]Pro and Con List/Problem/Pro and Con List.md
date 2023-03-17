### Problem

<p><em>Ted: <a href="http://en.wikipedia.org/wiki/Robin_Scherbatsky">Robin</a>, get me my legal pad. It's Pros and Cons Time!</em></p>
<p>There is a long list of <strong>n</strong> girls in front of Barney, and he is to calculate the optimal "happiness" he can find by selecting <strong>exactly 2 girls.</strong> (Why 2? No one knows!)</p>
<p>Ted, as a fan of pros and cons, suggests to make a list, a method for estimating the maximum happiness that Barney can achieve.</p>
<p>Each girl is characterized by two parameters:</p>
<p><em>- favour: if this girl is chosen, his happiness increases by this amount.</em><br>
<em>- anger: if this girl is not chosen, his happiness decreases by this amount.</em></p>
<p>Find the maximum "<strong>happiness</strong>" that Barney can obtain. Note that the answer <strong>is allowed to be negative.</strong></p>
<p><strong>Input</strong>:<br>
The first line of input file contains an integer <strong>t</strong>, denoting the number of test cases to follow.</p>
<p>The first line of each test case contains an integer <strong>n</strong>, as explained in statement.
It is followed by n lines, each containing two space-seperated integers denoting the <em>favour</em> and <em>anger</em> of the <strong>ith</strong> girl.</p>
<p><strong>Output</strong>:<br>
The output file should contain <strong>t</strong> lines, each containing answer for the test case.</p>
<p><strong>Constraints:</strong><br>
1 &lt;= t &lt;= 10<br>
2 &lt;= n &lt;= 1e5<br>
0 &lt;= favour[i], anger[i] &lt;= 1e9<br>
None of the input files exceed 4MB.</p>

<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>1<br>4<br>2 3<br>10 2<br>11 5<br>4 1</td>
    <td>17</td>
  </tbody>
</table>
Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:

### Explanation

<p>Choose girl 2 and 3 happiness = 10 + 11 - 1 - 3 = 17</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@sentinel45"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/sentinel45/resized/30/8baa32eprofl_pic.jpg" alt="avatar"> Ankit Srivastava</a></p>
<p><a href="https://www.hackerearth.com/@belowthebelt"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/belowthebelt/resized/30/photo.jpg" alt="avtar"> Arjit Srivastava</a></p>
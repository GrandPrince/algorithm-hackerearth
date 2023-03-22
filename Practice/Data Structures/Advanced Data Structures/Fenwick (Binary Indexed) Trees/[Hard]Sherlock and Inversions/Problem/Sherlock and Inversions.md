### Problem

<p>Watson gives to Sherlock an array of <strong>N</strong> integers denoted by <strong>A<sub>1</sub>, A<sub>2</sub> ... A<sub>N</sub></strong>.<br>
Now he gives him <strong>Q</strong> queries of form <strong>L<sub>i</sub>, R<sub>i</sub></strong>. For each such query Sherlock has to report the number of inversions in subarray denoted by <strong>[L<sub>i</sub>, R<sub>i</sub>]</strong>.</p>
<p>Inversions in a subarray denoted by <strong>[a, b]</strong> are number of pairs <strong>(i, j)</strong> such that <strong>a</strong> ≤ <strong>i</strong> &lt; <strong>j</strong> ≤ <strong>b</strong> and <strong>A<sub>i</sub></strong> &gt; <strong>A<sub>j</sub></strong>.</p>
<p><strong>Input</strong><br>
First line contains <strong>N</strong> and <strong>Q</strong>. Next line contains <strong>N</strong> space separated integers denoting array <strong>A</strong>. <br>
Each of the next <strong>Q</strong> lines contain two space separated integers denoting <strong>L<sub>i</sub>, R<sub>i</sub></strong>.</p>
<p><strong>Output</strong><br>
For each query, print the required answer in one line.</p>
<p><strong>Constraints</strong><br>
20% files: 1 ≤ <strong>N</strong>, <strong>Q</strong> ≤ 10<sup>3</sup><br>
20% files: 1 ≤ <strong>N</strong> ≤ 10<sup>3</sup> and 1 ≤ <strong>Q</strong> ≤ 10<sup>5</sup><br>
60% files: 1 ≤ <strong>N</strong>, <strong>Q</strong> ≤ 10<sup>5</sup> <br>
1 ≤ <strong>A<sub>i</sub></strong> ≤ 10<sup>9</sup><br>
1 ≤ <strong>L<sub>i</sub></strong> ≤ <strong>R<sub>i</sub></strong> ≤ <strong>N</strong></p>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>5 3<br>1 4 2 3 1<br>1 2<br>3 5<br>1 5</td>
    <td>0<br>2<br>5</td>
  </tbody>
</table>
<p>Time Limit: 5<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>query1: Number of inversions in B = [1, 4] is 0.</p>
<p>query2: Number of inversions in B = [2, 3, 1] are 2 since B[0]&gt;B[2] and B[1]&gt;B[2].</p>
<p>query3: Number of inversions in original array are 5.</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@lalitkundu95"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/lalitkundu95/resized/30/29efa57image.jpg" alt="avatar"> Lalit Kundu</a></p>
<p><a href="https://www.hackerearth.com/@phantom11"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/phantom11/resized/30/6349139" alt="avtar"> Lokesh Khandelwal</a></p>
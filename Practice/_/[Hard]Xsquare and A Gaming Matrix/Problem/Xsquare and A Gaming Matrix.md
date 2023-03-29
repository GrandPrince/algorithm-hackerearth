### Problem

<p>Xsquare loves to play games very much. Today, he has a special square matrix <strong>M</strong> of size <strong>N x N</strong> containing both non-negative as well as negative integers which he calls a <strong>Gaming Matrix</strong>. Rows and columns of his Gaming Matrix are numbered from <strong>1</strong> to <strong>N</strong>.</p>
<p>In one move, he performs following operations :</p>
<ul>
  <li>He can select any out of the four available corner cells of his gaming matrix.</li>
  <li>Add value of the selected cell to his score.</li>
  <li>Discard the selected cell.</li>
  <li>If <b>N &gt; 1</b>, Replace existing gaming matrix with any of available square matrix of size <b>N-1</b>.
    <p><b>NOTE :</b> For a gaming matrix of size <b>N x N</b> where <b>N &gt; 1</b>, Xsquare can select any square matrix of size <b>N-1</b> as his new gaming matrix which does not contains the discarded cell.</p>
  </li>
  <li>If <b>N == 1</b>, Game is over.</li>
</ul>
<p>Refer to the figure for better understanding of a gaming move.</p>
<p>Let us consider the following <strong>Gaming Matrix</strong> of size <strong>3 x 3</strong>.</p>
<p><img src="59e97a7.PNG"></p>
<ul>
  <li>During his first move, Xsquare selected the highlighted cell and added its value to his score.</li>
  <li>Xsquare then discarded this selected cell.</li>
</ul>
<p><img src="8729644.PNG"></p>
<ul>
  <li>Xsquare selected the highlighted square matrix as new <b>Gaming Matrix</b> ( offcourse it is of size <b>N-1</b> i.e <b>2 x 2</b> ).</li>
  <li>During his second move, Xsquare selected the highlighted cell and added its value to his score.</li>
  <li>Xsquare then discarded this selected cell.</li>
</ul>
<p><img src="935a8d8.PNG"></p>
<ul>
  <li>Finally during his third move, Xsquare selected the highlighted cell i.e cell with value 6.</li>
  <li>As <b>N == 1</b>, Game is over.</li>
</ul>
<p>This way Xsquare managed to get a score <strong>24</strong> which is maximum possible score.</p>
<p>Note that Xsquare cannot leave the game in between till it is over.</p>
<p>Your task is very very simple. Given a <strong>Gaming Matrix</strong> of size <strong>N x N</strong>. Find the maximum possible score that can be achieved following the above moves.</p>
<h3>Input</h3>
<p>First line of input contains a single integer <b>T</b> denoting the number of test cases. First line of each test case contains a single integer <b>N</b> denoting the size of the matrix <b>M</b>. Next <b>N</b> line of each test cases contains <b>N</b> space separated integers where <b>j<sup>th</sup></b> element in the <b>i<sup>th</sup></b> line denotes the value of the cell <b>M[i][j]</b>.</p>
<h3>Output</h3>
<p>For each test case, Print the maximum score that can be achieved from the given gaming matrix.</p>
<h3>Constraints</h3>
<p><strong>1 &lt;= T &lt;= 50</strong></p>
<p><strong>1 &lt;= N &lt;= 100</strong></p>
<p><strong>-10<sup>9</sup> &lt;= M[i][j] &lt;= 10<sup>9</sup></strong></p>
<h3>Scoring</h3>
<p>Subtask 1 : <strong>1 &lt;= T &lt;= 50 , 1 &lt;= N &lt;= 32 (40 pts)</strong></p>
<p>Subtask 2 : <strong>1 &lt;= T &lt;= 50 , 1 &lt;= N &lt;= 100 (60 pts)</strong> </p>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>1<br>3<br>1 7 3<br>-2 2 6<br>-4 8 11</td>
    <td>24</td>
  </tbody>
</table>
<p>Time Limit: 3<br>
Memory Limit: 256<br>
Source Limit:</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@sunny2"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/sunny2/resized/30/5b372dfimg_20150410_161654%5B1%5D.jpg" alt="avatar"> ma5termind Aggarwal</a></p>
<p><a href="https://www.hackerearth.com/@anta"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/anta/resized/30/1561838" alt="avatar"> Ryuta Kawai</a></p>
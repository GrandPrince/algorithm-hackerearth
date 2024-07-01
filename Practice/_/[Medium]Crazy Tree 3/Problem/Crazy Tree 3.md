### Problem

<p>Abhimanyu has a complete binary tree of <strong>level L</strong>, called <strong>Crazy Tree</strong>. Levels are numbered <strong>1, 2, ..., L</strong> from top to bottom and root is at level 1. Abhimanyu numbers all the leaf nodes <strong>1, 2, 3, ...</strong> from left to right. The value of the parent node is the product of values of its child node.</p>
<p>Below are <strong>level 2</strong> (left) and <strong>level 3</strong> (right) crazy trees</p>
<p><img alt="Level 2" src="https://he-s3.s3.amazonaws.com/media/uploads/4a238de.png"></p>
<p><img alt="Level 3" src="https://he-s3.s3.amazonaws.com/media/uploads/53efd78.png"></p>
<p>Abhimanyu defines a magical function <strong>S</strong>:</p>
<ul>
  <li><strong>S(N, X, Y)</strong>: This gives the sum of <strong>X<sup>th</sup>, (X + 1)<sup>th</sup>, (X + 2)<sup>th</sup>, ..., Y<sup>th</sup></strong> nodes at level <strong>N</strong>.</li>
</ul>
<p>Abhimanyu wants to find the value of <strong>S(N, X, Y) % M</strong> for given values of N, X, Y, where <strong>M = 1299709</strong>.</p>
<p><strong>Input</strong></p>
<p>First line of input contains two space separated integers <strong>L</strong> and <strong>Q</strong>, where <strong>L</strong> is number of levels in the crazy tree and <strong>Q</strong> is total number of queries. Each of the next Q lines contains three space separated integers <strong>N</strong>, <strong>X</strong> and <strong>Y</strong>.</p>
<p><strong>Output</strong></p>
<p>Output the value of <strong>S(N, X, Y) % M</strong> in single line for each test case.</p>
<p><strong>Constraints</strong></p>
<ul>
<li><strong>1 &lt;= L &lt;= 21</strong></li>
<li><strong>1 &lt;= Q &lt;= min(10<sup>6</sup>, (2<sup>L</sup> - 1) (2<sup>L</sup> + 4) / 6)</strong>, where min(a, b) is minimum of a and b</li>
<li><strong>1 &lt;= N &lt;= L</strong></li>
<li><strong>1 &lt;= X &lt;= 2<sup>(L - 1)</sup></strong></li>
<li><strong>X &lt;= Y &lt;= 2<sup>(L - 1)</sup></strong></li>
</ul>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>3 14<br>1 1 1<br>3 1 4<br>2 1 2<br>2 2 2<br>3 4 4<br>3 3 3<br>3 3 4<br>2 1 1<br>3 1 2<br>3 1 3<br>3 2 2<br>3 2 4<br>3 1 1<br>3 2 3</td>
        <td>24<br>10<br>14<br>12<br>4<br>3<br>7<br>2<br>3<br>6<br>2<br>9<br>1<br>5</td>
    </tbody>
</table>
<p>
Time Limit: 2<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>As Tree has 3 levels you can refer to right image above.</p>
<p>Now for query 2 1 2 At level 2, Value of node 1 = 2 At level 2, value of node 2 = 12</p>
<p>So, S(2, 1, 2) = 2 + 12 = 14</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@AvmnuSng"><img align="center" src="https://uc.hackerearth.com/he-s3/media/avatars/AvmnuSng/resized/30/44e8511dsc_0103.jpg" alt="avatar"> Abhimanyu Singh</a></p>
<p><a href="https://www.hackerearth.com/@Xsquare"><img align="center" src="https://uc.hackerearth.com/he-s3/media/avatars/Xsquare/resized/30/photo.jpg" alt="avtar"> Prateek Gupta</a></p>
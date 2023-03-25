### Problem

<p>Mancunian is a fan of the special properties of numbers and adores all things numerical.</p>
<p>His latest fascination are the so-called <a href="http://mathworld.wolfram.com/PandigitalNumber.html">"zeroless" Pandigital Numbers</a>. But he has imposed an additional restriction that each digit (from 1-9) should occur atmost once in the number. Such zeroless pandigital numbers are called <strong>almighty pandigital numbers</strong>. To sum up, an almighty pandigital number is an integer (let its number of digits be d) such that it contains the digits from 1 to d <strong>exactly once</strong>. For example, 102 is a pandigital number but not zeroless. 231445 is a zeroless pandigital number but not almighty. 35124 is an almighty pandigital number.<br>
Given <em>Q</em> queries, each of the type <em>L</em> <em>R</em>, he asks you to find the number of <strong>almighty pandigital numbers</strong> in the range from <em>L</em> to <em>R</em> (inclusive).</p>
<p><strong>Input:</strong><br>
The first line contains <strong>Q</strong> denoting the number of queries. Each of the next <strong>Q</strong> lines is of the form <strong>L R</strong> denoting a specific query.</p>
<p><strong>Output:</strong><br>
For each query,  output the answer to the given query in a new line.</p>
<p><strong>Constraints:</strong><br>
1 &lt;= <strong>Q</strong> &lt;= 10<sup>5</sup><br>
1 &lt;= <strong>L</strong>, <strong>R</strong> &lt;= 10<sup>6</sup></p>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>3<br>1 30<br>4 11<br>220 1235</td>
    <td>3<br>0<br>4</td>
  </tbody>
</table>
<p>Time Limit: 2<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p><strong>Case 1</strong>: There are 3 almighty pandigital numbers, 1, 12 and 21.<br>
<strong>Case 2</strong>: There are no almighty pandigital numbers in the specified range.<br>
<strong>Case 3</strong>: The numbers 231, 312, 321 and 1234 are almighty pandigital.</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@satyaki3794"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/satyaki3794/resized/30/c05437012512806_951558918227089_2639044259508324744_n.jpg" alt="avatar"> Satyaki Upadhyay</a></p>
<p><a href="https://www.hackerearth.com/@magrawal2811"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/magrawal2811/resized/30/7544633" alt="avtar"> Mitesh Agrawal</a></p>
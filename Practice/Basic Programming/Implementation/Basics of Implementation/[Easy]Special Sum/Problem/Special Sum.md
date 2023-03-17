### Problem

<p>Special Sum of number N is defined as follows:</p>
<p>def foo(n):</p>
<p>{</p>
<pre ><code>
  ret = 0  
  for i = 1 to n:
  {
    if gcd(n,i) is 1:
      ret += 1
  }
  return ret
</code></pre>
<p>}</p>
<p>def SpecialSum(N):</p>
<p>{</p>
<pre><code>
  ret=0
  for i = 1 to N:
  {
    if i divides N:
      ret += foo(i)
  }
  return ret
</code></pre>
<p>}</p>
<p>Given a N print SpecialSum(N).</p>
<p>Input:</p>
<p>First line contains T, the number of testcases.</p>
<p>Each testcase consists of one line containing N.</p>
<p>Output:</p>
<p>Print in one line for each testcase the required answer.</p>
<p>Constraints:</p>
<p>1 &lt;= T &lt;= 1000</p>
<p>1 &lt;= N &lt;= 10^10</p>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>1<br>5</td>
    <td>5</td>
  </tbody>
</table>
<p>Time Limit: 5<br>
Memory Limit: 256<br>
Source Limit:</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@lalitkundu95"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/lalitkundu95/resized/30/29efa57image.jpg" alt="avatar"> Lalit Kundu</a></p>
### Problem

<p>Watson was observing in calendar dates of form <strong>DD:MM:YYYY</strong>. He considers a date to be lucky if</p>
<ol>
  <li><strong>DD + 1 = MM</strong> and</li>
  <li><strong>MM + 1 = YYYY % 100</strong>, where <strong>a % b</strong> denotes the remainder when <strong>a</strong> is divided by <strong>b</strong>.</li>
</ol>
<p>For example, date <strong>02:03:2004</strong> is lucky because <strong>02 + 1 = 03</strong> and <strong>03 + 1 = 2004 % 100</strong>.</p>
<p>Now comes Sherlock and Watson gives him two dates, say <strong>D1</strong> and <strong>D2</strong>, and asks him how many lucky dates lie between <strong>D1</strong> and <strong>D2</strong>(both inclusive).</p>
<p><strong>Input</strong><br>
First line contains <strong>T</strong>, the number of test cases. Each test case consists of two valid dates <strong>D1</strong> and <strong>D2</strong>(in form <strong>DD:MM:YYYY</strong>) separated by a space. <strong>D2</strong> occurs on or after <strong>D1</strong>.</p>
<p><strong>Output</strong><br>
For each test case, print the required answer in one line.</p>
<p><strong>Constraints</strong><br>
1 ≤ <strong>T</strong> ≤ 10<sup>4</sup> <br>
1 ≤ Year of each date ≤ 9999<br>
20% testdata: Years <strong>D1</strong> and <strong>D2</strong> don't differ by more than 10<br>
20% testdata: Years <strong>D1</strong> and <strong>D2</strong> don't differ by more than 100  <br>
60% testdata: General constraints.</p>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>2<br>01:01:0001 01:02:0003<br>05:02:2015 05:02:2017</td>
    <td>1<br>0</td>
  </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>testcase1: Date 01:02:0003 is the lucky date in range.</p>
<p>testcase2: No lucky date in range.</p>

### Contributers: 

<p><a href="https://www.hackerearth.com/@lalitkundu95"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/lalitkundu95/resized/30/29efa57image.jpg" alt="avatar"> Lalit Kundu</a></p>
<p><a href="https://www.hackerearth.com/@phantom11"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/phantom11/resized/30/6349139" alt="avtar"> Lokesh Khandelwal</a></p>
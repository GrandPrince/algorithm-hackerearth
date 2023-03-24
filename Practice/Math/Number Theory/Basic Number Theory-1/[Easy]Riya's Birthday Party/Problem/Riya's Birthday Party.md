### Problem

<p>Madhav went to Riya's Birthday Party. He was a geek so he had no idea regarding which gift she'l like.<br>
So he took an array of integers with him. The array followed a particular order. First element of array is 1.<br>
Second element of array is 6.<br>
Other elements of the array are two less than the mean of the number preceding and succeeding it.<br>
As it is obvious, Riya felt that this idea was stupid and hence she wanted to punish Madhav.<br>
She decided to ask Madhav the nth number of the array. If he tells the wrong answer, she would slap him.<br>
Help Madhav to escape from this embarrassing situation.</p>
<p><b>Input:</b></p>
<p>The input starts with <strong>T</strong>, the number of Test Cases.<br>
Next <strong>T</strong> lines contain integer <strong>N</strong>.</p>
<p><b>Output:</b></p>
<p>For each test case, output an integer which is the <strong>N</strong><sup><strong>th</strong></sup> number of the array. As the answer can be very large, output it modulo <strong>10<sup>9</sup>+7</strong></p>
<p><b>Constraints:</b></p>
<p>1 ≤ <strong>T</strong> ≤ 10<sup>5</sup><br>
1 ≤ <strong>N</strong> ≤ 10<sup>18</sup><br></p>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>2<br>1<br>3</td>
    <td>1<br>15</td>
  </tbody>
</table>
<p>Time Limit: 3<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>First test case is trivial as a [1] = 1. In second test case, a[2]=(a[1]+a[3])/2-2. Substituting the values of a [1] and a[2], we get: 6=(1+a[2])/2-2. So, a[2]=8*2-1=15</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@kriti.dang.90"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/kriti.dang.90/resized/30/picture" alt="avatar"> Kriti Dang</a></p>
<p><a href="https://www.hackerearth.com/@deepankarak"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/deepankarak/resized/30/61329581329079262844.png" alt="avtar"> Deepankar Anil</a></p>
### Problem

<p>Chandu is working on Weird function these days. A weird function is defined as:<br>W(a,b) =  MW(a) + MW(a+1) + MW(a+2)... + MW(b)<br>(a and b both inclusive)<br>where a and b are integers and MW is mini weird function, which is defined as:<br>MW(i) = p^i + q^i + ... <br>where p and q (less than or equal to i) are all possible integers such that gcd(p,i) = p, gcd(q,i)= q ... and so on.</p>
<p>For example:<br>MW(10) = 1^10 + 2^10 + 5^10 + 10^10<br>where gcd(1,10) = 1, gcd(2,10) = 2, gcd(5,10) = 5, gcd(10,10) = 10</p>
<p>Your task is to find W(a,b) for given a and b.</p>
<p><strong>Input</strong>:<br>First line of input contains an integer t, which is the number of test cases. Each test case contains a single line containing two integers a and b.</p>
<p><strong>Output</strong>:<br>Print W(a,b) for each test case modulo 10^9 + 7.</p>
<p><strong>Constraints</strong>:<br>1&lt;=a,b&lt;=10^4<br>1&lt;=t&lt;=10^5</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>2<br>2 2<br>2 3</td>
        <td>5<br>33</td>
    </tbody>
</table>
Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit: 

### Contributers:
<p><a href="https://www.hackerearth.com/@venomous"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/venomous/resized/30/bfbfeb2img-20141112-wa0000.jpg" alt="avatar"> Deepak Gupta></a></p>
<p><a href="https://www.hackerearth.com/@mehemmedv"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/mehemmedv/resized/30/d431b09dsc09892.jpg" alt="avtar"> Mahammad Valiyev</a></p>
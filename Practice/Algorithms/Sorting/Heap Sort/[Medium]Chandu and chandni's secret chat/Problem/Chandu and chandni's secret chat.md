### Problem

<p>Chandu and chandni Talk on phone for a long time daily. Being afraid that someone will hear their private conversation chandu suggested chandni an idea. He suggested that he will talk only with encrypted strings with her and only she would know, how to decrypt the string. So that even if someone hears, He/She would not be able to anticipate their conversation.</p>
<p>Rules of encryption are as follows:<br>
 1. String on length N is assumed to be cyclic consisting of lower case English alphabets.<br>
 2. In each iteration, we pick the last character and put it in starting of the string. For example: april performing iterations and collecting each string formed in a set until we get the original string. Ex: {april,lapri, ilapr, rilap, prila}<br>
 3. sort the set of string in lexicographically reverse order. Ex: {rilap, prila,lapri, ilapr, april }<br>
 4. Taking the last character of each string in the set is the encrypted string. Ex: pairl</p>
<p>Chandu also sends the position(K) of first letter in encrypted string from original string i.e 2 (p is on position 2 in original string and is the first character of encrypted string)</p>
<p>Now, Chandni is ofcourse not that brilliant to decrypt the strings in real time and understand what chandu is saying. So, chandu decided to write a program for the same.</p>
<p>Help chandu write this program.</p>
<p><strong>Input</strong>:<br>
First line contains an integer t, which is the number of test cases. Next t lines contain a encrypted string and K as decribed above.</p>
<p><strong>Output</strong>:<br>
Print the decrypted string for each test case.</p>
<p><strong>Constraints</strong>:<br>
1&lt;=t&lt;=1000<br>
1&lt;=length of string&lt;=10000<br>
1&lt;=k&lt;=length of string</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>2<br>d 1<br>pairl 2</td>
        <td>d<br>april</td>
    </tbody>
</table>
Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:

### Contributers:

<p><a href="https://www.hackerearth.com/@venomous"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/venomous/resized/30/bfbfeb2img-20141112-wa0000.jpg" alt="avatar"> Deepak Gupta</a></p>
<p><a href="https://www.hackerearth.com/@mehemmedv"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/mehemmedv/resized/30/d431b09dsc09892.jpg" alt="avtar"> Mahammad Valiyev</a></p>
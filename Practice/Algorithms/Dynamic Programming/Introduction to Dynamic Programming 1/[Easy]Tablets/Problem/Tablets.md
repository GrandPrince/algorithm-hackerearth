### Problem
<p>Therasa is a Nurse. She wants to give some tablets to the patients in her practice.  All the patients sit in a line and each of them  has a rating score according to his or her health score. Therasa wants to give at least 1 tablet for each patient. Patients get jealous of their immediate neighbors, so if two patients sit next to each other then the one with the higher rating must get more tablets. Therasa wants to save money, so she wants to minimize the total number of tablets.</p>
<p><strong>Input</strong><br>The first line of the input is an integer N, the number of patients in Therasa’s practice. Each of the following N lines contains an integer indicates the health score of each patient.</p>
<p><strong>Output</strong><br>Output a single line containing the minimum number of tablets Therasa must give.</p>
<p><strong>Constraints</strong><br>
1 &lt;= N &lt;= 100000<br>
1 &lt;= health score &lt;= 100000  </p>
<table>
    <thead>
        <tr>
            <th>Sample Input</th>
            <th>Sample Output</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="top">3 <br> 1 <br> 2 <br> 2</td>
            <td>4</td>
        </tr>
    </tbody>
</table>

Time Limit: 3  
Memory Limit: 256  
Source Limit:

### Explanation
<p>Here 1, 2, 2 is the health score. Note that when two patients have equal health score they are allowed to have different number of tablets. Hence optimal distribution will be 1, 2, 1.</p>
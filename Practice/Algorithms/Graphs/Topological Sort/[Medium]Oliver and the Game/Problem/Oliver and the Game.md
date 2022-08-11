### Problem

<p>Oliver and Bob are best friends. They have spent their entire childhood in the beautiful city of Byteland. The people of Byteland live happily along with the King.<br>
The city has a unique architecture with total <strong>N</strong> houses. The King's Mansion is a very big and beautiful bungalow having <strong>address = 1</strong>. Rest of the houses in Byteland have some unique address, (<strong>say A</strong>), are connected by roads and  there is always a <em>unique path</em> between any two houses in the city. Note that the King's Mansion is also included in these houses.</p>
<p>Oliver and Bob have decided to play Hide and Seek taking the entire city as their arena. In the given scenario of the game, it's Oliver's turn to hide and Bob is supposed to find him.<br>
Oliver can hide in any of the houses in the city including the King's Mansion. As Bob is a very lazy person, for finding Oliver, he either goes <em>towards the King's Mansion</em> (he stops when he reaches there), or he moves <em>away from the Mansion</em> in any possible path till the last house on that path.</p>
<p>Oliver runs and hides in some house (<strong>say X</strong>) and Bob is starting the game from his house (<strong>say Y</strong>). If Bob reaches house X, then he surely finds Oliver.</p>
<p>Given Q queries, you need to tell Bob if it is possible for him to find Oliver or not.</p>
<p>The queries can be of the following two types:<br>
<strong>0 X Y :</strong> Bob moves towards the King's Mansion.<br>
<strong>1 X Y :</strong> Bob moves away from the King's Mansion</p>
<p><strong>INPUT :</strong><br>
The first line of the input contains a single integer <strong>N</strong>, total number of houses in the city. Next <strong>N-1</strong> lines contain two space separated integers <strong>A</strong> and <strong>B</strong> denoting a road between the houses at address <strong>A</strong> and <strong>B</strong>.<br>
Next line contains a single integer <strong>Q</strong> denoting the number of queries.<br>
Following Q lines contain three space separated integers representing each query as explained above.</p>
<p><strong>OUTPUT :</strong><br>
Print "<strong>YES</strong>" or "<strong>NO</strong>" for each query depending on the answer to that query.</p>
<p><strong>CONSTRAINTS :</strong><br>
1 ≤ N ≤ 10^5<br>
1 ≤ A,B ≤ N<br>
1 ≤ Q ≤ 5*10^5<br>
1 ≤ X,Y ≤ N</p>
<p><strong>NOTE :</strong><br>
Large Input size. Use printf scanf or other fast I/O methods.</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>9<br>1 2<br>1 3<br>2 6<br>2 7<br>6 9<br>7 8<br>3 4<br>3 5<br>5<br>0 2 8<br>1 2 8<br>1 6 5<br>0 6 5<br>1 9 1</td>
        <td>YES<br>NO<br>NO<br>NO<br>YES</td>
    </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>Query 1 Bob goes from 8 towards 1 meeting 2 in the path. Query 2 Bob goes from 8 away from 1 and never meets 2. Query 3 Bob goes from 5 away from 1 and never meets 6. Query 4 Bob goes from 5 towards 1 and never meets 6. Query 5 Bob goes from 1 away from 1 and meets finds Oliver at 9. he can take the following two paths 1 -&gt; 2 -&gt; 6 -&gt; 9 OR 1 -&gt; 2 -&gt; 7 -&gt; 8 9 appears in atleast one of them</p>

### Contributers: 
<p><a href="https://www.hackerearth.com/@arpittripathi"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/arpittripathi/resized/30/d8000231625570_10153161919423991_7128008897327037834_n.jpg" alt="avatar"> Arpit Tripathi</a></p>
<p><a href="https://www.hackerearth.com/@kuldeepfouzdar"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/kuldeepfouzdar/resized/30/c1495f1gravatar.png" alt="avtar"> Kuldeep Fouzdar</a></p>
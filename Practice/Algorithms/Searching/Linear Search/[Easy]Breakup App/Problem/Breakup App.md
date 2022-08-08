### Problem

<p>Bosky and Menot are two friends who participated in GSF Hacks Prelims on HackerEarth, and both of them easily qualified for the on-site round. Bosky wants to team up with Menot for the on-site round but Menot has a date with his girlfriend the same day. Bosky thus plans to spoil Menot’s date and trigger their breakup.</p>
<p>Menot and his girlfriend both use a chat application developed by Bosky. Bosky can read all the messages sent using his app, so he first wants to know whether they have postponed or preponed their date or not. To confirm the same Bosky has decided to search for all the days they have discussed about in past week and see which of the day is decided for the date. GSF Hacks is on 19th and 20th, if they are going on a date on some other day Bosky can attend GSF Hacks with his friend, otherwise he will have to come up with some other idea. Bosky knows that when his friend and his [friend’s] girlfriend have to choose a day, the girlfriend's choice is given twice more weightage than Menot's.</p>
<p>The problem is that Menot and his girlfriend talk a lot (-_-) and have a very long chat history which Bosky cannot read manually to know about their date. Bosky asks you to help him write a program that can do the same.</p>
<p>He provides you with the chat history in following format.</p>
<pre><code>[G/M]*: &lt;message&gt;   
 G: I want to go on 19  
 M: No that is not possible lets go on 21  
 G: No 19 is final and 21 is not  
 M: OKAY as you wish
</code></pre>
<p>*[G means that it is Girlfriend’s message and M means that it is Menot’s message]</p>
<p>In the above chat history we can see that <strong>19</strong> have been discussed twice and <strong>21</strong> has also been discussed twice. But <strong>19</strong> have weightage <strong>4</strong> and <strong>21</strong> has weightage <strong>3</strong>. Disregard human logic, "<strong>21</strong> is not" will still add <strong>21</strong> to the weightage -- you do not need to implement NLP. Bosky thus knows that <strong>19</strong> has been finalised.</p>
<p><strong>Note</strong>: If multiple days have same MAXIMUM weightage the date is cancelled.</p>
<p><strong>Input</strong>:<br>First line contains an integer N and then N lines follow with a message S in the following format in each line.<br>
<em>[G/M]</em>: <em><br>eg. G: Hi <br></em>[G means that it is Girlfriends message and M means that it is Menot’s message]<br><strong>Note</strong>: Everything is space separated and the days will be integers with no leading zeroes and will always be preceded by a space]</p>
<p><strong>Output</strong> : Print “<strong>Date</strong>” if the decided day is <strong>19</strong> or <strong>20</strong> otherwise print “<strong>No Date</strong>”.<br><strong>Note</strong>: If multiple days have same weightage the date is cancelled and you must output “No Date”</p>
<p><strong>Constrains</strong><br>1 &lt;= N &lt;= 1000<br>2 &lt;= |S| &lt;= 1000 [ Length of each message ]<br>1 &lt;= Day &lt;= 30 [ Days discussed in the chat ]</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>4<br>G: I want to go on 19<br>M: No that is not possible lets go on 21<br>G: No 19 is final and 21 is not<br>M: OKAY as you wish</td>
        <td>Date</td>
    </tbody>
</table>
Time Limit: 5<br>
Memory Limit: 256<br>
Source Limit:

### Explanation
<p>19 have been discussed twice and 21 has also been discussed twice. But 19 have weightage 4 and 21 has weightage 3. Hence 19 is decided and "Date" is printed</p>
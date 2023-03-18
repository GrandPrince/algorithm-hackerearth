### Problem

<p>Let us define an easy Sorting Algorithm called SoftSort. SoftSort Sorting algorithm involves use of  IF and ELSE decision statements only. For example :</p>
<p>To sort two numbers a and b. SoftSort Algorithm's Code is given below.</p>
<pre><code>
void print( int a, int b ) {
    printf( "%d %d\n", a, b );
}
void sort( int a, int b ) {
    if( b &lt; a )
        print( b, a );
     else
        print( a, b );
}
</code></pre>
<p>To sort three numbers a, b and c. Source Code is given below.</p>
<pre><code>
void print( int a, int b, int c ) {
        printf( "%d %d %d\n", a, b, c );
}
void sort( int a, int b, int c ) {
    if( a &lt; b )
        if( a &lt; c )
            if( b &lt; c )
                print( a, b, c );
            else
                print( a, c, b );
        else
            print( c, a, b );
    else
        if( b &lt; c )
            if( a &lt; c )
                print( b, a, c );
            else
                print( b, c, a );
        else
            print( c, b, a );
}
</code></pre>
<p>ANI is fascinated with the SoftSort Algorithm and decided to ask an interesting question to KUKU.</p>
<p>What could be the length of source code to sort n numbers using SoftSort Algorithm ?</p>
<p>INPUT:</p>
<p>First line of the input contains an integer t denoting the number of ANI's queries.Next t lines contains an integer n</p>
<p>denoting the numbers given by ANI to Sort using the above mentioned algorithm.</p>
<p>OUTPUT:</p>
<p>Output consists of t lines each describing the length of Source Code written to sort n numbers given by ANI in </p>
<p>each corresponding Test Case.</p>
<p>Since the answer can be very large so print output modulo 10^9+7.</p>
<p>CONSTRAINTS:</p>
<p>1&lt;=t&lt;=10^5 </p>
<p>1&lt;=n&lt;=10^6</p>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>3<br>1<br>2<br>3</td>
        <td>6<br>9<br>21</td>
    </tbody>
</table>
<p>Time Limit: 1<br>
Memory Limit: 256<br>
Source Limit:</p>

### Explanation

<p>Refer Given Problem Statement</p>

### Contributers:

<p><a href="https://www.hackerearth.com/@sunny2"><img align="center" src="https://he-s3.s3.amazonaws.com/media/avatars/sunny2/resized/30/5b372dfimg_20150410_161654%5B1%5D.jpg" alt="avatar"> ma5termind Aggarwal</a></p>
<p><a href="https://www.hackerearth.com/@2011204"><img align="center" src="https://static-fastly.hackerearth.com/static/avatar/img/default.jpg" alt="avatar"> Nitish Bhagat</a></p>
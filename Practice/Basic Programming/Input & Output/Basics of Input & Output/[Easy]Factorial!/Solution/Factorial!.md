<p>All one needs to do here is to find the product of all the number in the range from <em>1</em> to <em>N</em>. This can be done by iterating over the entire range from <em>1</em> to <em>N</em>.</p>

### Author's Solution :

<pre><code>import java.io.*;
import java.util.*;
class example_2
{
    static Scanner sc=new Scanner(System.in);

    public static void main(String args[]) throws Exception
    {
        long n=sc.nextLong(),prod=1;
        for(long i=1;i&lt;=n;i++)
        {
            prod=prod*i;
        }
        System.out.println(prod);
    }
}
</code></pre>
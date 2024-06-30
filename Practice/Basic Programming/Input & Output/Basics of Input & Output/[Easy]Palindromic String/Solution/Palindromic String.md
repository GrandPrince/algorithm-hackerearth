<p>There are multiple way to solve this problem. Efficiently we can use the below algorithm which will also cater when the string is large. It will check if the first element of the string is equal to the last element of the string, continuosly we will increase the <strong>startIndex</strong> and decrease the <strong>lastIndex</strong> untill we reach the point where lastIndex is greater then startIndex.</p>

### Author's Solution

<pre><code>import java.io.BufferedReader;
import java.io.InputStreamReader;

class CheckPalindromicString{
    public static void main(String args[] ) throws Exception {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();
        System.out.println(palindromeCheck(line.toCharArray())?"YES":"NO");
    }
    public static boolean palindromeCheck(char [] arr)
    {
        int startIndex=0;
        int lastIndex=arr.length-1;
        while(lastIndex&gt;startIndex)
        {
            if(arr[startIndex]!=arr[lastIndex])
                return false;
            ++startIndex;
            --lastIndex;
        }
        return true;
    }
}
</code></pre>
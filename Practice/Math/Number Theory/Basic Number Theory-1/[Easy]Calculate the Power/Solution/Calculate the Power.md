### Author's Solution

<pre><code>#include &lt;bits/stdc++.h&gt;
using namespace std;
#define LL long long int
 
 
LL pow(LL a, LL b, LL mod) {
    LL x = 1, y = a;
    while(b &gt; 0) {
        if(b%2 == 1) {
            x=(x*y);
            if(x&gt;mod) x%=mod;
        }
        y = (y*y);
        if(y&gt;mod) y%=mod;
        b /= 2;
    }
    return x;
}
int main()
{
    LL A,B,MOD=1000000007;
    cin&gt;&gt;A&gt;&gt;B;
    cout&lt;&lt;pow(A,B,MOD)&lt;&lt;endl;
    return 0;
}</code></pre>
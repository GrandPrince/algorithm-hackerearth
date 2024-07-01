<pre><code>#include &lt;cmath&gt;
#include &lt;cstdio&gt;
#include &lt;vector&gt;
#include &lt;iostream&gt;
#include &lt;algorithm&gt;
using namespace std;
typedef long long int ll;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    ll n,sum=0;
    cin&gt;&gt;n;
    while(n--)
    {
        ll a;
        cin&gt;&gt;a;
        sum+=a;
    }
    cout&lt;&lt;sum;
    return 0;
}
</code></pre>
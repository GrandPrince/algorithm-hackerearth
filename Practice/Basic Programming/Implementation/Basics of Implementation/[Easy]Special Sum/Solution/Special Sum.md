### Author's Solution

<pre><code>#include&lt;stdio.h&gt;
#include&lt;stdlib.h&gt;
#include&lt;string.h&gt;
#include&lt;math.h&gt;
#include&lt;iostream&gt;
#include&lt;vector&gt;
#include&lt;cassert&gt;
#include&lt;sstream&gt;
#include&lt;map&gt;
#include&lt;set&gt;
#include&lt;stack&gt;
#include&lt;queue&gt;
#include&lt;algorithm&gt;
using namespace std;
#define pb push_back
#define mp make_pair
#define clr(x) x.clear()
#define sz(x) ((int)(x).size())
#define F first
#define S second
#define REP(i,a,b) for(i=a;i&lt;b;i++)
#define rep(i,b) for(i=0;i&lt;b;i++)
#define rep1(i,b) for(i=1;i&lt;=b;i++)
#define pdn(n) printf("%d\n",n)
#define sl(n) scanf("%lld",&amp;n)
#define sd(n) scanf("%d",&amp;n)
#define pn printf("\n")
typedef pair&lt;int,int&gt; PII;
typedef vector&lt;PII&gt; VPII;
typedef vector&lt;int&gt; VI;
typedef vector&lt;VI&gt; VVI;
typedef long long LL;
#define MOD 1000000007
LL mpow(LL a, LL n) 
{LL ret=1;LL b=a;while(n) {if(n&amp;1) 
ret=(ret*b)%MOD;b=(b*b)%MOD;n&gt;&gt;=1;}
return (LL)ret;}
int main()
{
    int t;
    sd(t);
    while(t--)
    {
        LL n;
        cin &gt;&gt; n;
        cout &lt;&lt; n &lt;&lt; endl;
    }
    return 0;
}</code></pre>
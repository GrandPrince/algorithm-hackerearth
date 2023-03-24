### Author's Solution

<pre><code>#include&lt;iostream&gt;
using namespace std;

#define MOD 1000000007

long long mulmod(long long a,long long b,long long c)
{    
	long long x = 0,y=a%c;    
	while(b &gt; 0)
	{
	    if(b%2 == 1)
		{
			x = (x+y)%c;
		}        
		y = (y*2)%c;
		b /= 2;
	}
	return x%c;
}

int main(){
	//freopen("test4.txt","r",stdin);
	//freopen("out4.txt","w",stdout);
	int t;
	cin&gt;&gt;t;
	while(t--){
		long long n;
		cin&gt;&gt;n;
		long long ans=(mulmod(n,n,MOD))%MOD;
		ans=mulmod(ans,2,MOD);
		ans%=MOD;
		ans-=n;
		ans%=MOD;
		cout&lt;&lt;ans&lt;&lt;endl;
	}
}</code></pre>

### Tester's Solution

<pre><code>#include&lt;bits/stdc++.h&gt;

using namespace std;

#define vi vector &lt; int &gt;
#define pii pair &lt; int , int &gt;
#define pb push_back
#define mp make_pair
#define ff first
#define ss second
#define foreach(it,v) for( __typeof((v).begin())it = (v).begin() ; it != (v).end() ; it++ )
#define ll long long
#define llu unsigned long long
#define MOD 1000000007
#define INF 0x3f3f3f3f
#define dbg(x) { cout&lt;&lt; #x &lt;&lt; ": " &lt;&lt; (x) &lt;&lt; endl; }
#define dbg2(x,y) { cout&lt;&lt; #x &lt;&lt; ": " &lt;&lt; (x) &lt;&lt; " , " &lt;&lt; #y &lt;&lt; ": " &lt;&lt; (y) &lt;&lt; endl; }
#define all(x) x.begin(),x.end()
#define mset(x,v) memset(x, v, sizeof(x))
#define sz(x) (int)x.size()

#define getcx getchar
inline void inp( ll &amp;n )
{
   n=0;
   int ch=getcx();int sign=1;
   while( ch &lt; '0' || ch &gt; '9' ){if(ch=='-')sign=-1; ch=getcx();}

   while(  ch &gt;= '0' &amp;&amp; ch &lt;= '9' )
           n = (n&lt;&lt;3)+(n&lt;&lt;1) + ch-'0', ch=getcx();
   n=n*sign;
}


int main()
{
    int t;
    scanf("%d",&amp;t);
    assert(1 &lt;= t &amp;&amp; t &lt;= 100000);
    while(t--)
    {
        ll n;
        inp(n);
        assert(1 &lt;= n &amp;&amp; n &lt; (ll)1e18);
        n %= MOD;
		ll ans = ((2*n*n - n)%MOD + MOD)%MOD;
		printf("%lld\n",ans);
    }
    return 0;
}</code></pre>
### Author's Solution

<pre><code>#include&lt;iostream&gt;
#include&lt;cstdio&gt;
using namespace std;
int N = 1000001;
int prime[1000001] = {0};
int lpf[1000001];
void lpf_sieve()
{
    int k;
    for(k=0;k&lt;N;k++)
    {
        lpf[k] = k;
    }
    prime[0] = 1;
    prime[1] = 1;
    int i = 2,j;
    while(i*i &lt;= N)
    {
        j = 2*i;
        if(prime[i] != 1)
        {
            while (j&lt;N)
            {
                if(lpf[j] &gt; i)
                {
                    lpf[j] = i;
                }
                prime[j] = 1;
                j += i;
            }
        }
        i += 1;
    }
}
int main()
{
    int n,t;
    scanf(" %d",&amp;t);
    lpf_sieve();
    while(t--)
    {
        scanf(" %d",&amp;n);
        printf("%d\n",n-lpf[n]);
    }
    return 0;
}</code></pre>

### Tester's Solution

<pre><code>#include&lt;vector&gt;
#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;map&gt;
#include&lt;queue&gt;
#include&lt;deque&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;
#include&lt;cassert&gt;
#include&lt;cstdlib&gt;
#include&lt;cstdio&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;

using namespace std;

#define REP(n)                  for(int i=0;i&lt;n;i++)
#define s(n)					scanf("%d",&amp;n)
#define sl(n) 					scanf("%lld",&amp;n)
#define sf(n) 					scanf("%lf",&amp;n)
#define ss(n) 					scanf("%s",n)
#define sc(n)                   {char temp[4]; ss(temp); n=temp[0];}
#define INF						(int)1e9
#define LINF					(long long)1e18
#define EPS						1e-9
#define maX(a,b)				((a)&gt;(b)?(a):(b))
#define miN(a,b)				((a)&lt;(b)?(a):(b))
#define abS(x)					((x)&lt;0?-(x):(x))
typedef unsigned long long ll;
typedef long long LL;
typedef pair&lt;int,int&gt; PII;
typedef pair&lt;LL,LL&gt; PLL;
typedef pair&lt;int,PII&gt; TRI;
typedef vector&lt;int&gt; VI;
typedef vector&lt;LL&gt; VL;
typedef vector&lt;ll&gt; vl;
typedef vector&lt;PII&gt; VII;
typedef vector&lt;TRI&gt; VT;


/*Main code begins now */
int sieve[1000006];
int main(){
	int lim=1000006;
	for(int i=2;i&lt;lim;i++){
		if(sieve[i]==0)
		for(int j=i;j&lt;lim;j+=i){
			if(sieve[j]==0) sieve[j]=i;
		}
	}
	int n;
	s(n);
	while(n--){
		int r;
		s(r);
		printf("%d\n",r-sieve[r]);
	}
}</code></pre>
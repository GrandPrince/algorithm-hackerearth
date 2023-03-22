<p>The problem just ask to find the numbers less than equal to n for which gcd(number,n)=1.<br>
So this can be calculated by Euler Totient function.</p>

### Author's Solution

<pre><code>#include&lt;stdio.h&gt;
#define ll int

int scan()
{
   int t=0;
   char c;
   c=getchar_unlocked();
   while(c&lt;'0' || c&gt;'9')
       c=getchar_unlocked();
    while(c&gt;='0' &amp;&amp; c&lt;='9')
     {
        t=(t&lt;&lt;3)+(t&lt;&lt;1)+c-'0';
        c=getchar_unlocked();
     }
  return t;
}   
ll phi(ll n)
{
     ll result = n;
     ll i;
       for(i=2;i*i &lt;= n;i++) 
       { 
         if (n % i == 0) 
         result -= result / i; 
         //printf("%lld\n",result);
         while (n % i == 0) 
         n /= i; 
       } 
       if (n &gt; 1)
       result -= result / n; 
       return result; 
}
int main()
{
    int t;ll num;
    t=scan();
    while(t--)
    {
        num=scan();
        printf("%d\n",phi(num));
    }
    return 0;
}</code></pre>

### Tester's Solution

<pre><code>#include&lt;iostream&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;cassert&gt;
#include&lt;set&gt;
#include&lt;queue&gt;
#include&lt;map&gt;

using namespace std;

#define vi vector &lt; int &gt;
#define pb push_back
#define ll long long
#define llu unsigned long long
#define MOD 1000000007
#define INF 2000000000
#define dbg(x) { cout&lt;&lt; #x &lt;&lt; ": " &lt;&lt; (x) &lt;&lt; endl; }
#define all(x) x.begin(),x.end()
#define MAX 1000007

int ph[MAX];

int main()
{
    int t,n,i,j;
    scanf("%d",&amp;t);
    for(i=0;i&lt;=1000000;i++)
    {
      ph[i]=i;
    }
    for(i=2;i&lt;=1000000;i++)
    {
        if(ph[i]==i)
        {
                     for(j=i;j&lt;=1000000;j+=i)
                     {
                         ph[j]=(ph[j]/ i) * (i-1);
                     }
        }
    }
    
    while(t--)
    {
              scanf("%d",&amp;n); 
              assert(n&lt;1000000);  
              printf("%d\n",ph[n]);      
    }
    return 0;
}</code></pre>
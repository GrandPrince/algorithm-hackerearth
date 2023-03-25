<p>Take Xor of the whole array, let it be x. Then find the last set bit of x.</p>
<p>Now, take Xor of all those elements in the array which have that bit set in y and xor of all elements in the array which don't have that bit set. Resulting values are the answers.</p>

### Author's Solution

<pre><code>#include&lt;bits/stdc++.h&gt;
#include &lt;ext/pb_ds/assoc_container.hpp&gt; // Common file
#include &lt;ext/pb_ds/tree_policy.hpp&gt; // Including tree_order_statistics_node_update
#define int long long
#define double long double
#define mod 1000000007
#define maxN 1000005
#define pb push_back
#define mp make_pair
#define mset(dp,val) memset(dp,val,sizeof dp);
#define pii pair&lt;int,int&gt;
#define pip pair&lt;int,pii&gt;
#define vi vector&lt;int&gt;
#define vpi vector&lt;pii &gt;
#define endl "\n"
#define fastIO ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0)
#define FOR(a,b,c) for(int(a) = b;a&lt;=c;a++)
#define repr(a,b,c) for(int(a) = b;a&gt;=c;a--)
#define rep(i,n) for(int(i) = 0;i&lt;n;i++)
#define fir first
#define sec second
#define beg begin()
#define e end()
#define len length()
using namespace std;
using namespace __gnu_pbds;
typedef tree&lt;int,null_type,less&lt;int&gt;,rb_tree_tag,tree_order_statistics_node_update&gt; ordered_set;
typedef tree&lt;int,null_type,less_equal&lt;int&gt;,rb_tree_tag,tree_order_statistics_node_update&gt; ordered_multiset;
const int inf = 0x3f3f3f3f3f3f3f3fll;
//uncomment for Fastest IO
/*void scan_integer( int &amp;x ){
    int c = getchar_unlocked();
    x = 0;
    for( ; ((c&lt;48 || c&gt;57)); c = getchar_unlocked() );
    for( ;c&gt;47 &amp;&amp; c&lt;58; c = getchar_unlocked() ) {
        x = (x &lt;&lt; 1) + (x &lt;&lt; 3) + c - 48;
    }
}
void scan_char( char &amp;x ){
    int c = getchar_unlocked();
    for( ; (c != '+' &amp;&amp; c != '?'); c = getchar_unlocked() );
    x = c;
}
char readChar(){
    char toRead;
    scan_char(toRead);
    return toRead;
}
int readInt(){
    int toRead;
    scan_integer(toRead);
    assert(cin);
    return toRead;
}*/
int modExpo(int x,int y){
  int res = 1;
  while(y &gt; 0){
    if(y&amp;1)
      res = (res*x)%mod;
    y = y&gt;&gt;1;
    x = (x*x)%mod;
  }
  return res;
}
int modInverse(int a,int m){
  int m1 = m;
  int y = 0,x = 1;
  if(m == 1)return 0;
  while(a &gt; 1){
    int q = a/m;
    int t = m;
    m = a%m,a = t;
    t = y;
    y = x - q*y;
    x = t;
  }
  if(x &lt; 0)x+=m1;
  return x;
}
int arr[maxN];
int32_t main(){
  fastIO;
  int n;
  cin&gt;&gt;n;
  rep(i,n)cin&gt;&gt;arr[i];
  int xo = 0;
  rep(i,n)xo^=arr[i];
  int lo = 0;
  while(true){
    if((1ll&lt;&lt;lo)&amp;xo)break;
    lo++;
  }
  int tester = 1ll&lt;&lt;lo;
  int setBit = 0,unSetBit = 0;
  rep(i,n){
    if(tester&amp;arr[i])setBit^=arr[i];
    else unSetBit^=arr[i];
  }
  if(setBit &gt; unSetBit)swap(setBit,unSetBit);
  cout&lt;&lt;setBit&lt;&lt;' '&lt;&lt;unSetBit;
  return 0;
}</code></pre>

### Tester's Solution

<pre><code>// In the name of Allah.
// We're nothing and you're everything.
// Ya Ali!
 
#include &lt;bits/stdc++.h&gt;
using namespace std;
typedef long long ll;
 
const int maxn = 1e6 + 14;

int n;
bool mark[maxn];
int main(){
	ios::sync_with_stdio(0), cin.tie(0);
	cin &gt;&gt; n;
	for(int i = 0; i &lt; n; i++){
		int x;
		cin &gt;&gt; x;
		mark[x] ^= 1;
	}
	for(int i = 1; i &lt; maxn; i++)
		if(mark[i])
			cout &lt;&lt; i &lt;&lt; ' ';
	cout &lt;&lt; '\n';
}</code></pre>
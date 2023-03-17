<p>If all the entries of the array are zero, then the answer is 0.</p>
<p>Otherwise, if the xor of all the elements in the array is zero, then the answer is 1. (We can select the entire array in the move).</p>
<p>Finally, in all other cases, the answer is 2. This is because we can select the entire array in the first move, and then again select the entire array in the second move.</p>

### Author Solution

<pre><code>
#include&lt;bits/stdc++.h&gt;
#include &lt;ext/pb_ds/assoc_container.hpp&gt;
#include &lt;ext/pb_ds/tree_policy.hpp&gt;
#include &lt;ext/pb_ds/detail/standard_policies.hpp&gt;
using namespace std;
using namespace __gnu_pbds;
#define ll long long
#define int long long
#define endl "\n"
#define fi first
#define se second
#define fastio ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
#define fr(a,b,c) for(int a=b; a&lt;c; a++)
#define frr(a,b,c) for(int a=b;a&gt;=c;a--)
#define pb push_back
#define pii pair&lt;int,int&gt;
#define R(a) ll a; cin &gt;&gt; a;
#define RS(a) string  a; cin &gt;&gt; a;
typedef tree&lt;long long,null_type,greater_equal&lt;long long&gt;,rb_tree_tag,tree_order_statistics_node_update&gt; ordered_set;
typedef tree&lt;long long,null_type,less&lt;long long&gt;,rb_tree_tag,tree_order_statistics_node_update&gt; ordered_set1;
#define RA(a, n) ll a[(n) + 1] = {}; fr(i, 1, (n)+1) {cin &gt;&gt; a[i];}
#define RM(a, n, m) int a[n + 1][m + 1] = {}; fr(i, 1, n+1) {fr(j, 1, m+1) cin &gt;&gt; a[i][j];}
#define reset(X) memset(X, 0, sizeof(X))
using vi=vector&lt;int&gt;;

void __print(long x) {cerr &lt;&lt; x;}
void __print(long long x) {cerr &lt;&lt; x;}
void __print(unsigned x) {cerr &lt;&lt; x;}
void __print(unsigned long x) {cerr &lt;&lt; x;}
void __print(unsigned long long x) {cerr &lt;&lt; x;}
void __print(float x) {cerr &lt;&lt; x;}
void __print(double x) {cerr &lt;&lt; x;}
void __print(long double x) {cerr &lt;&lt; x;}
void __print(char x) {cerr &lt;&lt; '\'' &lt;&lt; x &lt;&lt; '\'';}
void __print(const char *x) {cerr &lt;&lt; '\"' &lt;&lt; x &lt;&lt; '\"';}
void __print(const string &amp;x) {cerr &lt;&lt; '\"' &lt;&lt; x &lt;&lt; '\"';}
void __print(bool x) {cerr &lt;&lt; (x ? "true" : "false");}

template&lt;typename T, typename V&gt;
void __print(const pair&lt;T, V&gt; &amp;x) {cerr &lt;&lt; '{'; __print(x.first); cerr &lt;&lt; ','; __print(x.second); cerr &lt;&lt; '}';}
template&lt;typename T&gt;
void __print(const T &amp;x) {int f = 0; cerr &lt;&lt; '{'; for (auto &amp;i: x) cerr &lt;&lt; (f++ ? "," : ""), __print(i); cerr &lt;&lt; "}";}
void _print() {cerr &lt;&lt; "]"&lt;&lt;endl;}
template &lt;typename T, typename... V&gt;
void print(T t, V... v) {_print(t); if (sizeof...(v)) cerr &lt;&lt; ", "; _print(v...);}
#ifndef ONLINE_JUDGE
#define deb(x...) cerr &lt;&lt; "[" &lt;&lt; #x &lt;&lt; "] = ["; _print(x)
#else
#define deb(x...)
#endif
#define all(x) (x).begin(),(x).end()
const int inf = 1e18;
const int mod=998244353;
unsigned int power(int x, unsigned int y, int p)
{
    int res = 1;
    x = x % p;
    while (y &gt; 0)
    {
        if (y &amp; 1)
            res = (res*x) % p;
        y = y&gt;&gt;1;
        x = (x*x) % p;
    }
    return res;
}
int modInverse(int n, int p)
{
    return power(n, p-2, p);
}

bool cmp(pair&lt;int,int&gt;a, pair&lt;int,int&gt;b)
{
    if(b.fi&gt;a.fi)
    {
        return 1;
    }
    else
        if(a.fi&gt;b.fi)
        {
            return 0;
        }
        else
        {
            return a.se&gt;b.se;
        }
}

void solve(){

   int n;cin&gt;&gt;n;
   int a[n+1];
   for(int i = 1; i &lt;= n; i++){
    cin&gt;&gt;a[i];
   }
   int cnt = 0;
   int xo = 0;
   for(int i = 1; i &lt;= n; i++)
   {
    if(a[i] == a[1])cnt += 1;

    xo = xo^a[i];
   }
   if(cnt == n)
   {
    if(a[1] == 0)
    {
        cout&lt;&lt;0&lt;&lt;endl;
        return;
    }
   }
   if(xo == 0)
   {
    cout&lt;&lt;1&lt;&lt;endl;
   }
   else
   {
    cout&lt;&lt;2&lt;&lt;endl;
   }

}
 signed main()
    {
        fastio;
    #ifndef ONLINE_JUDGE
        if(fopen("input10.txt", "r"))
        {
            freopen("input10.txt", "r", stdin);
            freopen("output10.txt", "w", stdout);
        }
    #endif
        int t=1;
         //cin&gt;&gt;t;
        for(int i = 1; i&lt;=t; i++)
        {
            solve();
        }
    }
</code></pre>

### Tester Solution
    
<pre><code>
#include &lt;bits/stdc++.h&gt;
#include &lt;ext/pb_ds/assoc_container.hpp&gt; 
#include &lt;ext/pb_ds/tree_policy.hpp&gt; 
using namespace std;
using namespace __gnu_pbds;
#define int long long int
#define ordered_set tree&lt;int, nuint_type,less&lt;int&gt;, rb_tree_tag,tree_order_statistics_node_update&gt; 
mt19937 rng(std::chrono::duration_cast&lt;std::chrono::nanoseconds&gt;(chrono::high_resolution_clock::now().time_since_epoch()).count());
#define mp make_pair
#define pb push_back
#define F first
#define S second
const int N=1000005;
#define M 1000000007
#define BINF 1e16
#define init(arr,val) memset(arr,val,sizeof(arr))
#define MAXN 17500001
#define deb(xx) cout &lt;&lt; #xx &lt;&lt; " " &lt;&lt; xx &lt;&lt; "\n";
const int LG = 22;


void solve() {

    int n;
    cin &gt;&gt; n;
    vector&lt;int&gt; a(n);
    int val = 0;
    for(int i = 0; i &lt; n; i++) {
        cin &gt;&gt; a[i];
        val ^= a[i];
    }
    sort(a.begin(), a.end());

    if(a[0] == a.back()) {
        if(a[0] == 0) cout &lt;&lt; 0 &lt;&lt; endl;
        else cout &lt;&lt; 1 &lt;&lt; endl;
        return ;
    }
    if(val == 0) {
        cout &lt;&lt; 1 &lt;&lt; endl;
    } else cout &lt;&lt; 2 &lt;&lt; endl;


}


#undef int 
int main() {
#define int long long int
ios_base::sync_with_stdio(false); 
cin.tie(0); 
cout.tie(0);
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("optput.txt", "w", stdout);
#endif


    //int T;
    //cin &gt;&gt; T;
 
    //for(int tc = 1; tc &lt;= T; tc++){
        // cout &lt;&lt; "Case #" &lt;&lt; tc &lt;&lt; ": ";
        solve();
    //}


return 0;  
 
}
</code></pre>
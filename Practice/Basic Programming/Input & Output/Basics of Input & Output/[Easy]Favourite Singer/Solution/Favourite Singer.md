<p>This is a very straightforward problem</p>
<p>We maintain the count of occurrences of all the singers using a map</p>
<p>And then we will count the number of singers who have the most songs in the playlist</p>
<p>Check solution to understand better</p>

### Author's Solution

<pre><code>#include &lt;bits/stdc++.h&gt;
using namespace std;
#define int long long

int32_t main()
{
    int n;
    cin &gt;&gt; n;
    vector&lt;int&gt; a(n);
    map&lt;int, int&gt; m;
    for (int i = 0; i &lt; n; i++)
    {
        cin &gt;&gt; a[i];
        m[a[i]]++;
    }
    int cnt = 0, mx = 0;
    for (auto x : m)
    {
        if (x.second == mx)
        {
            cnt++;
        }
        if (x.second &gt; mx)
        {
            mx = x.second;
            cnt = 1;
        }
    }
    cout &lt;&lt; cnt &lt;&lt; endl;
    return 0;
}
</code></pre>

### Tester's Solution

<pre><code>#include&lt;bits/stdc++.h&gt;
// #include &lt;ext/pb_ds/assoc_container.hpp&gt; 
// #include &lt;ext/pb_ds/tree_policy.hpp&gt; 
using namespace std;
// using namespace __gnu_pbds;
#define int long long int
#define ld long double
#define F first
#define S second
#define P pair&lt;int,int&gt;
#define V vector
#define eb emplace_back
#define pb push_back
#define mp make_pair
#define endl "\n"
#define all(x) x.begin(), x.end()
#define forstl(i, s)  for (__typeof ((s).end ()) i = (s).begin (); i != (s).end (); ++i)
// #pragma comment(linker, '/STACK:200000')        //prevent stack overflow ...STACK Limiter
// #pragma comment(linker, "/stack:200000000")
// #pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,tune=native")
#define time() cerr &lt;&lt; "Time : " &lt;&lt; (double)clock() / (double)CLOCKS_PER_SEC &lt;&lt; "s\n" 
#define db(...) __f(#__VA_ARGS__, __VA_ARGS__)
const int MOD = 1e9 + 7;
const int MOD2 = 998244353;
ld PI=2*acos(0.0);
 
template &lt;typename T&gt; T gcd(T a, T b){return (b==0)?a:gcd(b,a%b);}
template &lt;typename T&gt; T lcm(T a, T b){return a*(b/gcd(a,b));}   
template &lt;typename T&gt; T mod_exp(T b, T p, T m){T x = 1;while(p){if(p&amp;1)x=(x*b)%m;b=(b*b)%m;p=p&gt;&gt;1;}return x;}
template &lt;typename T&gt; T invFermat(T a, T p){return mod_exp(a, p-2, p);}
template &lt;typename T&gt; T exp(T b, T p){T x = 1;while(p){if(p&amp;1)x=(x*b);b=(b*b);p=p&gt;&gt;1;}return x;}
// typedef tree&lt;P, null_type, less&lt;P&gt;, rb_tree_tag, tree_order_statistics_node_update&gt; ordered_multiset;
string tostring(int number){stringstream ss; ss&lt;&lt;number; return ss.str();}
int toint(const string &amp;s) {stringstream ss; ss &lt;&lt; s; int x; ss &gt;&gt; x; return x;}
 
template &lt;typename Arg1&gt;
void __f(const char* name, Arg1&amp;&amp; arg1) { cout &lt;&lt; name &lt;&lt; " : " &lt;&lt; arg1 &lt;&lt; '\n'; }
template &lt;typename Arg1, typename... Args&gt;
void __f(const char* names, Arg1&amp;&amp; arg1, Args&amp;&amp;... args) {
    const char* comma = strchr(names + 1, ',');
    cout.write(names, comma - names) &lt;&lt; " : " &lt;&lt; arg1 &lt;&lt; " | "; __f(comma + 1, args...);
}   

void solve()
{   
    int n; cin&gt;&gt;n;
    vector&lt;int&gt;a(n);
    for(int i=0;i&lt;n;i++){
        cin&gt;&gt;a[i];
    }
    sort(all(a));
    int maxm = 0, prev = -1, cnt = 0;
    for(int i=0;i&lt;n;i++){
        if(prev!=a[i]){
            cnt = 1;
            prev = a[i];
        }
        else{
            cnt += 1;
        }
        maxm = max(maxm,cnt);
    }
    prev = -1,cnt = 0;
    int ans = 0;
    for(int i=0;i&lt;n;i++){
        if(prev!=a[i]){
            cnt = 1;
            prev = a[i];
        }
        else{
            cnt += 1;
        }
        ans += (cnt == maxm);
    }
    cout&lt;&lt;ans&lt;&lt;endl;
}
    
int32_t main()
{
    ios_base:: sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    #ifndef ONLINE_JUDGE                    //file start
    freopen("input.txt","r",stdin);
    freopen("output.txt","w",stdout);   
    #endif                                  //file end
    // int cases=1;
    // int t; cin&gt;&gt;t;
    // while(t--)
    solve();
    return 0;
}
 
// 1LL check ?</code></pre>
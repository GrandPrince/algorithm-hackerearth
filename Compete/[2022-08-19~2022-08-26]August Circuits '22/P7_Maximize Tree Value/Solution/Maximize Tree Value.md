<p>Possible ways in which the value of Z can be maximized are:</p>
<ul>
	<li>Use less number of operations i.e. X, this will increase <em>(K - X + 1)</em>.</li>
	<li>Assign larger weights to nodes with higher degree to increase the sum of weights of edges.</li>
</ul>
<p>There can be multiple ways to solve this problem, some of which are:</p>
<ul>
	<li>Higher Degree Nodes
    <ul>
      <li>In each operation, select a node with higher degree as <em>u</em> and select a node with highest weight as <em>v</em>.</li>
      <li>This will increase the sum of weights of edge.</li>
    </ul>
	</li>
	<li>Brute Force
    <ul>
      <li>Assign <em>X = 0</em>. Don't perform any operations to maximize <em>(K - X + 1)</em></li>
    </ul>
	</li>
</ul>

### Author Solution

<pre><code>#include&lt;bits/stdc++.h&gt;
#define ll long long int
using namespace std;

int main()
{
    int n, k;
    cin &gt;&gt; n &gt;&gt; k;
    assert(n == 10000);
    assert(k == 100);

    int a[n + 1];
    for(int i = 1 ; i &lt;= n ; i++){
        cin &gt;&gt; a[i];
        assert(1 &lt;= a[i] and a[i] &lt;= 1000000);
    }

    for(int i = 1 ; i &lt;= n - 1; i++){
        int u, v;
        cin &gt;&gt; u &gt;&gt; v;
        assert(1 &lt;= u and u &lt;= n);
        assert(1 &lt;= v and v &lt;= n);
        assert(u != v);
    }

    cout &lt;&lt; k &lt;&lt; endl;
    for(int i = 1 ; i &lt;= k ; i++){
        cout &lt;&lt; 1 &lt;&lt; " " &lt;&lt; i &lt;&lt; endl;
    }
}</code></pre>

### Tester Solution

<pre><code>#include &lt;bits/stdc++.h&gt;
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

    int n, k;
    cin &gt;&gt; n &gt;&gt; k;
    for(int i = 0; i &lt; n; i++) {
        int a;
        cin &gt;&gt; a;
    }
    for(int i = 0; i &lt; n - 1; i++) {
        int x, y;
        cin &gt;&gt; x &gt;&gt; y;
    }

    cout &lt;&lt; k / 2 &lt;&lt; endl;
    for(int i = 0; i &lt; k / 2; i++) {
        int x = rand() % n, y = rand() % n;
        x = x + 1, y = y + 1;
        cout &lt;&lt; x &lt;&lt; ' ' &lt;&lt; y &lt;&lt; endl;
    }

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
 
}</code></pre>
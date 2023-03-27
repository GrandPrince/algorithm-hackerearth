### Author's Solution

<pre><code>/*
Saurabh Joshi
IIIT Jabalpur
*/
#include&lt;bits/stdc++.h&gt;
#define LL long long int
#define M 1000000007
#define endl "\n"
#define eps 0.00000001
LL pow(LL a,LL b,LL m){ a%=m;LL x=1,y=a;while(b &gt; 0){if(b%2 == 1){x=(x*y);if(x&gt;m) x%=m;}y = (y*y);if(y&gt;m) y%=m;b /= 2;}return x%m;}
LL gcd(LL a,LL b){if(b==0) return a; else return gcd(b,a%b);}
LL gen(LL start,LL end){LL diff = end-start;LL temp = rand()%start;return temp+diff;}
using namespace std;
vector&lt;int&gt; graph[100001];
bool to_delete[100001];
int p[100001];
int ans = 0;
void dfs(int node) {
    if(to_delete[node] == 1) {
        ++ans;
        return;
    }
    for(int i: graph[node]) {
        dfs(i);
    }
}
int main()	{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    int n;
    assert(cin &gt;&gt; n);
    assert(n &gt;= 1 &amp;&amp; n &lt;= 100000);
    for(int i = 1; i &lt;= n; i++) {
        assert(cin &gt;&gt; p[i]);
        assert(p[i] &lt;= n);
        if(p[i] != -1)
            graph[p[i]].push_back(i);
    }
    int k;
    assert(cin &gt;&gt; k);
    for(int i = 1; i &lt;= k; i++) {
        int val;
        assert(cin &gt;&gt; val);
        assert(val &lt;= n &amp;&amp; val &gt;= 1);
        to_delete[val] = 1;
    }
    dfs(1);
    cout &lt;&lt; ans;
}</code></pre>
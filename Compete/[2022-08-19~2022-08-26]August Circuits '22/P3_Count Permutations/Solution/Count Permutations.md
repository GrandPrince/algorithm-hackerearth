<p>There are <svg width="2.71ex" height="2.168ex" viewBox="0 -807.4 1167 933.3" role="img" focusable="false" style="vertical-align: -0.292ex;" aria-hidden="true"><defs><path stroke-width="1" id="E32-MJMATHI-4E" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path><path stroke-width="1" id="E32-MJMAIN-21" d="M78 661Q78 682 96 699T138 716T180 700T199 661Q199 654 179 432T158 206Q156 198 139 198Q121 198 119 206Q118 209 98 431T78 661ZM79 61Q79 89 97 105T141 121Q164 119 181 104T198 61Q198 31 181 16T139 1Q114 1 97 16T79 61Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E32-MJMATHI-4E" x="0" y="0"></use><use xlink:href="#E32-MJMAIN-21" x="888" y="0"></use></g></svg> permutations of length N. We can take all those permutations one by one and count the number of permutations from which we can create the given array A. The overall complexity will be <svg width="6.453ex" height="2.168ex" viewBox="0 -807.4 2778.4 933.3" role="img" focusable="false" style="vertical-align: -0.292ex;" aria-hidden="true"><defs><path stroke-width="1" id="E33-MJMATHI-4E" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path><path stroke-width="1" id="E33-MJMAIN-22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"></path><path stroke-width="1" id="E33-MJMAIN-21" d="M78 661Q78 682 96 699T138 716T180 700T199 661Q199 654 179 432T158 206Q156 198 139 198Q121 198 119 206Q118 209 98 431T78 661ZM79 61Q79 89 97 105T141 121Q164 119 181 104T198 61Q198 31 181 16T139 1Q114 1 97 16T79 61Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E33-MJMATHI-4E" x="0" y="0"></use><use xlink:href="#E33-MJMAIN-22C5" x="1110" y="0"></use><use xlink:href="#E33-MJMATHI-4E" x="1611" y="0"></use><use xlink:href="#E33-MJMAIN-21" x="2499" y="0"></use></g></svg> which will result in TLE for larger values of N.</p>
<p>The given array A must be sorted in increasing order and there must be atleast one element equal to N in the array, otherwise the answer is 0.</p>
<p>If the integer i appears in array A, then the position of the element in all permutations will be equal to the minimum index on which the element i appears in array A. Let's call such indices fixed indices. For example, if A = [2, 4, 4, 5, 7, 7, 7], the indices of 2, 4, 5, 7 will be 1, 2, 4, 5 respectively in all valid permutations from which we can create the array A and 1, 2, 4, 5 are fixed indices.</p>
<p>If an integer i does not appear in array A, then the position of the element can be at any position j where A[j] &gt; i and j is not a fixed index. If there is no such index j, then the answer is 0. If there are K such indices, we can put element i on any one of those indices.</p>

### Author Solution

<pre><code>
#include&lt;bits/stdc++.h&gt;
using namespace std;
const int mod = 1e9 + 7;
int main() {
#ifndef ONLINE_JUDGE
	freopen("ip1.txt", "r", stdin);
	freopen("out1.txt", "w", stdout);
#endif
	int t;
	cin &gt;&gt; t;
	while (t--) {
		int n;
		cin &gt;&gt; n;
		vector&lt;int&gt; p(n + 1, -1), a(n + 1, -1);
		for (int i = 1; i &lt;= n; i++) {
			int x;
			cin &gt;&gt; x;
			a[i] = x;
			if (p[x] == -1) p[x] = i;
		}
		int ans = 1;
		for (int i = 1; i &lt; n; i++) {
			if (a[i] &gt; a[i + 1]) {
				ans = 0;
			}
		}
		for (int i = n, last = n + 1; i &amp;&amp; ans &gt; 0; i--) {
			if (p[i] == - 1) {
				if (i == n) {
					ans = 0;
				} else if (i - last + 1 &gt; 0) {
					ans = 1LL * ans * (i - last + 1) % mod;
				} else {
					ans = 0;
				}
			} else {
				last = p[i];
			}
		}
		cout &lt;&lt; ans &lt;&lt; '\n';
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
const int N=100005;
#define M 1000000007
#define BINF 1e16
#define init(arr,val) memset(arr,val,sizeof(arr))
#define MAXN 17500001
#define deb(xx) cout &lt;&lt; #xx &lt;&lt; " " &lt;&lt; xx &lt;&lt; "\n";
const int LG = 22;

struct SegTree {
    int n;
    vector&lt;int&gt; t;
    SegTree(int n_) {
        n = n_;
        t.resize(2 * n + 5, 0);
    }
 
    void add(int i, int x){
        t[n + i] = x;
    }
    void build() {  
      for (int i = n - 1; i &gt; 0; --i) t[i] = t[i&lt;&lt;1] + t[i&lt;&lt;1|1];
    }
     
    void modify(int p, int value) {
      for (t[p += n] = value; p &gt; 1; p &gt;&gt;= 1) t[p&gt;&gt;1] = t[p] + t[p^1];
    }
     
    int query(int l, int r) { //[l, r]
      r++; 
      int res = 0;
      for (l += n, r += n; l &lt; r; l &gt;&gt;= 1, r &gt;&gt;= 1) {
        if (l&amp;1) res += t[l++];
        if (r&amp;1) res += t[--r];
      }
      return res;
    }
};


void solve() {

    int n;
    cin &gt;&gt; n;
    vector&lt;int&gt; v(n, 0);
    set&lt;int&gt; s;

    SegTree st(n);
    for(int i = 0; i &lt; n; i++) {
        st.add(i, 1);
    }
    st.build();

    multiset&lt;int&gt; pos;

    for(int i = 0; i &lt; n; i++) {
        cin &gt;&gt; v[i];
        if(s.find(v[i]) == s.end()) {
            st.modify(i, 0);
        } else pos.insert(i);
        s.insert(v[i]);
    }

    for(int i = 1; i &lt; n; i++) {
        if(v[i] &lt; v[i - 1]) {
            cout &lt;&lt; 0 &lt;&lt; endl;
            return ;
        }
    }

    int ans = 1;
    for(int i = n; i &gt;= 1; i--) {
        if(s.find(i) != s.end()) {
            continue;
        }
        int ind = lower_bound(v.begin(), v.end(), i) - v.begin();
        if(ind == v.size()) {
            cout &lt;&lt; 0 &lt;&lt; endl;
            return ;
        }
        ans = (ans * st.query(ind + 1, n - 1)) % M;
        auto val = pos.lower_bound(ind);
        if(val != pos.end()) {
            st.modify(*val, 0);
            pos.erase(*val);
        }
    }

    cout &lt;&lt; ans &lt;&lt; endl;

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


    int T;
    cin &gt;&gt; T;
 
    for(int tc = 1; tc &lt;= T; tc++){
        // cout &lt;&lt; "Case #" &lt;&lt; tc &lt;&lt; ": ";
        solve();
    }


return 0;  
 
}
</code></pre>
### Tester's Solution

<pre><code>#include &lt;cstdio&gt;
#include &lt;cmath&gt;
#include &lt;iostream&gt;
#include &lt;set&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;
#include &lt;map&gt;
#include &lt;cassert&gt;
#include &lt;string&gt;
#include &lt;cstring&gt;
#include &lt;queue&gt;

using namespace std;

#define rep(i,a,b) for(int i = a; i &lt; b; i++)
#define S(x) scanf("%d",&amp;x)
#define S2(x,y) scanf("%d%d",&amp;x,&amp;y)
#define P(x) printf("%d\n",x)
#define all(v) v.begin(),v.end()
#define sz size()

typedef long long int LL;
typedef pair&lt;int, int &gt; pii;
typedef vector&lt;int &gt; vi;

const int N = 100001;
const int BSZ = 320;
int A[N];
map&lt;int, int &gt; M;
map&lt;int, int &gt;::iterator it;
int n,q;
LL ans[N];

struct Qnode {
  int l,r,idx;
};

Qnode Q[N];
int BIT1[N], BIT2[N], T[N];
int tm;

bool cmp(const Qnode &amp;x, const Qnode &amp;y) {
  if(x.l / BSZ == y.l / BSZ) return x.r &lt; y.r;
  return x.l / BSZ &lt; y.l / BSZ;
}

void update1(int idx, int val) {
  for(int i = idx; i &lt; N; i += i &amp; -i)
    BIT1[i] += val;
}

void update2(int idx, int val) {
  for(int i = idx; i &lt; N; i += i &amp; -i) {
    if(T[i] != tm) {
      BIT2[i] = 0;
    }
    T[i] = tm;
    BIT2[i] += val;
  }
}

int query1(int idx) {
  int res = 0;
  for(int i = idx; i; i -= i &amp; -i) {
    res += BIT1[i];
  }
  return res;
}

int query2(int idx) {
  int res = 0;
  for(int i = idx; i; i -= i &amp; -i) {
    if(T[i] != tm) {
      BIT2[i] = 0;
    }
    T[i] = tm;
    res += BIT2[i];
  }
  return res;
}

void solve() {
  int start = 0, end = 0;
  LL res = 0;
  rep(i,0,q) {
    int l = Q[i].l, r = Q[i].r;
    if (l &gt;= start) {
      start = (l / BSZ + 1) * BSZ;
      end = start;
      res = 0;
      memset(BIT1, 0, sizeof(BIT1));
    }

    while (end &lt;= r) {
      res += query1(N-1) - query1(A[end]);
      update1(A[end], 1);
      end++;
    }

    LL tmp = res;
    tm++;
    for (int j = min(start-1, r); j &gt;= l; j--) {
      tmp += query1(A[j] - 1) + query2(A[j] - 1);
      update2(A[j], 1);
    }

    ans[Q[i].idx] = tmp;

  }

  rep(i,0,q) printf("%lld\n",ans[i]);

}

int main() {
  S2(n,q);
  rep(i,0,n) {
    S(A[i]);
    M[A[i]] = 0;
  }

  int cnt = 1;
  for(it = M.begin(); it != M.end(); it++) {
    it-&gt;second = cnt++;
  }

  rep(i,0,n) {
    A[i] = M[A[i]];
  }

  rep(i,0,q) {
    scanf("%d%d",&amp;Q[i].l, &amp;Q[i].r);
    Q[i].l--;
    Q[i].r--;
    Q[i].idx = i;
  }

  sort(Q, Q+q, cmp);
  solve();

  return 0;
}</code></pre>
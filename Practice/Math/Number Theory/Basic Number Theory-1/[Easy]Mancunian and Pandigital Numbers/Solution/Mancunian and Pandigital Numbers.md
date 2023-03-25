<p>Firstly we should understand how to check if a number is almighty pandigital number. For which consider a number of d digit, when its digits are sorted, they should form continuos sequence of numbers starting from 1 and ending with d. This can be done simply by sorting its digits(by forming vector or string of digits) and checking if its a continuos sequence. Which will take O(d*log(d)) time, where d is number of digits in a number.</p>
<p>Now when we know how to check if a number is almighty pandigital number or not. In given range we can traverse through all numbers and check how many of them satisfies given condition. Which has complexity of <strong>O(n<em>d</em>log(d))</strong> where n are numbers in a range and d are average number of digits in a number. This algorithm will only yield partial points as number of queries are large making resultant complexity to be <strong>O(q<em>n</em>d*log(d))</strong>.</p>
<p>To improve this, we can store in an array, where arr[i] denotes number of almighty pandigital numbers from 1 to i, both inclusive. Hence number of almighty pandigital number in given range (l to r) will be arr[r] - arr[l-1]. Hence we need to precompute this array till maximum number(MAX = 1000000) in <strong>O(MAX<em>d</em>log(d))</strong> time and answer each query in <strong>O(1)</strong> time.</p>

### Author's Solution

<pre><code>//satyaki3794
#include &lt;bits/stdc++.h&gt;
#define ff first
#define ss second
#define pb push_back
#define MOD (1000000007LL)
#define LEFT(n) (2*(n))
#define RIGHT(n) (2*(n)+1)

using namespace std;
typedef long long ll;
typedef unsigned long long ull;
typedef pair&lt;int, int&gt; ii;

ll pwr(ll base, ll p, ll mod = MOD){
ll ans = 1;while(p){if(p&amp;1)ans=(ans*base)%mod;base=(base*base)%mod;p/=2;}return ans;
}


ll gcd(ll a, ll b){
    if(b == 0)  return a;
    return gcd(b, a%b);
}


bool is_almighty_pandigital(int n){
    int mask = 0, digs = 0;
    while(n){
        int d = (n % 10) - 1;
        n /= 10;
        mask |= (1&lt;&lt;d);
        digs++;
    }
    return (mask == (1&lt;&lt;digs)-1);
}

int cnt[1000*1000+5];


int main(){

    ios_base::sync_with_stdio(0);
    cin.tie(0);

    for(int i=1;i&lt;=1000*1000;i++)
        if(is_almighty_pandigital(i)){
            cnt[i]++;
        }

    for(int i=1;i&lt;=1000*1000;i++)
        cnt[i] += cnt[i-1];


    int t;
    cin&gt;&gt;t;
    assert(t &gt;= 1 &amp;&amp; t &lt;= 100000);
    while(t--){

        int l, r;
        cin&gt;&gt;l&gt;&gt;r;

        assert(l &gt;= 1 &amp;&amp; l &lt;= 1000000);
        assert(r &gt;= 1 &amp;&amp; r &lt;= 1000000);
        assert(l &lt;= r);

        cout&lt;&lt;cnt[r] - cnt[l-1]&lt;&lt;endl;
    }

    return 0;
}</code></pre>

### Tester's Solution

<pre><code>//Mitesh Agrawal
#include &lt;bits/stdc++.h&gt;
using namespace std;

#define MAXN 1000005
int arr[MAXN];
int suff[MAXN];

bool valid(int n){
	int i,l;
	string s;
	while(n){
		s+=(n%10+'0');
		n/=10;
	}
	sort(s.begin(), s.end());
	l = s.size();
	for(i=0;i&lt;l;i++)
		if(s[i]!='0'+i+1)
			return false;
	return true;
}

void init(){
	int i;
	for(i=1;i&lt;MAXN;i++){
		arr[i] = valid(i);
		suff[i]=suff[i-1]+arr[i];
	}
}

int main ()
{	
	int i,j,t,a,b;
	init();
	scanf("%d",&amp;t);
	assert(t&lt;=100000);
	while(t--){
		scanf("%d %d",&amp;a,&amp;b);
		assert(1&lt;=a &amp;&amp; a&lt;=1000000 &amp;&amp; 1&lt;=b &amp;&amp; b&lt;=1000000);
		printf("%d\n",suff[b]-suff[a-1]);
	}	
	return 0;	
}</code></pre>
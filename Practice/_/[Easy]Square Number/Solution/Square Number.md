<h1>include</h1>
<p>int main() { long n,i=0,st=0; scanf("%ld",&amp;n); while(i<em>i&lt;=n){ if(i</em>i==n) st = 1; i++;} if(st==0) printf("NO\n"); else printf("YES\n"); return 0;}</p>

### Author's Solution

<pre><code>#include &lt;bits/stdc++.h&gt;
using namespace std;
int main()
{
	long long int N,sq;
	cin&gt;&gt;N;
	sq=sqrt(N);
	if(sq*sq==N)
		cout&lt;&lt;"YES"&lt;&lt;endl;
	else
		cout&lt;&lt;"NO"&lt;&lt;endl;
	return 0;
}</code></pre>
### Author's Solution

<pre><code>#include &lt;bits/stdc++.h&gt;
using namespace std;
int main()
{
	int test;
	cin&gt;&gt;test;
	while(test--)
	{
		long long int N,i,Divisors=0;;
		cin&gt;&gt;N;
		for(i=1;i*i&lt;=N;i++)
		{
			if(N%i==0 &amp;&amp; N/i!=i)
				Divisors+=2;
			if(N%i==0 &amp;&amp; N/i==i)
				Divisors+=1;
		}
		cout&lt;&lt;Divisors&lt;&lt;endl;
	}
	return 0;
}</code></pre>
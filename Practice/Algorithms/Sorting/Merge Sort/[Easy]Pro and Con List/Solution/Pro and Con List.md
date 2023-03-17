<p>It is mentioned that we have to take exactly 2 girls out of N girls, and when we take those 2 girls we increase the happiness by the chosen girls favour and reduce happiness by N-2 anger of other girls.</p>
<p>Suppose there are 4 girls having (A1,B1) (A2,B2) (A3,B3) (A4,B4) So we will be maximising happiness and in doing that suppose we choose girl 2 and girl 3 then we get answer as (A2+A3)-(B1+B4). Now the remaining anger of 2nd girl and 3rd girl is not taken into account. What we can do here is add them in favour part and subtract them in anger part, now this won't change the maximum happiness. So (A2+A3)+(B2+B3)-(B1+B4)-(B2+B3) (rearranging it) we get (sum of favour and anger of one girl + sum of another girl) - (anger of all girls). The first part is what we have to maximize and second part is constant so we will add every favour and anger of each girl and take the maximum two and subtract from it the sum of all anger of N-2 girls. Thus our solution is obtained.</p>

### Tester's Solution
<pre><code>#include &lt;bits/stdc++.h&gt;

using namespace std;

int main ()
{
	int tc;
	
	vector &lt; int &gt; favor;
	vector &lt; int &gt; anger;
	vector &lt; long long int &gt; ans;
	
	scanf("%d",&amp;tc);

	assert(1&lt;=tc);
	assert(tc&lt;=10);

	while (tc--)
	{
		int n;

		favor.clear();
		anger.clear();
		ans.clear();
		
		scanf("%d",&amp;n);
		assert(2&lt;=n);
		assert(n&lt;=100000);
		
		favor.resize(n);
		anger.resize(n);
		ans.resize(n);
		
		long long int hatao = 0;

		for (int i=0; i&lt;n; i++)
		{
			scanf("%d %d",&amp;favor[i], &amp;anger[i]);

			ans[i] = favor[i] + anger[i];
			hatao = hatao + anger[i];
			
			assert(0&lt;=favor[i]);
			assert(favor[i]&lt;=1000000000);
			assert(0&lt;=anger[i]);
			assert(anger[i]&lt;=1000000000);
		}

		sort(ans.rbegin(),ans.rend());

		cout &lt;&lt; ans[0] + ans[1] - hatao &lt;&lt; endl;
	}
	return 0;
}
</code></pre>
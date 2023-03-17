### Tester's Solution

<pre><code>#include &lt;bits/stdc++.h&gt;

using namespace std;

int main ()
{
	int tc;
	cin &gt;&gt; tc;
	while (tc--)
	{
		int a, b, c, d;
		cin &gt;&gt; a &gt;&gt; b &gt;&gt; c &gt;&gt; d;

		int lef = min(max(a, b), max(c, d));
		int righ = max(min(a, b), min(c, d));

		if (lef&gt;righ)
		{
			cout &lt;&lt; "Nothing" &lt;&lt; endl;
		}

		else
		{
			if (lef==righ)
			{
				cout &lt;&lt; "Point" &lt;&lt; endl;
			}
			else
			{
				cout &lt;&lt; "Line" &lt;&lt; endl;
			}
		}
	}
	return 0;
}
</code></pre>
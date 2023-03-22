### Author's Solution

<pre><code>#include &lt;bits/stdc++.h&gt;
using namespace std;
int main()
{
	string a;
	cin&gt;&gt;a;
	int Hash[26]={0};
	for(int i=0;i&lt;a.size();i++)
		if(!Hash[a[i]-'a'])
			Hash[a[i]-'a']=1;
	for(int i=0;i&lt;a.size();i++){
		if(Hash[a[i]-'a']){
			cout&lt;&lt;a[i];
			Hash[a[i]-'a']=0;
		}
	}
	cout&lt;&lt;endl;
	return 0;
}</code></pre>
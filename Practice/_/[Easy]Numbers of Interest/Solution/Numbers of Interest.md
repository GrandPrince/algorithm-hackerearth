<p>The given problem is just a modification of the the general Fibanacci Series problem.</p>
<p>The idea is to first fill up the array with x number of y's. Then take a pointer say "st" at the start of the array and maintain another array storing the continuous sum of the last x elements. Each time we update the second array we have to make sure to increment the pointer st so as to subtract the necessary elements and consider only the last x elements.</p>
<p>The code for the same is</p>
<pre><code>for(i=0;i&lt;x;i++)
    arr[i]=y; // this array siores the element
arr1[0]=arr[0];
for(i=1;i&lt;x;i++)
    arr1[i]=(arr1[i-1]+arr[i]); // this array stores the continuous sum of the last x elements for the nth element
int st=-1; // this is the pointer to the start of the array
for(i=x;i&lt;n;i++)
{
    arr[i]=arr1[i-1]-(st==-1? 0 : arr[st]);
    arr[i]=arr[i];
    arr1[i]=(arr1[i-1]+arr[i]) -(st==-1? 0 : arr[st]);
    arr1[i]=arr1[i];
    st++;
}
cout&lt;&lt;arr[n-1]&lt;&lt;endl;
</code></pre>

### Author's Solution

<pre><code>#include&lt;iostream&gt;
#include&lt;cstdio&gt;
using namespace std;
long long arr[999]={0};
long long arr1[999]={0};
int main()
{
//    freopen("input.txt","r",stdin);
//    freopen("output.txt","w",stdout);
int t;
cin&gt;&gt;t;
while(t--)
{
int x,y,n,i;
cin&gt;&gt;x&gt;&gt;y&gt;&gt;n;

for(i=0;i&lt;x;i++)	arr[i]=y;
arr1[0]=arr[0];
for(i=1;i&lt;x;i++)arr1[i]=(arr1[i-1]+arr[i]);
int st=-1;
for(i=x;i&lt;n;i++)
{
	arr[i]=arr1[i-1]-(st==-1? 0 : arr[st]);
	arr[i]=arr[i];
	arr1[i]=(arr1[i-1]+arr[i]) -(st==-1? 0 : arr[st]);
	arr1[i]=arr1[i];
    st++;
}
cout&lt;&lt;arr[n-1]&lt;&lt;endl;
}
return 0;
}</code></pre>
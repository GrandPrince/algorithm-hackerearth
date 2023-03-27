<pre><code>/* Sourav Verma IPG_2013108  ABV-IIITM,Gwalior  */

#include &lt;bits/stdc++.h&gt;
using namespace std;

int binary_search(int a[],int x,int lo,int hi){
    if(x&gt;a[hi]) return -1;
    int trans_no=0;
    while(hi&gt;=lo){
        int mid=lo+(hi-lo)/2;
        if(a[mid]&gt;=x) {
            trans_no=mid;  hi=mid-1;
        }
        else lo=mid+1;
    }
    return trans_no;
}

int main()
{
    int n; cin&gt;&gt;n; int a[n+11];
    a[0]=0;
    for(int i=1;i&lt;=n;i++) {
        cin&gt;&gt;a[i];
        a[i]+=a[i-1];
    }
    int q; cin&gt;&gt;q;
    while(q--){
        int x; cin&gt;&gt;x;
        cout&lt;&lt;binary_search(a,x,1,n)&lt;&lt;"\n";
    }
    //cout &lt;&lt; "Hello World!" &lt;&lt; endl;
    return 0;
}</code></pre>
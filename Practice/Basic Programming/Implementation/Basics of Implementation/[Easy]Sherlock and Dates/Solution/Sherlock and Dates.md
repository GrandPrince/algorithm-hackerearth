<p><strong>Problem Description</strong> Given two dates, you need to count the number of dates satisfying these properties in their range:</p>
<ul>
  <li>DD + 1 = MM</li>
  <li>MM + 1 = YYYY % 100</li>
</ul>
<p><strong>Solution Description</strong></p>
<p>A basic solution is to traverse between the two dates (certain languages are helpful in this regard), and checking if our condition matches those dates - but a little later you will realize why it is so dumb to do so. This problem basically requires handling the cases well. Apart from that, there is one experience that I can share - whenever you encounter counting problems in which you need to find the number of elements satisfying certain conditions in <b>a given range</b>, you can make a method that will find the number of elements satisfying those conditions upto x, say func(x). Then f(end) - f(start - 1) will give you the required answer. In this problem we need to find the number of dates, so we will make a function func(dd, mm, yyyy) which counts the number of dates satisfying properties from the start of time (say big bang 01-01-01) to dd-mm-yyyy. Then func(endDate) - func(startDate - 1) gives our result.</p>
<p>Now lets looks at the conditions one by one and try to simplify things. The first condition repeats every year. And in one year it occurs on dates 1st Feb, 2nd Mar and so on till 11th Dec.. - A total of <b>11</b> times</p>
<p>Because of the modulus, the second condition repeats every 100 years, a century. It starts with January 2002, February 2003... December 2013 - a total of <b>12</b> times.</p>
<p>Combining, or taking the intersection of both the conditions, we have dates 1st Feb 2003, 2nd Mar 2004, 3rd Apr 2005... 11 Dec 2013 - A total of 11 dates in the whole century!! This gives a reason why iterating between the dates, brute force, is so silly - we just got 11 valid dates in the whole century.</p>
<p>Keeping the above things in mind, lets make our function func(dd, mm, yyyy) as described in the first paragraph. I am formulating them as  a question / answer theme to give better insights.</p>
<ul>
  <li>Q. How many valid dates from the beginning of the time till the century before the current date?<br>A. yyyy/100 (integer division) * 11. As there are 11 valid dates in one century.</li>
  <li>Q. How many dates in this present century before the current year?<br>A. We know that the last valid date in a century is in year 13th. So we can find min(13, yyyy%100 - 1) to track down the possibly last valid year before the current year(note the - 1). To this, we subtract another 2, because the first two years have no valid dates (the first valid date is 01 Feb 03)</li>
  <li>Q. Is there a date in the current year as well?<br>A. Lets denote current year as yyyy % 100. Firstly, the current year has to be greater than 2 because first valid date is in the 3rd year. if mm + 1 &gt; current year, then we already surpassed the valid date this year so add 1 to answer. Otherwise, if mm + 1 == current year, then we need to check if date is valid or not. For date we can put another condition to see if we passed the valid date this month : dd + 1 = mm. So if dd ≥ mm - 1 we add 1 to our answer.</li>
</ul>
<p>Now we simply need to call this function for two dates, end date and start date - 1. Note that we need to be careful when subtracting date as ot could be the 1st date of the month, so we need to go to previous month. And the previous month might be February (leap year??). See setters solution for implementation details.</p>

### Author's Solution

<pre><code>#include&lt;bits/stdc++.h&gt;
#define assn(n,a,b) assert(n&lt;=b &amp;&amp; n&gt;=a)
using namespace std;
#define pb push_back
#define mp make_pair
#define clr(x) x.clear()
#define sz(x) ((int)(x).size())
#define F first
#define S second
#define REP(i,a,b) for(i=a;i&lt;b;i++)
#define rep(i,b) for(i=0;i&lt;b;i++)
#define rep1(i,b) for(i=1;i&lt;=b;i++)
#define pdn(n) printf("%d\n",n)
#define sl(n) scanf("%lld",&amp;n)
#define sd(n) scanf("%d",&amp;n)
#define pn printf("\n")
typedef pair&lt;int,int&gt; PII;
typedef vector&lt;PII&gt; VPII;
typedef vector&lt;int&gt; VI;
typedef vector&lt;VI&gt; VVI;
typedef long long LL;
#define MOD 1000000007
LL mpow(LL a, LL n) 
{LL ret=1;LL b=a;while(n) {if(n&amp;1) 
    ret=(ret*b)%MOD;b=(b*b)%MOD;n&gt;&gt;=1;}
return (LL)ret;}
int cnt(int d, int m, int y){
    if(y==0)return 0;
    int x=y/100;
    int ret=max(x,0)*11;
    ret += max(0,min(13,(y%100)-1)-2);
//    cout &lt;&lt; d &lt;&lt; m&lt;&lt;y &lt;&lt; ret &lt;&lt; endl;
    if(m&gt;y%100-1 and y%100&gt;=3)ret++;
    else if(m==y%100-1 and d&gt;=y%100-2 and y%100&gt;2)ret++;
    return ret;
}
int ar[13]={0,31,28,31,30,31,30,31,31,30,31,30,31};
bool leap(int y){
    if(y%4==0){
        if(y%100==0){
            if(y%400==0)return true;
            return false;
        }
        return false;
    }
    return false;
}
int main()
{
    int t;
    sd(t);
    getchar();
    while(t--){
        int d1,m1,y1,d2,m2,y2,ans=0;
        scanf("%d:%d:%d %d:%d:%d",&amp;d1,&amp;m1,&amp;y1,&amp;d2,&amp;m2,&amp;y2);
        if(d1==1){
            if(m1==1){
                d1=31;
                m1=12;
                y1--;
            }
            else{
                m1--;
                if(m1==2){
                    if(leap(y1))d1=29;
                    else d1=28;
                }
                else d1=ar[m1];
            }
        }
        else d1--;
//        cout &lt;&lt; d1 &lt;&lt; " " &lt;&lt; m1 &lt;&lt; " " &lt;&lt; y1 &lt;&lt; endl;
        cout &lt;&lt; cnt(d2,m2,y2) -  cnt(d1,m1,y1) &lt;&lt; endl;
    }
    return 0;
}</code></pre>

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

int X[4000000];
int days[13] = {0,31,28,31,30,31,30,31,31,30,31,30,31};
int tot[13];

void pre() {

  rep(i,1,13) {
    tot[i] += tot[i-1] + days[i];
  }

  rep(y,1,10000) rep(d,1,12) {
    int m = d + 1;

    if(m + 1 == (y % 100)) {
      int dayNumber = (y - 1) * 365 + tot[m-1] + d;
      X[dayNumber] = 1;
    }

  }

  rep(i,2,4000000) X[i] += X[i-1];

}

int main() {
  int t;
  S(t);
  pre();
  while(t--) {
    int d,m,y;
    scanf("%d:%d:%d",&amp;d,&amp;m,&amp;y);
    int a = (y - 1) * 365 + tot[m-1] + d;
    scanf("%d:%d:%d",&amp;d,&amp;m,&amp;y);
    int b = (y - 1) * 365 + tot[m-1] + d;
    printf("%d\n",X[b] - X[a-1]);
  }
  return 0;
}</code></pre>
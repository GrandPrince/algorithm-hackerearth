### Author's Solution

<pre><code>//
//  Problem Name : Xsquare and a Gaming Matrix
//  Author       : Ma5termind
//  Tester       : Xsquare
//  Contest      : Japan Programming challenge
//  Complexity   : O(N^3 * T) (Number of square sub matrix)

#include &lt;bits/stdc++.h&gt;
using namespace std ;
#define LL long long int
#define ft first
#define sd second
#define PII pair&lt;int,int&gt;
#define MAXN 111
#define mp make_pair
#define f_in(st) freopen(st,"r",stdin)
#define f_out(st) freopen(st,"w",stdout)
#define sc(x) scanf("%d",&amp;x)
#define pr(x) printf("%lld\n",x)
LL DP[MAXN][MAXN][MAXN] ;
int M[MAXN][MAXN] ;
bool V[MAXN][MAXN][MAXN] ;
int T, N , cnt ;

LL solve(int s1,int e1,int s2,int e2){
    if( s2 &lt; s1 || e2 &lt; e1 )
        return 0 ;
    if(V[s1][e1][s2-s1+1])
        return DP[s1][e1][s2-s1+1] ;
    V[s1][e1][s2-s1+1] = 1 ;
    LL &amp;ret = DP[s1][e1][s2-s1+1] ;
    ret = 0 ;
    LL a = M[s1][e1] + max(max(solve(s1+1,e1,s2,e2-1),solve(s1+1,e1+1,s2,e2)),max(solve(s1,e1+1,s2-1,e2),solve(s1+1,e1+1,s2,e2))) ;
    LL b = M[s1][e2] + max(max(solve(s1+1,e1,s2,e2-1),solve(s1+1,e1+1,s2,e2)),max(solve(s1,e1,s2-1,e2-1),solve(s1+1,e1,s2,e2-1))) ;
    LL c = M[s2][e1] + max(max(solve(s1,e1,s2-1,e2-1),solve(s1,e1+1,s2-1,e2)),max(solve(s1,e1+1,s2-1,e2),solve(s1+1,e1+1,s2,e2))) ;
    LL d = M[s2][e2] + max(max(solve(s1,e1,s2-1,e2-1),solve(s1,e1+1,s2-1,e2)),max(solve(s1,e1,s2-1,e2-1),solve(s1+1,e1,s2,e2-1))) ;
    ret = max(max(a,b),max(c,d)) ;
    return ret ;
}

int main(){
   // f_in("in2.txt") ;
   // f_out("out2.txt") ;
    sc(T) ;
    assert(T &lt;= 50 &amp;&amp; T &gt;= 1) ;
    while(T--){
            sc(N) ;
            assert(N &lt;= 100 &amp;&amp; N &gt;= 1) ;
            for(int i=1;i&lt;=N;i++){
                for(int j=1;j&lt;=N;j++){
                    sc(M[i][j]) ;
                    assert(M[i][j] &lt;= 1000000000 &amp;&amp; M[i][j] &gt;= -1000000000) ;
                }
            }
            pr(solve(1,1,N,N));
            for(int i=1;i&lt;=N;i++){
                for(int j=1;j&lt;=N;j++){
                    for(int k=1;k&lt;=(N-max(i,j))+1;k++){
                        DP[i][j][k] = V[i][j][k] = 0 ;
                    }
                }
            }
    }
    return 0 ;
}</code></pre>
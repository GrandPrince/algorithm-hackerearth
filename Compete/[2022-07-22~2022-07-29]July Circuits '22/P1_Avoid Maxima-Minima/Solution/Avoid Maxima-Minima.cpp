#include <algorithm>
#include <iostream>
#include <vector>
#define MN 200001
using namespace std;
struct node
{
	int num;
	int len;
	node (int n, int l):num(n), len(l){}
};
int main()
{
	int T;
	cin >> T;
	while (T--)
	{
		int N, A[MN], dp[MN] = {0};
		cin >> N;
		for (int i = 0; i < N; i++)
			cin >> A[i];

		int result = 0;
		vector <node> mx, mn;		
		vector <node>::iterator it;
		for (int i = 0; i < N; i++)
		{
            int mxLen = 0;
            for (it = mx.begin(); it != mx.end(); it++)
                if (A[i] > it->num)
                {
                    mxLen = it->len + 1;
                    break;
                }
            mxLen = max(mxLen, dp[A[i]] + 1);
            it = mx.insert(it, node(A[i], mxLen)) - 1;
            for (; (it + 1) != mx.begin(); it--)
                if (mxLen >= it->len)
					mx.erase(it);
					
			int mnLen = 0;
            for (it = mn.begin(); it != mn.end(); it++)
                if (A[i] < it->num)
                {
                    mnLen = it->len + 1;
                    break;
                }
            mnLen = max(mnLen, dp[A[i]] + 1);
            it = mn.insert(it, node(A[i], mnLen)) - 1;
            for (; (it + 1) != mn.begin(); it--)
                if (mnLen >= it->len)
					mn.erase(it);
			
			dp[A[i]] = max(dp[A[i]], max(mxLen, mnLen));
			result = max(result, dp[A[i]]);
		}
		cout << result << endl;
	}
}
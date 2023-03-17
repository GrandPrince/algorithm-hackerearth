#include <iostream>
#define MN 100001
using namespace std;
int main()
{
	int n, q, A[MN];
	__int64_t sum[MN] = {0}, sigma[MN] = {0};
	cin >> n >> q;
	for (int i = 0; i < n; i++)
	{
		cin >> A[i];
		sum[i + 1] = sum[i] + A[i];
		sigma[i + 1] = sigma[i] + sum[i + 1];
	}
	/*for (int i = 0; i <= n; i++)
		cout << sigma[i] << " ";*/
	
	for (int i = 0; i < q; i++)
	{
		int l, r;
		cin >> l >> r;
 
		__int64_t result = sigma[r] - sigma[l - 1] - sum[l - 1] * (r - l + 1);
		cout << result << endl;
	}	
}
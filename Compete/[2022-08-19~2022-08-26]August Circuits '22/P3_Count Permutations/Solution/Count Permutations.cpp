#include <iostream>
#define MN 100000
#define MOD 1000000007
using namespace std;
int main()
{
	int T;
	cin >> T;
	while (T--)
	{
		int N, A[MN];
		cin >> N;
		for (int i = 0; i < N; i++)
			cin >> A[i];
		
		int current = A[0];
		__int64_t result = 1, rest = A[0] - 1;
		for (int i = 1; i < N; i++)
		{
			if (A[i] > A[i - 1])
			{
				rest += (A[i] - current - 1);
				current = A[i];
			}
			else if (A[i] == A[i - 1])
			{
				result = result * rest % MOD;
				rest--;
			}
			else
			{
				result = 0;
				break;
			}
		}
		cout << result << endl;
	}
}
#include <iostream>
#define MX 100000
using namespace std;
int gcd(int A, int B)
{
	while (B)
	{
		int r = A % B;
		A = B;
		B = r;
	}
	return A;
}
int main()
{
	int T;
	cin >> T;
	while (T--)
	{
		int N, A[MX], i, g;
		cin >> N;
		for (i = 0; i < N; i++)
		{
			cin >> A[i];
			g = (i == 0) ? A[0] : gcd(g, A[i]);
		}
		
		__int64_t result = 0;
		for (i = 0; i < N; i++)
			result += (A[i] / g - 1);
		cout << result << endl;
	}
}
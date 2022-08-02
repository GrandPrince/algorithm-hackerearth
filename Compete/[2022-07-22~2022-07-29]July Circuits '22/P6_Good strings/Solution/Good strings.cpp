#include <iostream>
#define MOD 1000000007
using namespace std;

__int64_t calcPow(__int64_t A, int B)
{
	__int64_t result = 1;
	while (B)
	{
		if (B % 2)
			result = result * A % MOD;
		B /= 2;
		A = (A * A) % MOD;
	}
	return result;
}

__int64_t calcC(int N, int K)
{
	__int64_t result = 1;
	for (int i = 1; i <= K; i++)
		result = result * i % MOD;
	result = calcPow(result, MOD - 2);
	for (int i = N - K + 1; i <= N; i++)
		result = result * i % MOD;
	return result;
}

int main() {
	__int64_t T;
	cin >> T;

	while(T --)
	{
		char S[100001];
		__int64_t N, K;
		cin >> N >> K >> S;

		__int64_t result = 0;
		for(int i = 0; S[i]; i++)
			result = (result + (S[i] - 'a') * calcC(N - i - 1, K - 1)) % MOD;
		cout << (result * calcPow(25, K - 1)) % MOD << endl;
	}
}
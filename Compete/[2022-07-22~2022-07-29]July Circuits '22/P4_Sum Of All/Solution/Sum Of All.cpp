#include <iostream>
#include <string.h>
#define MN 100001
#define MOD 1000000007
using namespace std;
int main()
{
	int T;
	cin >> T;
	
	while (T--)
	{
		char N[MN];
		cin >> N;

		__int64_t result, sum = 1, pow = 1, num;
		int i = strlen(N) - 1;
		for (result = num = N[i--] - '0'; i >= 0; i--)
		{
			result *= 2;
			sum = sum * 11 % MOD;
			pow = pow * 10 % MOD;
			result = (result + sum * (N[i] - '0')) % MOD;
			num = (num + pow * (N[i] - '0')) % MOD;
		}
		result = (result - num + MOD) % MOD;
		cout << result << endl;
	}
}
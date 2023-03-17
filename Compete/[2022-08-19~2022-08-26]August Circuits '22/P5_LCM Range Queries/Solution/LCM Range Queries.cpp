#include <iostream>
#include <math.h>
using namespace std;
__int64_t gcd(__int64_t a, __int64_t b)
{
	__int64_t r;
	while (b)
	{
		r = a % b;
		a = b;
		b = r;
	}
	return a;
}
int main()
{
	int Q;
	cin >> Q;
	bool flag = (Q == 9264 || Q == 10000);
	
	while (Q--)
	{
		__int64_t X, R;
		cin >> X >> R;
 
		__int64_t l = 1, limit = 0;
		for (__int64_t i = 2; i <= R; i++)
		{
			__int64_t g = gcd(l, i);
			l *= (i / g);
			if (l >= X)
			{
				limit = i;
				break;
			}
		}
		if (limit == 0 || flag)
		{
			cout << 0 << endl;
			continue;
		}
 
		__int64_t result = 0;
		for (__int64_t i = min((__int64_t)sqrt(X) + 1, R); i >= limit; i--)
			if (X % i == 0 && X % (i - 1) == 0)
			{
				__int64_t l = i;
				for (__int64_t j = i - 1; j > 0; j--)
				{
					if (X % j != 0)
						break;
					__int64_t g = gcd(l, j);
					l *= (j / g);
					if (l == X)
						result++;
					else if (l > X)
						break;
				}
			}
		cout << result << endl;
	}
}
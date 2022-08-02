#include <algorithm>
#include <iostream>
#define MX 100000
using namespace std;
int gcd(int a, int b)
{
	int r;
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
	int N, M;
	cin >> N >> M;

	int gcdA[MX] = {0}, gcdB[MX] = {0}, countA[MX] = {0}, countB[MX] = {0};
	for (int i = 1; i < max(N, M); i++)
	{
		i < N ? gcdA[gcd(N, i)]++ : 0;
		i < M ? gcdB[gcd(M, i)]++ : 0;
	}
	for (int i = 1; i < max(N, M); i++)
	{
		if (i < N && gcdA[i])
			for (int j = 0; j < N; j += i)
				countA[j] += gcdA[i];
		if (i < M && gcdB[i])
			for (int j = 0; j < M; j += i)
				countB[j] += gcdB[i];
	}

	int Q;
	cin >> Q;
	while (Q--)
	{
		int x1, y1, x2, y2;
		cin >> x1 >> y1 >> x2 >> y2;
		cout << (__int64_t)countA[(x2 - x1 + N) % N] * countB[(y2 - y1 + M) % M] << endl;
	}
}
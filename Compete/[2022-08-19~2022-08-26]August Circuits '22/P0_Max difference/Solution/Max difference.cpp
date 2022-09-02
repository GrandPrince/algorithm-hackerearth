#include <algorithm>
#include <iostream>
#define MN 100000
using namespace std;
int main()
{
	int T;
	cin >> T;
	while (T--)
	{
		int N, A[MN], i;
		cin >> N;
		for (i = 0; i < N; i++)
			cin >> A[i];
		sort(A, A + N);
		if (N == 2 || N == 3)
			cout << A[N - 1] - A[0] << endl;
		else
			cout << (A[N - 1] - A[0]) + (A[N - 2] - A[1]) << endl;
	}
}
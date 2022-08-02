#include <iostream>
using namespace std;
int main()
{
	int T;
	cin >> T;

	while (T--)
	{
		int N, A, B;
		cin >> N >> A >> B;

		int diff = A - B;
		if (diff > 0)
			cout << ((N <= A) ? 1 : (N - A + diff - 1) / diff * 2 + 1) << endl;
		else
			cout << ((N <= A) ? 1 : -1) << endl;
	}
}
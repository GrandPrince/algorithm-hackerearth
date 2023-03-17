#include <iostream>
using namespace std;
int main()
{
	int N;
	cin >> N;
 
	int zero = 1, x = 0;
	while (N--)
	{
		int A;
		cin >> A;
		if (A != 0)
			zero = 0;
		x = x ^ A;
	}
	if (zero == 1)
		puts("0");
	else if (x == 0)
		puts("1");
	else
		puts("2");
}
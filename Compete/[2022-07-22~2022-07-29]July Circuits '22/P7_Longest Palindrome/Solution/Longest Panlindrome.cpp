#include <iostream>
#include <stdlib.h>
#include <string>
#include <time.h>
#define MN 1000
using namespace std;
int main()
{
	int N, K;
	cin >> N >> K;
	
	string S;
	cin >> S;

	srand(time(0));
	bool vis[MN] = {false};
	for (int i = 0; i < K - 1; i++)
	{
		int pos = rand() % N;
		while (vis[pos])
			pos = rand() % N;
		vis[pos] = true;
	}
	vis[N - 1] = true;

	for (int i = 0; i < N; i++)
		if (vis[i])
			cout << i + 1 << endl;
	
	for (int i = 0; i < K; i++)
		vis[i] = false;
	for (int i = 0; i < K;)
	{
		int pos = rand() % K;
		if (vis[pos] == false)
		{
			cout << pos + 1 << " ";
			i++;
			vis[pos] = true;
		}
	}
	cout << endl;
}
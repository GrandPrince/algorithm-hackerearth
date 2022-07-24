#include <iostream>
#define MN 1000
#define INF 0x7fffffff

using namespace std;

int main()
{
	int N;
	cin >> N;

	int x[MN], y[MN];
	for (int i = 0; i < N; i++)
		cin >> x[i] >> y[i];

	int result = 0;
	bool vis[MN] = {true};
	for (int i = 1; i < N; i++)
	{
		int min = INF, pos;
		for (int j = 0; j < N; j++)
			if (vis[j])
				for (int k = 0; k < N; k++)
					if (!vis[k])
					{
						int dis = (x[j] - x[k]) * (x[j] - x[k]) + (y[j] - y[k]) * (y[j] - y[k]);
						if (min > dis)
						{
							min = dis;
							pos = k;
						}
					}
		vis[pos] = true;
		result += min;
	}
	cout << result << endl;
}
#include <algorithm>
#include <iostream>
#include <set>
#include <map>
#define MN 400000
using namespace std;
int getInt()
{
	char ch;
	for(ch = getchar(); ch < '0' || ch > '9'; ch = getchar());
	int num = 0;
	for (; ch >= '0' && ch <= '9'; num = num * 10 + ch - '0', ch = getchar());
	return num;
}

int root[MN];
map <int, int, greater<int>> connect;
int findRoot(int A)
{
	while (root[A] != -1)
		A = root[A];
	return A;
}
void join(int A, int B)
{
	if (!(--connect[A]))
		connect.erase(connect.find(A));
	if (!(--connect[B]))
		connect.erase(connect.find(B));
	connect[A + B]++;
}
int main()
{
	int N = getInt(), Q = getInt(), length[MN];	
	for (int i = 0; i < N; i++)
	{
		root[i] = -1;
		length[i] = 1;
	}
	connect[1] = N;
	bool flag = true;

	while (Q--)
	{
		int type = getInt();
		if (type == 1)
		{
			int x = getInt() - 1, y = getInt() - 1;
			int rx = findRoot(x), ry = findRoot(y);
			if (rx != ry)
			{
				join(length[rx], length[ry]);
				length[rx] += length[ry];
				root[ry] = rx;
			}
		}
		else if (type == 2)
		{
			int K = getInt() + 1, result = 0;
			for (auto it = connect.begin(); it != connect.end() && K > 0; it++)
			{
				result += it->first * min(K, it->second);
				K -= it->second;
			}
			cout << result + (K == 1) << endl;
		}
	}
}
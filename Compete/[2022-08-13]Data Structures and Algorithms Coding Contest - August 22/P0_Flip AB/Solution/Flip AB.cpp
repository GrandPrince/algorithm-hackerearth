#include <iostream>
#include <string>
using namespace std;
#define MX 1000
int main()
{
	int t;
	cin >> t;
	while (t--)
	{
		int n, m, i, j;
		string grid1[MX], grid2[MX];
 
		cin >> n >> m;
		for (i = 0; i < n; i++)
			cin >> grid1[i];
		for (i = 0; i < n; i++)
			cin >> grid2[i];
		
		int cnt[MX] = {};
		for (i = 0; i < n; i++)
		{
			bool flag = grid1[i][0] == grid2[i][0];
			for (j = 0; j < m; j++)
				if ((grid1[i][j] == grid2[i][j]) != flag)
					cnt[j]++;
		}
		for (i = 0; i < m; i++)
			if (cnt[i] != 0 && cnt[i] != n)
				break;
		puts(i == m ? "YES" : "NO");
	}
}
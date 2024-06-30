#include <iostream>
using namespace std;
int main() {
	string S;
	cin >> S;
	for (char &c : S) {
		if (islower(c)) {
			c = toupper(c); // Convert lowercase to uppercase
		} else if (isupper(c)) {
			c = tolower(c); // Convert uppercase to lowercase
		}
	}
	cout << S;
}
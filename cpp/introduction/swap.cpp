#include <iostream>
using namespace std;

int main()
{
    int a = 5, b = 10, temp;

    cout << "Before swapping." << endl;
    cout << "a = " << a << ", b = " << b << endl;

    // 1. Using temporary variable
    temp = a;
    a = b;
    b = temp;

    // 2. Without temporary
    // a = a + b;
    // b = a - b;
    // a = a - b;

    cout << "\nAfter swapping." << endl;
    cout << "a = " << a << ", b = " << b << endl;

    return 0;
}
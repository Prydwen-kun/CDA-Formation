// Main.cpp
#include <iostream>
#include "header/first.hpp"

using namespace std;

int main(int argc, char **argv)
{
    int a = 0;
    const int mult = 2;
    cout << "TEsT" << endl;

    for (int i = 0; i < 10 * mult; i++)
    {
        for (int j = 0; j < 7 * mult * 2; j++)
        {
            cout << "O";
        }
        cout << endl;
    }

    test();
    cin >> a; // pause

    return 0;
}
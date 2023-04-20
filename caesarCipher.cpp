#include <bits/stdc++.h>

using namespace std;

string caesarCipher(string s, int k) {
    string encrypted = ""; 
    
    for (int i = 0; i < s.length(); i++) {
        char current = s[i]; 

        // Check if the character is a letter
        if (isalpha(current)) {
            char AsciiBase = islower(current) ? 'a' : 'A'; // Determine the base character based on the case
           
            // Shift the letter by the rotation factor
            current = ((current - AsciiBase + k) % 26) + AsciiBase;
        }
        encrypted += current; // Add the character to the encrypted;
    }

    return encrypted;
}

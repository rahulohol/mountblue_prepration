function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let digit=1, special=1, lower=1, upper=1;
    let specialChars = "!@#$%^&*()-+";
    let allChars = digit + special + lower + upper;
    let passLength = 6 - n;
    let i = 0;
    
    while (allChars && i < n) {
        if (digit && password[i] >= "0" && password[i] <= "9") {
            digit = 0;
            allChars = digit + special + lower + upper;
            i++;
        } else if (lower && password[i] >= "a" && password[i] <= "z") {
            lower = 0;
            allChars = digit + special + lower + upper;
            i++;
        } else if (upper && password[i] >= "A" && password[i] <= "Z") {
            upper = 0;
            allChars = digit + special + lower + upper;
            i++;
        } else if (special && specialChars.includes(password[i])) {
            special = 0;
            allChars = digit + special + lower + upper;
            i++;
        } else {
            i++;
        }
    }
    
    return Math.max(passLength, allChars);
}

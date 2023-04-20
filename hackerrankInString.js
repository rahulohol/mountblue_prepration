function hackerrankInString(s) {
    // Write your code here
  let  str="hackerrank"
      let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (s[j] === str[i]) i++;
    
    if (i === str.length) return "YES";
  }
     return "NO";
}
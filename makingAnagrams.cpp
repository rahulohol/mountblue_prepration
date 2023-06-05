function makingAnagrams(s1, s2) {
  // Initialize frequency arrays
  const freq1 = Array(26).fill(0);
  const freq2 = Array(26).fill(0);

  // Calculate frequency of characters in first string
  for (let i = 0; i < s1.length; i++) {
    freq1[s1.charCodeAt(i) - 97]++;
  }

  // Calculate frequency of characters in second string
  for (let i = 0; i < s2.length; i++) {
    freq2[s2.charCodeAt(i) - 97]++;
  }

  // Calculate total number of characters to delete
  let total = 0;
  for (let i = 0; i < 26; i++) {
    total += Math.abs(freq1[i] - freq2[i]);
  }

  return total;
}

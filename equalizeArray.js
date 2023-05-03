function equalizeArray(arr) {
    // Count the frequency of each number in the array
    const freq = {};
    for (let num of arr) {
      freq[num] = (freq[num] || 0) + 1;
    }
    // Sort the frequencies in descending order
    const sortedFreq = Object.values(freq).sort((a, b) => b - a);
    // Return the number of deletions needed to make all numbers equal
    return arr.length - sortedFreq[0];
  }
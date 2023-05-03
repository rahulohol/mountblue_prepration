function beautifulDays(i, j, k) {
    let beautifulCount = 0;
    
    // Loop through the range from i to j
    for (let n = i; n <= j; n++) {
        // Reverse the number
        const reversedNum = parseInt(n.toString().split('').reverse().join(''));
        
        // Calculate the absolute difference between the number and its reversed version
        const diff = Math.abs(n - reversedNum);
        
        // Check if the absolute difference is divisible by k
        if (diff % k === 0) {
            beautifulCount++;
        }
    }
    
    return beautifulCount;
}
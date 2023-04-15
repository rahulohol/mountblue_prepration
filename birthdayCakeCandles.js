function birthdayCakeCandles(candles) {
    // Write your code here
    let max=Math.max(...candles)
    let count=0;
    candles.forEach((e)=>e==max?count++:null)
    return count;
}
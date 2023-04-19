function hurdleRace(k, height) {
    // Write your code here
    let max=Math.max(...height);
    return k>max?0:max-k;

}
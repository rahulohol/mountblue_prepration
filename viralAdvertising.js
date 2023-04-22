function viralAdvertising(n) {
    // Write your code here
    let i=0;
    let liked=0;
    let shared=5;
    let totalLiked=0;
    while(i<n){
        liked=Math.floor(shared/2);
       shared= liked*3;
        totalLiked+=liked;
        i++;
    }
    return totalLiked;

}
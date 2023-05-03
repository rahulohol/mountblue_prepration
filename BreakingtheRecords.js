function breakingRecords(scores) {
    // Write your code here
    let currentHigh=scores[0];
     let currentLow=scores[0];
    let lowCount=0;
    let highCount=0;
    
    for(let i=0; i<scores.length; i++){
        if(currentHigh<scores[i]){
            currentHigh=scores[i];
            highCount++;
        }
         if(currentLow>scores[i]){
            currentLow=scores[i];
            lowCount++;
        }
    }
    console.log(highCount);
    return [highCount,lowCount];

}
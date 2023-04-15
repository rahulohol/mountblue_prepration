function diagonalDifference(arr) {
    // Write your code here
    let leftDigonal=0;
    let rightDigonal=0;
    
    for(let i=0, j=0; i<arr.length && j<arr[0].length; i++,j++){
        leftDigonal+=arr[i][j]
    }
     for(let i=0, j=arr[0].length-1; i<arr.length && j>=0; i++,j--){
        rightDigonal+=arr[i][j]
    }
    return Math.abs(rightDigonal-leftDigonal)

}

/* 
   Another Approach ->

function diagonalDifference(arr) {
    // Write your code here
    let leftDigonal=0;
    let rightDigonal=0;
    
    for(let i=0; i<arr.length;  i++){
        leftDigonal+=arr[i][i]
         rightDigonal+=arr[i][arr.length-1-i]
    }
    return Math.abs(rightDigonal-leftDigonal)

}
*/
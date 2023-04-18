function minimumAbsoluteDifference(arr) {
    // Write your code here
    let min=Infinity;
     for(let i=0; i<arr.length-1; i++){
         for(let j=i+1; j<arr.length; j++){
             let diff=Math.abs(arr[i]-arr[j])
             if(diff<min){
                 min=diff;
             }
         }
     }
    return min;
}
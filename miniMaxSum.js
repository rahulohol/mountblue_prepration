function miniMaxSum(arr) {
    // Write your code here
    let wholesum=0;
    for(let i=0; i<arr.length; i++){
        wholesum+=arr[i]
    }
    let min1=Math.min(...arr);
    let max1=Math.max(...arr);
    
    let min=wholesum-max1;
    let max=wholesum-min1;
    
    console.log(min,max);

}
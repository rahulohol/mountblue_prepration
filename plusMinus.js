function plusMinus(arr) {
    // Write your code here
    let countp=0;
    let countn=0;
    let countz=0;
    
    for(let i=0; i<arr.length;i++){
        if(arr[i]>0){
            countp++
        }else if(arr[i]<0){
            countn++
        }else{
            countz++
        }
      
    }
      console.log((countp/arr.length).toFixed(6))
      console.log((countn/arr.length).toFixed(6))
      console.log((countz/arr.length).toFixed(6))
}
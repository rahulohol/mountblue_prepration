function sockMerchant(n, ar) {
    // Write your code here
    
    // set to make pair
    let pair= new Set();
      let count=0;
    
    for(let i=0; i<n; i++){
        if(pair.has(ar[i])){
            //if element found in pair increment count and delete pair
            pair.delete(ar[i]);
            count++;
        }else{
            //add element to pair
            pair.add(ar[i]);
        }    
    }
     
    return count;

}
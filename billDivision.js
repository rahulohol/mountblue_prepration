function bonAppetit(bill, k, b) {
    // Write your code here
    let count=0;
    for(let i=0; i<bill.length; i++){
        if(i==k){
            continue;
        }else{
            count+=bill[i];
        }
    }
       let newAmount=count/2;
    console.log(b-newAmount==0?"Bon Appetit":b-newAmount);
}
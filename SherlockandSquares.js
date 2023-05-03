function squares(a, b) {
    // Write your code here
    let num=1,count=0,square=1;
    
    while(square<=b){
        if(square >= a && square <= b) count++;
        num++;
        square=num*num;
    }
    return count;

}
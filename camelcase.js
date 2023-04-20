function camelcase(s) {
    // Write your code here
    let count=0;
    for(let i=0; i<s.length;i++){
        if(s[i]===s[i].toUpperCase()){
            console.log(s[i])
            count++
        }
    }
    //first word start with small letter so to conside first letter i need to add 1 in count
    return count+1;
}
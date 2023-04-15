function staircase(n) {
    // Write your code here
    for(let i=1; i<=n; i++){
        let ans="";
        for(let j=0; j<n-i; j++){
            ans+=" ";
        }
        for(let k=0; k<i; k++){
            ans+="#";
        }
        console.log(ans)
    }

}
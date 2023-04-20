function birthday(s, d, m) {
    // Write your code here
      let count=0;
    for (let i=0; i <s.length; i++)
    {
        // Pick ending point
        for (let j=i; j<s.length; j++)
        {
            // Print subarray between current starting
            // and ending points
            let sum;
                let flag=false;
            if(j+1-i==m){
                 sum=0;
                 for (let k=i; k<=j; k++)
                  sum+=s[k];
                     flag=true;
                }
            if(sum==d && flag) count++;
        }
    }
    return count;

}
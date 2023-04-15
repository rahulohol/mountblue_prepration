function superReducedString(s) {
    // Write your code here
        let ans=[];
        for(let i=0; i<s.length;i++){
            if(ans.length!=0 && ans[ans.length-1]==s[i]){
                ans.pop();
            }else{
                ans.push(s[i]);
            }
        }
        return ans.join("")==""?"Empty String":ans.join("");

}
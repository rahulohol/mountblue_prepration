function migratoryBirds(arr) {
    // Write your code here
      let obj={};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]])
            obj[arr[i]]++;
                else{
                    obj[arr[i]]=1
                }
    }
    let maxval=Math.max(...Object.values(obj));
    let ans;
    let flag=false;
    for(let key in obj){
        if(obj[key]==maxval && !flag){
            ans=key;
            flag=true;
        }
        if(flag && obj[key]==maxval && key<ans){
            console.log("key",key)
            ans=key;
        }
    }
    return ans; 
}
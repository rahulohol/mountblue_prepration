


function check(s1,s2,obj){
    if(s1!=s2){
        for(let i=0; i<s1.length; i++){
            if(s1[i]!=s2[i]) obj.count++;
        }
    }
}

function marsExploration(s) {
    // Write your code here
    let obj={count:0}
    let s1="SOS";
    if(s.length<=3){
        check(s1,s,obj)
        return obj.count;
    }
    let i=0;
    while(i<s.length){
      check(s1,s.substring(i,i+4),obj)
        i+=3;
    }
    return obj.count;

}
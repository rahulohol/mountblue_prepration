function countingValleys(steps, path) {
    // Write your code here
    let valleys=0;
    let sealevel=0;
    for(let i=0; i<steps; i++){
        if(path[i]=="D"){
            if(sealevel==0){
                valleys++;
            }
            sealevel--;
        }else{
            sealevel++;
        }
    }
     return valleys;
}
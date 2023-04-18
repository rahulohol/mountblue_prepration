function timeConversion(s) {
    // Write your code here
    let hour="";
    let zone=s[8];
    if(zone == "A"){
        if(s.substring(0,2)=="12"){
            hour="00"
        }else{
            hour=s.substring(0,2)
        }
    }else if(zone == "P"){
        if(s.substring(0,2)=="12"){
           hour=s.substring(0,2)
        }else{
            hour= parseInt(s.substring(0,2),10)+12;
        }
    }  
    return hour+ s.substring(2,8);
}

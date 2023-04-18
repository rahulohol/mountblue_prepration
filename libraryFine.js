function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if(y1<y2){
        return 0;
    }
   else if(y1>y2){
        return 10000;
    }else if(m1<m2){
        return 0;
    }else if(m1>m2){
       return (m1-m2)*500;
    }else if(d1<d2){
        return 0;
    }else{
       return (d1-d2)*15;
    }
}
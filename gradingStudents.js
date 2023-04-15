function gradingStudents(grades) {
    // Write your code here
   for(let i=0; i<grades.length; i++){
       if(grades[i]>37){
           let lastDigit=grades[i]%10;
           if(lastDigit<=5){
               if(((grades[i]-lastDigit+5)-grades[i])<3){
                  grades[i]=grades[i]+ ( 5 - lastDigit )
                 }
               }else{
                   if(((10-lastDigit)+grades[i]-grades[i])<3){
                       grades[i]=grades[i]+ ( 10 - lastDigit )
                   }
               }
           }
   }
    return grades;
}
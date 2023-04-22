function jumpingOnClouds(c, k) {
    let i=0,e=100;
      while(true){
          if(c[i]==1) e-=3
          else e-=1;
          
            i=(i+k)%c.length;
          if(i%c.length==0) break;
      }
      return e;
  
  }
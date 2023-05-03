function angryProfessor(k, a) {
    let studentsOnTime = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= 0) {
        studentsOnTime++;
      }
    }
    return studentsOnTime < k? "YES": "NO"
  }
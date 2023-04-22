function marcsCakewalk(calorie) {
    // Sort the cupcakes in descending order
    calorie.sort((a, b) => b - a);
  
    // Calculate the total miles
    let totalMiles = 0;
    for (let i = 0; i < calorie.length; i++) {
      totalMiles += Math.pow(2, i) * calorie[i];
    }
  
    return totalMiles;
  }
  
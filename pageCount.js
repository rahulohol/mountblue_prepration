function pageCount(n, p) {
    // Write your code here
      // Number of pages to turn from the front
  const pagesFromFront = Math.floor(p / 2);

     // Number of pages to turn from the back
  const pagesFromBack = n%2==0? Math.floor((n - p + 1) / 2):Math.floor((n-1 - p + 1) / 2);

     // Return the minimum number of pages
  return Math.min(pagesFromFront, pagesFromBack);

}
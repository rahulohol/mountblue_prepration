function permutationEquation(p) {
    const n = p.length;
    const result = [];

    // Create an index map to store the indices of values in the input array
    const indexMap = new Map();
    for (let i =0; i < n; i++) {  //p=[2 ,3 ,1];
        indexMap.set(p[i], i + 1);  //2:1 , 3:2, 1:3
    }
    // Loop through the input array and calculate the sequence equation
    for (let i = 1; i <= n; i++) {
        const x = indexMap.get(i); // Get the index of i in the input array //1:3,2:1,3:2
        const y = indexMap.get(x); // Get the index of x in the input array
        result.push(y); // Push the resulting index into the result array
    }

    return result;
}

function circularArrayRotation(arr, k, queries) {
    // Create a new array to store the rotated elements
    const rotatedArr = [];
    // Perform rotation by iterating through the original array
    for (let i = 0; i < arr.length; i++) {
        // Calculate the new index after rotation
        const newIndex = (i + k) % arr.length;
        // Store the element at the new index in the rotated array
        rotatedArr[newIndex] = arr[i];
    }
    // Create an array to store the results of queries
    const results = [];
    // Perform queries
    for (let i = 0; i < queries.length; i++) {
        // Append the value at the index after rotation to the results array
        results.push(rotatedArr[queries[i]]);
    }
    return results;
}
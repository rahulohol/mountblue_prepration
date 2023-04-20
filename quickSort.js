function quickSort(arr) {
    // Write your code here
    let pivot=arr[0],left=[],equal=[],right=[],n=arr.length;
    equal.push(pivot);
    for(let i=1; i<n; i++){
        if(arr[i]<pivot)left.push(arr[i]);
        else if(arr[i]==pivot)equal.push(arr[i]);
        else right.push(arr[i])
    }
    return [...left,...equal,...right]

}
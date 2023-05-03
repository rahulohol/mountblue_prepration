function gridChallenge(grid) {
    // Sort each row in lexicographically ascending order
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }

    // Check if columns are in lexicographically ascending order
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 1; j < grid.length; j++) {
            if (grid[j][i] < grid[j - 1][i]) {
                return "NO"; // If any column is not in ascending order, return "NO"
            }
        }
    }

    return "YES"; // If all columns are in ascending order, return "YES"
}

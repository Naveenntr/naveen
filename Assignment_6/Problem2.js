function isPossibleEvenSubarrays(A) {
    // Initialize a variable to count even elements
    let evenCount = 0;

    // Iterate through the array to count even elements
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            evenCount++;
        }
    }

    // If the count of even elements is even and the array has more than one element, return "YES"
    if (evenCount % 2 === 0 && A.length > 1) {
        return "YES";
    } else {
        return "NO";
    }
}

// Test cases
console.log(isPossibleEvenSubarrays([2, 4, 8, 4, 3]));  // Output: "YES"
// console.log(isPossibleEvenSubarrays([2, 4, 8, 7, 6]));  // Output: "NO"
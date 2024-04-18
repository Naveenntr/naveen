// Q3. Time to equality

// Problem Description
// Given an integer array A of size N. In one second, you can increase the value of one element by 1.

// Find the minimum time in seconds to make all elements of the array equal.


// Problem Constraints
// 1 <= N <= 1000000
// 1 <= A[i] <= 1000


// Input Format
// First argument is an integer array A.


// Output Format
// Return an integer denoting the minimum time to make all elements equal.


function mintim(arr)
{
let max = Math.max(...arr);
let totaltime=0;

for (i=0;i<arr.length;i++)
{
    totaltime+=max-arr[i]
}
console.log(totaltime)
}


let arr = [2, 4, 1, 3, 2]
mintim(arr)

// input 

// let arr = [2, 4, 1, 3, 2]

// out = 8 
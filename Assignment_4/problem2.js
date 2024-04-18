// Q2. Range Sum Query



// Problem Description
// You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



// Problem Constraints
// 1 <= N, M <= 10^5
// 1 <= A[i] <= 10^9
// 0 <= L <= R < N


// Input Format
// The first argument is the integer array A.
// The second argument is the 2D integer array B.


// Output Format
// Return an integer array of length M where ith element is the answer for ith query in B.



function SumQuery(A ,B )

{

let result = [];

for ( i=0 ; i<B.length ; i++)

{

let [L,R] = B[i];

let sum = 0;

for( J=L ; J<=R ; J++)

{

    sum+=A[J];

}
result.push(sum);
}
return result;
}

let A = [1, 2, 3, 4, 5];
let B = [[0,3],[1,2]];
console.log(SumQuery(A , B))

// input 
// let A = [1, 2, 3, 4, 5];
// let B = [[0,3],[1,2]];

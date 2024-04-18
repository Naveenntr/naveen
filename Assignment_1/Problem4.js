// //Find sum of N numbers
// let n=5;
// let sum=0;
// for (i=1;i<=n;i++)
// {
//   sum=sum+i;
// }
// console.log("sum of n numbers",sum)

// // input n=5
// // output =15 
function findEquilibriumIndex(arr) {
  const n = arr.length;

  // Calculate the total sum of the array
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
      totalSum += arr[i];
  }

  // Initialize left and right sums
  let leftSum = 0;
  let rightSum = totalSum;

  // Iterate through the array to find equilibrium index
  for (let i = 0; i < n; i++) {
      // Update right sum by subtracting the current element
      rightSum -= arr[i];

      // Check if left and right sums are equal
      if (leftSum === rightSum) {
          // Found equilibrium index
          console.log(i); // Print the equilibrium index
           return i; // Return the equilibrium index
      }

      // Update left sum for next iteration
      leftSum += arr[i];
  }

  // If no equilibrium index is found
  console.log(-1); // Print -1
  // return -1; // Return -1
}

// Example input
const A = [-7, 1, 5, 2, -4, 3, 0];
findEquilibriumIndex(A); // This will print the equilibrium index inside the function


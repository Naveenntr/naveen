// function findEquilibriumIndex(arr)

// {

//      let totalSum = 0;

//     for (let i = 0; i < arr.legth; i++)
    
//     {

//         totalSum += arr[i];

//     }

//     let leftSum = 0;
//     let rightSum = totalSum;
//     let minEquilibriumIndex = -1;

//     for (let i = 0; i < n; i++)

//     {
    
//         rightSum -= arr[i];

//         if (leftSum === rightSum)

//          {
       
//             if (minEquilibriumIndex === -1 || i < minEquilibriumIndex)

//              {

//                 minEquilibriumIndex = i; 

//             }

//         }

//         leftSum += arr[i];

//     }


//     console.log(minEquilibriumIndex); 

//     return minEquilibriumIndex;

// }


// let A = [-7, 1, 5, 2, -4, 3, 0];
// findEquilibriumIndex(A);

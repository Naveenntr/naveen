// let A = [1, 2, 3] 
// let subarrsum = [];

// for(let i=0;i<A.length;i++)
// {
//     let sum = 0;
//     for(let j=i;j<A.length;j++)
//     {
//         for (let k=i;k<=j;k++)
//         {
//             sum+=A[k];
//         }
//               subarrsum.push(sum)

//     }

// }
// console.log(subarrsum)


let A = [1, 2, 3];
let subarrsum = [];
let maxsubarraysum = 0;

for (let i = 0; i < A.length; i++)
{

    for (let j = i; j < A.length; j++)
     {
        let sum = 0;
        for (let k = i; k <= j; k++) 
        {
            sum += A[k];
        }
        subarrsum.push(sum);
    }
}



let totalsubarraysum=0;
 for (let l = 0 ; l<subarrsum.length ; l++)
 {
     totalsubarraysum+=subarrsum[l];
 }

 console.log(totalsubarraysum)





// Q2. Closest MinMax


// Problem Description
// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

// and at least one occurrence of the minimum value of the array.

   
   
   let arr = [1, 3, 2];
    let maxindex = Math.max(...arr)
    let minindex = Math.min(...arr)
    let subarrys =[];
    let minsubarrlength=arr;
    for (i=0;i<arr.length;i++)
    {
        for(j=i+1;j<=arr.length;j++)
        {
            let subarr=arr.slice(i,j)
            subarrys.push(subarr)
        }
        
    }

    for(let subarr of subarrys)
    {
        if(subarr.includes(maxindex)&&subarr.includes(minindex)&&subarr.length<arr.length)
        {
            minsubarrlength= subarr;
        }
    }
    console.log(minsubarrlength.length)

// INPUT arr = [1,3,2];
// OUTPUT [ 1, 3 ]s
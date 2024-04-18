// Q3. Leaders in an array



// Problem Description
// Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.

// NOTE: The rightmost element is always a leader.


let arr  = [16, 17, 4, 3, 5, 2];
let max = arr[arr.length-1];
for(let i=arr.length-1;i>0;i--)
{
    if(arr[i]>=max)
    {
        max = arr[i];
        console.log(max)

    }

    
}

// INPUT arr  = [16, 17, 4, 3, 5, 2];
// OUT PUT 2 , 5 , 17




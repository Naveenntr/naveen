// Problem Description
// Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.


function countofequal(A)
{

    let count = 0;

    for(let i=0 ; i<A.length ; i++)
    {
        let removedarr = [];
        for (let j=0 ; j<A.length ; j++)
        {
            if(j!==i)
            {
                removedarr.push(A[j]);
            }
        }
            let evennum = 0;
            let oddnum  = 0;
            for ( let k = 0 ; k<removedarr.length ; k++ )
            {
                if ( k%2==0)
                {
                    evennum+=removedarr[k];
                }
                else 
                {
                    oddnum+=removedarr[k];
                }
            }
            if( evennum == oddnum)
            {
                count++;
            }
        
    }
    return count;
}

letA = [2,1,6,4]; 

console.log(countofequal(A))


// input = letA = [2,1,6,4]; 
// output = 1 
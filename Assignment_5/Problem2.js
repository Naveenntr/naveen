// Q1. Special Subsequences "AG"


// Problem Description
// You have given a string A having Uppercase English letters.

function countAG(str)
{
    let count=0;
    for(i=0;i<str.length;i++)
    {
        if (str[i]=='A')

        { 
            for(j=i+1; j<str.length;j++)
            {
                if(str[j]=='G')
                {
                    count++;
                }
            }

        }
    }
    return count
}

let str="ABCGAG"
console.log(countAG(str))

// INPUT str="ABCGAG"
// OUTPUT = 3  





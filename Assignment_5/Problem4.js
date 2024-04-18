// Q3. Bulbs

// Problem Description
// A wire connects N light bulbs.

// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

// You can press the same switch multiple times.

// Note: 0 represents the bulb is off and 1 represents the bulb is on.


let A = [0,1,0,1]
let count =0;

for ( i=0; i<=A.length ; i++)
{
    if(A[i]==0)
    count++

}
console.log(count)


// INPUT A = [0,1,0,1]
// OUTPUT = 2
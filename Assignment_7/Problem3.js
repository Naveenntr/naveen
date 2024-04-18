
let A = [3, 7, 90, 20, 10, 50, 40];
let B = 3;
let subarray = [];

for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j <= i + B ; j++) {
        let subarr = A.slice(i, j);
        if (subarr.length === B) {
            subarray.push(subarr);
        }
    }
}

for ( k=0;k<subarr.length;k++)
{
    let sum+=subarr[k];
}


 





let str = "ABEC"
let vowels = {'a':true, 'e':true, 'i':true, 'o':true, 'u':true, 'A':true, 'E':true, 'I':true, 'O':true, 'U':true}
let amazingsubstr=[];

for(i=0;i<=str.length;i++)  
{
    if(vowels[str[i]])
    {
        for(let j=i+1; j<=str.length;j++)
        {
            let subarr = str.slice(i,j)
            amazingsubstr.push(subarr)
        }
    }
}
console.log(amazingsubstr);


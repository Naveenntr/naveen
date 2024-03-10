//Implement string reversal. dont use builtin function
function strings(originalname)
{
let reversename='';
for (let i=originalname.length-1; i>=0;i--)
{
  reversename+=originalname[i];
}
return reversename;
}
console.log(strings("Naveen"));

// Input originalname = Naveen
// output = neevaN
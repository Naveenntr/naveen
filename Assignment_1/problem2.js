let n=5;
for (let i=n;i>=1;i--)
{
  let row='';
    for (j=1;j<=n*2-1;j++)
    {
      if (j>=n-(i-1) && j<=n+(i-1))
      {
        row+='*';
      }
      else 
      {
        row+=' ';
      }
    }
console.log(row)  
}
//diamond shape
let n=5;
for ( let i=1;i<=n;i++)
{
  let row='';
  for (let j=1;j<=n*2-1;j++)
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

for (let i=n-1;i>=1;i--)
{
  let row='';
  for (let j=1;j<=n*2-1;j++)
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

// input n=5 
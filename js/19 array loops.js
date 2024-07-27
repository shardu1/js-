let num=[12,45,76,43,77]

for (let i=0;i<num.length;i++)
{
    console.log(num[i])
}

//forEach
num.forEach((j)=>{
    console.log(j*j)
})

//Array.form
// converts any object to array
let name1 = 'abcdef'
let arr = Array.from(name1)
console.log(arr)

// for of 
for (let k of num)
{
    console.log(k)
}

for (let k in num)
{
    console.log(k)
}
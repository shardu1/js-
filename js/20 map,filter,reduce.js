num = [12 ,23 ,24]

//map - creates a new array by performing some operation on each array element
let a=num.map((value)=>{
    console.log(value)
    return value+4
})
console.log(a)

//filter
let a1 = num.filter((n)=>{
    return n>12
})
console.log(a1)

//reduce
let h=[1,2,3,5,7,2,1,3]
let hn=h.reduce((h1,h2)=>{
    console.log(h1 ,h2)
})    
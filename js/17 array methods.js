let num = [8,12,7,3,18]

//toString()
let a = num.toString()
console.log(a)

//join()
let b= num.join("_")
console.log(b)

//pop()
num.pop()
console.log(num)

//delete
delete num[0]
console.log(num)

let num1=[1,2,3,4]
let letters=['a','b','c']

let new2 = num1.concat(letters)
console.log(new2)


// splice and slice 
let z=[12,4,56,86,43,32,64]
z.splice(2,4,1000,1000,1000,1000)
console.log(z)

let num = Math.floor(Math.random()*100);
console.log(num)

let points=100;
for (let i=0; i<100;i++) {
    let guess = prompt("Guess the number from 1 to 100");
    if (num==guess) {
        alert('Points = '+points)
        break;
    }else{
        points = points - 1
    }
};


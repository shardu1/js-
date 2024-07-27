
function greet(name)
{
    console.log(`Happy birthday ${name}`);
}

let name1 = 'skilf';
let name2 = 'masrer';

greet(name1);
greet(name2);


let myobj = {
    name:"John doe",
    game: function(){
        return "Valorant";
    },
}
console.log(myobj.game());

arr = ['fruits','veg','non-veg'];
arr.forEach(function(element,index,array){
    console.log(element,index)
});
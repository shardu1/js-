// changing the colors of titles of the cards

let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = 'cyan'

let ctitles = document.querySelectorAll('.card-title') // selects all elements with .card-title
console.log(ctitles)

ctitles[1].style.color = 'red'
ctitles[2].style.color = 'green'


document.querySelector('.this').style.color = 'brown' // selects first elements with .this
document.querySelector('.this').style.background = 'green' 


console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))
let a = document.getElementsByTagName('div')[0]

// creating a new element and adding it to current html 
let div = document.createElement('div');
div.innerHTML='<h2> Hello World</h1>'

a.appendChild(div) //creates last child
a.prepend(div)     //creates first child 
a.before(div)
a.after(div)
// a.replaceWith(div)
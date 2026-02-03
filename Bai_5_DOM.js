var headingNode = document.getElementById('heading'); //id chi duoc goi 1 lan trong file

console.log({
    element: headingNode
});

var headingNodes = document.getElementsByClassName('heading')// class co the duoc goi lai nhieu trong file
// tra ve HTML colection giong 1 mang


var headingNode = document.querySelector('.heading') // chon class co ten heading

var headingNode = document.querySelectorAll('.box li')

for(var i = 0 ; i < headingNodes.length ; i++){
    console.log(headingNode[i])
}

var headingElement = document.querySelector('h1')

headingElement.href = 'heading'

headingElement.setAttribute('class', 'heading') //set cho the a class=heading


var linkingElement = document.querySelector('a') //get duoc the can them attribute
linkingElement.setAttribute('href', 'https://fullstack.edu.vn/')

var headingElement = document.querySelector('heading');

headingElement.innerText = 'New heading';

//innerText 
//textContent


//innerHTML: them duoc ca attribute node va text node
var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<span>New box</span>'

Object.assign(boxElement.style ,{
    width: '200px',
    height: '100px',
    backgroundColor: 'red'
})

console.log(boxElement.style.width) // chieu rong cua CSS


console.log(boxElement.classList.length) // do dai list

boxElement.classList.add('red')//them class CSS o ngoai vao noi co class la box

boxElement.classList.contains('red') //true: kiem tra 1 Element co class do hay khong

setTimeout(() =>{
    boxElement.classList.remove('red') // xoa class red sau 3s
}, 3000)

setInterval(() =>{
    boxElement.classList.toggle('red') //them/xoa khi khong/co class red
}, 1000)


//DOM Event
inputElement.onchange = function(e){
    console.log(e)
}


//preventDefault: xoa bo su kien mac dinh cua the
var aElement = document.anchors; //anchor lay ra name


var aElement = document.links;
for(var i = 0; i <)


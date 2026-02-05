//HTML DOM vs DOM API
//HTML DOM: Cấu trúc của tài liệu HTML được biểu diễn dưới dạng các đối tượng và nút trong cây DOM.
//DOM API: Giao diện lập trình ứng dụng (API) cho phép các nhà phát triển tương tác với cây DOM để truy xuất, thay đổi và quản lý nội dung và cấu trúc của tài liệu HTML


//Truy xuất phần tử trong DOM
var headingNodes = document.getElementById('heading')// class co the duoc goi lai nhieu trong file
// tra ve HTML colection giong 1 mang

console.log(headingNodes);

var headingNodes = document.getElementsByClassName('heading')// class co the duoc goi lai nhieu trong file
// tra ve HTML colection giong 1 mang

var tagNameNodes = document.getElementsByTagName('h2')// tra ve HTML colection giong 1 mang
console.log(tagNameNodes);

//querySelector(): tra ve phan tu dau tien tim thay
var headingNode = document.querySelector('.heading') // chon class co ten heading
console.log(headingNode);

//querySelectorAll(): tra ve toan bo phan tu tim thay
var headingNode = document.querySelectorAll('.box li')

//anchors
console.log(document.anchors); //tra ve toan bo the a co attribute href

//DOM attributes
var headingElement = document.querySelector('h1')
headingElement.title = 'heading-title' //set attribute title cho the h1


headingElement.setAttribute('class', 'heading') //set cho the a class=heading
headingElement.setAttribute('style', 'color: red; font-size: 20px;')
headingElement.setAttribute('id', 'heading-id')

headingElement.getAttribute('class') //lay ra gia tri cua attribute class
headingElement.getAttribute('style') //lay ra gia tri cua attribute style

console.log(headingElement.getAttribute('class') ); //tra ve toan bo attribute cua the

//InnerText vs TextContent vs InnerHTML

//innerText: bỏ quan các thẻ HTML bên trong chỉ lấy text node
//textContent: lấy tất cả các text node bên trong kể cả thẻ HTML

//innerHTML: them duoc ca attribute node va text node
var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<li>New box</li>'

console.log(boxElement.innerHTML); // <li>New box</li>


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
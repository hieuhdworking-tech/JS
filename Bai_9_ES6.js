//Var vs Let, Const
//Var: bien toan cuc, hoisting

{
    var a = 10; //bien toan cuc
}
console.log(a);

{
    {
    let b = 20; //bien cuc bo
    const c = 30; //bien cuc bo, khong the gan lai
    }
}
console.log(b); //Error
console.log(c); //Error

//But
{
    let d = 40;
    {
        console.log(d); //40
    }
}

const sum = (x, y) => {
    return x + y;
}

console.log(sum(5, 10)); //15


//Enhanced Object Literals

//1. Property shorthand: Định nghĩa thuộc tính ngắn gọn
const name = 'Alice';
const age = 25;

var person ={
    name, //name: name
    age,  //age: age
}

//2. Method shorthand: Định nghĩa phương thức ngắn gọn
var person = {
    name: 'Bob',
    age: 30,
    greet(){ //greet: function(){}
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }   
}

person.greet(); //Hello, my name is Bob and I'm 30 years old.


//Destructuring Assignment

//1. Destructuring arrays
const rgb = [255, 200, 100];
const [red, green, blue] = rgb; //red=255, green=200, blue=100
console.log(red, green, blue); //255 200 100
console.log(red); //255

//rest parameter
const [r, g, ...restColors] = rgb; //r=255, g=200, restColors=[100]
console.log(r, g, restColors); //255 200 [100]

//Spread operator
const newRgb = [0, ...rgb, 50]; //newRgb=[0, 255, 200, 100, 50]
console.log(newRgb); //[0, 255, 200, 100, 50]
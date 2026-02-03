function write(message){
    console.log(message)
}
write('This is message')

function sum(a,b){
    return a + b;
}

//Arrow function
const sum = (a,b) => a + b;


//Array
var language =[
    'JS', 'PHP', 'Ruby'
];

console.log(language.shift('Add'))
console.log(typeof language.toString()) //tra ve kieu du lieu string

console.log(language.join(', '))// them , vao sau moi phan tu

console.log(language.pop()) //xoa phan tu cuoi va tra ve chinh no => 'Ruby'

console.log(language.push('Java', 'Dart'))


//Object



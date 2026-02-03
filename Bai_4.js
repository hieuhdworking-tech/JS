//Array reduce()
var numbers =[100, 200, 250, 300, 450]
var totalCoin = courses.reduce(function(total, number){
    return total + number;
},0);// initial value: se cung kieu du lieu mong muon

console.log(totalCoin)

//Lam phang mang - Flat array

var depthArray = [1, 2, [ 3, 4], 5, 6, [7, 8] ];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem); //concat() noi mang
},[]);

//Lay ra tu Object tao thanh 1 mang moi
// Mang chua nhieu phan tu, phan tu chua mang, yeu cau lay ra cac mang courses tao thanh 1 mang moi
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JS"
            }
        ]
    },
        {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "Dart"
            },
            {
                id: 2,
                title: "C#"
            }
        ]
    },
        {
        topic: "SQL",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
];


var newCourses = topic.reduce(function(course, topic){
    return courses.concat(topic.courses)
},[])

// map()
var courses =['JS','Dart','Ruby'];
      
Array.prototype.myMap = function(callback){
    for(var i = 0 ; i < this.length ; i++ ){
        var result = callback(this[i] ,i);
        output.push(result);
    }
    return output;
}

courses.myMap();
courses.myMap(function(course){
    return '<h2>${course}</h2>'
})


//include()

var title = 'Toi ten la Hieu';

console.log(title.includes('Toi')) //true
console.log(title.includes('Toi',0)) //true
console.log(title.includes('Toi',2)) //false -> 2 la vi tri bat dau tim kiem

var course =['JS','Dart','Ruby'];
console.log(course.includes('JS')) //true

console.log(course.includes('JS', -1)) //false -> vi tri bat dau tim kiem = -1 + so luong phan tu co trong mang = -1 + 3 = 2

//Callback() la ham, duoc truyen qua doi so va duoc goi lai (trong ham nhan doi so)

function myFunction(param){
    console.log(param)
}
myFunction(123) //123
myFunction('Toi la Hieu') //Toi la Hieu

var course =['JS','Dart','Ruby'];


//Empty elements of array
//forEach, find, filter

var courses = ['Js', 'PHP'];

course.length = 10;

for(var i = 0; i < courses.length ; ++i){
    console.log(courses[i])
}

for (var index in courses){
    console.log(courses[index])
}


var courses = ['JS', 'PHP', 'Ruby'];

Array.prototype.forEach2 = function(cb){
    for (var index in this){      //for in khong tra ve -> ket qua = undefine  //for  in khong chi duyet qua cac phan tu trong mang hien huu ma con duyet trong _proto_

        console.log('index: '+index);
    }
}

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250,
        isFinish: true,
    },
        {
        id: 2,
        name: 'C#',
        coin: 250,
        isFinish: true,

    },
        {
        id: 3,
        name: 'Ruby',
        coin: 0,
        isFinish: true,
   },    {
        id: 4,
        name: 'PHP',
        coin: 0,
        isFinish: true,
   }
]


//filter()
var filterCourses = courses.filter(function(course, index, array){
    return course.coin <240;
});


console.log(filterCourses)
//myFilter()

Array.prototype.myFilter = function(cb){
    var output =[];
    for(var key in this){
        if(this.hasOwnPrototy(key)){
           var result = cb(this[key], index, this); 
           if(result){
            output.push(this[key])
           }
        };
    }
    return output;
}

var result = courses.every(function(course, index, array){
    return course.isFinish === true;
});

console.log(result);
// Object constructor
// giống như tạo 1 bản thiết kế cho việc tái sử dụng
// String/ Array/ ... cũng là 1 Object Contructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getFullName = function (){
        return '${this.firstName} ${this.lastName}'
    }
}

var author = new User('Son', 'Nguyen', 'Avatar');
var user = new User('Binh', 'Nguyen', 'Avatar');

//Them thuộc tính riêng
author.title = 'Title chi danh cho cho author';
user.comment = 'User comment duoc o day';


//Object prototype
//coi như là nguyên liệu để cấu thành 1 Object Constructor
//Bao gồm những thuộc tính và phương thức

User.prototype.className = 'A6'; //thuoc tinh

console.log(user.className);
// Cac thuoc tinh va phuong thuc them boi ham prototype thì se nam o _proto_


User.prototype.getClassName = function (){
    return this.className; // phuong thuc thi dung tu khoa this
}
console.log(user.getClassName());

var date = Date();
var date = new Date(); //doi tuong date

var year = date.getFullYear();
var month = date.getMounth() + 1;
var day = date.getDate();


//If else 
//chi vao 1 nhanh 

var day = 2;

if(day === 2){
    console.log('La thu 2');
}
else if(day === 3){
    console.log('La thu 3');
}
else if(day === 4){
    console.log('La thu 4');
}
else{

}

var date = 2;

switch(date){
    case 2:
        console.log('Hom nay la thu 2');
        break;
    case 3: 
        console.log('Hom nay la thu 3');
        break;
}

//Ternary operator

var course = {
    name: 'JS',
    coin: 250
}
if(course.coin>0){
    console.log('${course.coin} Coins');
}
else{
    console.log('Free');
}
//Su dung toan tu 3 ngoi de viet

var result = course.coin > 0 ? '${course.coin} Coins' : 'Free';
console.log(result);

//Loop
//for - lặp với điều kiện đúng
for (var i = 1; i < 1000; i++){
    console.log('Day la i lan thu '+i)
}

function getRandNumber(min, max, length){
    var arr =[];
    for(var i = 0; i <length ; i++){
        arr.push(Math.floor(Math.random()*(max - min) + min));
    }
    return arr;
}
function getTotal(numbers) {
    var total = 0;
    for (var i=0;i<numbers.length;i++){
        total += numbers[i];
    }
    return total;
}
getTotal([1, 2, 3, 4])


//for/in - Lặp qua key của đối tượng
//trong object
var myInfor = {
    name: 'Nguyen Van A',
    age: 20,
    address: 'HN'
};
for(var key in myInfor){
    console.log(myInfor[key])
}

// Trong array
var languages = [
    'JS','Ruby','PHP'
];
for(var key in languages){
    console.log(languages[key]);
}

//Trong String
var myString ='Javascript';
console.log(myString[0]);

for(var key in myString){
    console.log(myString[key])
}

//for/of - lặp qua value của đối tượng

// Trong array
var languages = [
    'JS','Ruby','PHP'
];
for(var key of languages){
    console.log(key); //JS/Ruby/PHP
}


//while - lặp khi điều kiện đúng


//do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng


//Break: dừng vòng lặp
//Continue: bỏ qua 1 vài vòng lặp

for(var i = 0; i < 10 ; i++){
    if(i%2 !==0){// Nếu la so le thi bo qua
        continue;//tiep tuc toi so chan
    }
    console.log(i);
}

//Vong lap long nhau

var myArray = [
    [1,2],
    [3,4],
    [5,6]
];

for( var i=0; i<myArray.length; i++){
    for(var j = 0; j<myArray[i].length;j++){
            console.log(myArray[i][j])
    }
}

// Lui dan 100 ve 0 voi buoc nhay = 5
for(i=100;i>=0;i-=5){
    console.log(i)
}

var course = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
        {
        id: 2,
        name: 'C#',
        coin: 250
    },
        {
        id: 3,
        name: 'Ruby',
        coin: 0
    },    {
        id: 4,
        name: 'PHP',
        coin: 0
    }
]
// In ra mang cac khoa hoc hien co
course.forEach(function(course, index){
    console.log(index, course);
});


//Array map() => tra ve 

function courseHandler(course, index){
    return{
        id: course.id,
        name: 'Khoa hoc: ${course.name}',
        coin: course.coin,
        coinText: 'Gia: ${course.coin}',
        index: index,
        orginArray: course
    }
}


//reduce()

var newCourses = course.map(courseHandler);

console.log(newCourses)

const users = [
  { id: 1,  name: "An",     age: 18, gender: "male",   department: "IT",      salary: 1200, status: "active" },
  { id: 2,  name: "Bình",   age: 22, gender: "male",   department: "HR",      salary: 900,  status: "active" },
  { id: 3,  name: "Cường", age: 17, gender: "male",   department: "IT",      salary: 0,    status: "inactive" },
  { id: 4,  name: "Dũng",  age: 29, gender: "male",   department: "Finance", salary: 2000, status: "active" },
  { id: 5,  name: "Hà",    age: 25, gender: "female", department: "IT",      salary: 1500, status: "active" },
  { id: 6,  name: "Lan",   age: 19, gender: "female", department: "HR",      salary: 1000, status: "inactive" },
  { id: 7,  name: "Minh",  age: 32, gender: "male",   department: "Finance", salary: 2500, status: "active" },
  { id: 8,  name: "Nga",   age: 21, gender: "female", department: "IT",      salary: 1100, status: "active" },
  { id: 9,  name: "Phúc",  age: 28, gender: "male",   department: "HR",      salary: 1300, status: "active" },
  { id: 10, name: "Quỳnh", age: 24, gender: "female", department: "IT",      salary: 1400, status: "inactive" }
];

// 1.Lấy danh sách user tuổi ≥ 18 và status = "active"

function getAdult(user){
    return user.filter(function(user){
        return user.age >= 18 && user.status === "active"
    });

}
    const result = getAdult(users);
    console.log(result);
// 2.Lấy danh sách user thuộc phòng IT
function getIT(user){
    return user.filter(function(user){
        return user.department === "IT"
    });

}
    const result = getIT(users);
    console.log(result);

// 3.Tìm user đầu tiên có salary > 2000
function gethighSalary(user){
    return user.filter(function(user){
        return user.salary > 2000
    });

}
    const result = gethighSalary(users);
    console.log(result);
// 4.Tìm user có id = 7

function getID7(user){
    return user.filter(function(user){
        return user.id === 7
    });
}
    const result = getID7(users);
    console.log(result);
// 5.Sắp xếp user theo age giảm dần
    const reduceAge = users.sort((a,b) =>b.age-a.age);
    console.log(reduceAge)

// 6.Lấy top 3 user có salary cao nhất
    const topSalary = users.sort((a,b) =>b.salary - a.salary);
    topSalary.splice(3);
    console.log(topSalary)

// 7.Kiểm tra xem có user nào chưa đủ 18 tuổi hay không
function checkAge(user){
    return user.some(function(user){
        return user.age < 18
    })
}
    const result = checkAge(users);
    console.log(result);

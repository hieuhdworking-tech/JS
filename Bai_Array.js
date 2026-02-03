var langugages = [
    "JavaScript",
    "Python",
    "Java",
]

console.log(langugages);

//Array có thể chứa nhiều kiểu dữ liệu
var random = [
    "JavaScript",
    100,
    null,
    undefined,
]

//Khởi tạo mảng bằng new Array()...Không khuyến khích sử dụng cách này
var languages2 = new Array(
    "JavaScript",
    "Python",
    "Java",
)

//Kiểm tra kiểu dữ liệu của mảng
console.log(Array.isArray(languages2)); //true
console.log(typeof languages2); //object

//Kiểm tra độ dài mảng
console.log(languages2.length); //3

//Làm việc với các phần tử trong mảng
//toString()
console.log(languages2.toString()); //JavaScript,Python,Java

//join()
console.log(languages2.join(" - ")); //JavaScript - Python - Java

//pop(): Xóa phần tử cuối mảng và trả về phần tử đó
var lang = languages2.pop();
console.log(lang); //Java
console.log(languages2); //["JavaScript", "Python"]

//push(): Thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
var newLength = languages2.push("C++", "Ruby");
console.log(newLength); //4
console.log(languages2); //["JavaScript", "Python", "C++", "Ruby"]

//shift(): Xóa phần tử đầu mảng và trả về phần tử đó
var firstLang = languages2.shift();
console.log(firstLang); //JavaScript
console.log(languages2); //["Python", "C++", "Ruby"]

//unshift(): Thêm phần tử vào đầu mảng và trả về độ dài mới của mảng
var newLength2 = languages2.unshift("Go", "Swift");
console.log(newLength2); //5
console.log(languages2); //["Go", "Swift", "Python", "C++", "Ruby"]

//splice(): Xóa, chèn hoặc thay thế phần tử trong mảng
//Cú pháp: array.splice(start, deleteCount, item1, item2, ...)
//Xóa 2 phần tử từ vị trí index 1
var removedLangs = languages2.splice(1, 2);
console.log(removedLangs); //["Swift", "Python"]
console.log(languages2); //["Go", "C++", "Ruby"]

//Chèn 2 phần tử tại vị trí index 1
languages2.splice(1, 0, "Kotlin", "TypeScript");
console.log(languages2); //["Go", "Kotlin", "TypeScript", "C++", "Ruby"]


//concat(): Nối 2 hoặc nhiều mảng và trả về mảng mới
var moreLangs = ["PHP", "C#", "Perl"];
var allLangs = languages2.concat(moreLangs);
console.log(allLangs); //["Go", "Kotlin", "TypeScript", "C++", "Ruby", "PHP", "C#", "Perl"]

//Slice(): Lấy một phần của mảng và trả về mảng mới
//Cú pháp: array.slice(start, end)
var someLangs = allLangs.slice(2, 5);
//slice(0) -> Lấy từ index 0 đến hết mảng
console.log(someLangs); //["TypeScript", "C++", "Ruby"]


//forEach(): Duyệt qua từng phần tử trong mảng
allLangs.forEach(function(lang, index){
    console.log(index, lang);
});

//every(): Kiểm tra tất cả phần tử trong mảng có thỏa mãn điều kiện không
var allHaveMoreThan2Chars = allLangs.every(function(lang){
    return lang.length > 2;
});
console.log(allHaveMoreThan2Chars); //true

//some(): Kiểm tra có ít nhất một phần tử trong mảng thỏa mãn điều kiện không
var hasLangWith5Chars = allLangs.some(function(lang){
    return lang.length === 5;
});
console.log(hasLangWith5Chars); //true

//find(): Tìm phần tử trong mảng thỏa mãn điều kiện và trả về phần tử đó
var langWith6Chars = allLangs.find(function(lang){
    return lang.length === 6;
}); 
console.log(langWith6Chars); //Kotlin


var courses = [
    {id: 1, name: "JavaScript", coin: 0},
    {id: 2, name: "HTML, CSS", coin: 0},
    {id: 3, name: "ReactJS", coin: 300},
    {id: 4, name: "NodeJS", coin: 400},
]
//map(): Tạo mảng mới bằng cách thực hiện hàm trên từng phần tử của mảng gốc
//map(function(currentValue, index, array))
var newCourses = courses.map(function(course){
    console.log(course);
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá khóa học: ${course.coin} VNĐ`,
    };
});
console.log(newCourses);


//reduce(): Giảm mảng về một giá trị duy nhất bằng cách thực hiện hàm trên từng phần tử
//reduce(function(accumulator, currentValue, index, array), initialValue)
//reduce(function(biến tích trữ, biến hiện tại, index, mảng gốc))

var totalCoin = courses.reduce(function(total, course){
    return total + course.coin; //return cái gì thì accumulator sẽ nhận cái đó -> không return sẽ bị undefined
}, 0); //0 là giá trị khởi tạo ban đầu của total
console.log(totalCoin); //700

var numers = [1, 2, 3, 4, 5];
var totalNumbers = numers.reduce(function(total, number){
    return total + number;
},0);
    console.log(totalNumbers); //15

depthArray = [1, 2, [3, 4], 5, [6, 7, 8]];

var depthArrayResult = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []);

console.log(depthArrayResult); //[1, 2, 3, 4, 5, 6, 7, 8]

//flat(): Làm phẳng mảng đa chiều thành mảng một chiều
var flatArray = depthArray.flat();
console.log(flatArray); //[1, 2, 3, 4, 5, 6, 7, 8]



//Fetch
//API: Application Programming Interface -> Giao dien lap trinh ung dung

//Backend -> API -> Fetch -> JSON/XML -> Frontends

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then(function(response){
        return response.json(); //Tra ve promise
    })
    .then(function(posts){
        console.log(posts);

    })

    .catch(function(err){
        console.log('Loi', err);
    });

//Mock API
//Postman
//HTTP: Hyper Text Transfer Protocol - Giao thuc truyen tai siêu văn bản
//HTTP Methods: GET, POST, PUT, DELETE, PATCH - Phuong thuc gui yeu cau len server



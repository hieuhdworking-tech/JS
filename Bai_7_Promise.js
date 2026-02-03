//Promise
// - Sync
// - Async: cac ham setTimeout, setInterval, fetch, XMLHttpRequest,...
//          can su dung callback() de su ly cac ham bat dong bo
// - callback() hell la cac ham callback() long nhau -> phuc tap ->giai quyet bang Promise 
 var promise = new Promise(
    function(resolve, reject){
        //Goi lai ham resolve() khi thanh cong
        //Goi lai jam reject() khi that bai
    }
);

promise
    .then(function(){
        //Khi resolve duoc goi
    })
    .catch(function(){
        // khi reject duoc goi
    })
    .finally(function(){
        // khi 1 trong 2 duoc goi
    })



promise 
    .then(function(course){
        console.log()
    })


//Promise chain
//Promise methods (resolve, reject, all)

var promise = Promise.resolve('Always success'); //luon tra ve nhu .then()



var users = [
    {
        id: 1,
        name: 'Hoang Hieu',

    },
    {
        id: 2,
        name: 'Nguyen Phong'
    },
    {
        id: 3,
        name: 'Dam Anh'
    },
];

var comments =[
    {
        id: 1,
        user_id: 1,
        content: 'Alo ban oi',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Nghe ro roi'
    },
];


//2. Lay comments
function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    });
}
//3. Tu comments lay ra user_id, tu user_id lay ra user
getComments()
    .then(function(comments){
        var userIDs = comments.map(function(comment){
            return comment.user_id;
        });
        return getUsersByIds(userIDs)
            .then(function(users){
                return {    
                    users: users, 
                    comments: comments
                };
            });
    })
    //4. In ra ten nguoi dung va noi dung comment
    .then(function(data){
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            console.log(user.name + ': ' + comment.content);
        });
    });

function getUsersByIds(userIDs){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIDs.includes(user.id);
        }); 

        resolve(result);
    });
}



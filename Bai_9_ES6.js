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
// var n="vaishu";
// var age=20;

// if(age>18)
// {
//     var n="vyshu";
//     console.log(n);
// }

// console.log(n);

// let emp=["ram","hari","deppak"]
// console.log(emp[1]);

// confirm("u want toexit")


//console stmts
// console.log("welcome");
// console.info('INFO');
// console.warn("danger");
// console.error("error");

//spread operator

// let marks=[12,15,17,19]
// let marks2=[70,75,80,85]
// let final=[0,5,marks]
// let total=[...marks,...marks2]
// console.log(final)
// console.log(total)

//rest parameter
// function add(x,y,...rd){
//     console.log(x);
//     console.log(x);
//     console.log(rd);
//     console.log(typeof(rd))
// }
// console.log(add(1,2,3,4,5,"hi"))

// destructuring of array

// let student=["a","b","c","d"]
// // let n1=student[0];
// let [A,B,...D]=student
// console.log(B)
// console.log(D)

let e={
    n:"VAISH",
    d:"st",
    s:"2Lk",
    m:1234
}
let {n,d,...rd}=e;
console.log(n);
console.log(d);
console.log(rd);
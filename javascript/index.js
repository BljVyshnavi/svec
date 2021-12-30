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

// let e={
//     n:"VAISH",
//     d:"st",
//     s:"2Lk",
//     m:1234
// }
// let {n,d,...rd}=e;
// console.log(n);
// console.log(d);
// console.log(rd);

//functions

// let demo= function(x,y){
//     return x+y
// }
// console.log(demo(3,4))

// setTimeout(function(){
//     console.log("wel")
// },3000)

// arrow function

// let demo= (x,y) => {
//     return x*y
// }
// console.log(demo(3,4))

//for
// let p=["x","y","z"]
// for(let i=0;i<p.length;i++)
// {
//     console.log(i)
// }

//for in
// let p=["x","y","z"]
// for(let i in p){
//     console.log(i)
// }

//for of
// let p=["x","y","z"]
//  for(let i of p){
//      console.log(i)
//  }

//for each
// let p=["x","y","z"]
// p.forEach(function(element,index){
//     console.log(element+" no")
// })


//map function
 // let p=["x","y","z"]
// let r=p.map(function(element,index)
// {
//     return element+" k"
// })
// console.log(p)
// console.log(r)


//map without func
//  let p=["x","y","z"]
//  let r=p.map((element,index)=>
//  {
//      return element+" k"
//   })
//  console.log(p)
//  console.log(r)


// let a=10;
// var x=698;
// let  str="jkkfdjkfdj";
 //let array=[1,2,3,4,5];
// let array2=["jfj","jkdkj","oessk"];
//  array.push(1);
//  array.pop();
//  array.length;
//  array.unshift(4);
//  array.unshift("nanaa");
//  array.shift();
//  array.indexOf(2);

 

// //function hoisting 
// a=square(10);



// function square(n){ 
//     console.log("In first function");
//     return Math.sqrt(n);
// }

// var sqrt=function(n){ 
//     console.log("in 2nd function");
//     return Math.sqrt(n);
// }
// b=sqrt(33);



//************* ********************************************************/




// alert("external alert")
//  let obj1={ 


//     a:10,
//     b:03,
//     c:0943,
//     d:'mddj'
//  }
// // let obj2=Object.create(obj1)
// let str="abc"
// let x=88
// function text(){ 
//     console.log("hjhghg")

// }
// let arr=[1,2,33,4,5]
// String.prototype.charAt=function(){ 
//     return "x"
// }
// Array.prototype.joinOriginal=Array.prototype.join
// Array.prototype.join=function(){ 
//     console.log("join called on " this)
//     return this.joinOriginal(...arguments)
// }

//****************************************************************** */
//******************************************************************** */


//diff ways to create objects 

// let fruit={ 
//    taste:"sweet",
//    colour:"red",

// }
// function Fruit(taste,colour){ 
//    this.taste=taste;
//    this.colour=colour;

// }
//  let apple=new Fruit("sweet","red");

class Fruit{ 
     
   constructor(taste,colour){ 
      this.taste=taste;
      this.colour=colour;

   }


};
let kiwi=new Fruit("sour","yellow");
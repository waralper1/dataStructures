
// Day 1:


//          Numbers

// var a = 10;
// var b = 2.45;
// console.log(typeof a);
// console.log(typeof b)





// Strings
// var name = "Alper";
// console.log(name);
// console.log(typeof name);

//          Boolean

// var a = true;
// console.log(typeof a);



// var a = null;

// console.log(typeof a);




//          Reference Types


// var numbers = [1,2,3,4,5];

// console.log(numbers);
// console.log(typeof numbers);
// console.log( numbers[1]);


// var person = {

//         name : "Alper Kılıç" ,
//         age : 25  
// }
// console.log(person);
// console.log(typeof person)



// var date = new Date();


// console.log(date);

// console.log(typeof date);

// var hello = function(){
//     console.log("Merhaba");
// }
// console.log(hello);
// console.log(typeof hello);




//          Pri-Ref Types




// var a=10;
// var b = a;

// console.log(a,b);
// a=20;
// console.log(a,b);

// var b = [a,2,3]
// var a = [b,4,5];

// console.log(a);






// Day 2:


//     Variables


// var a=10;
// var a=20;
// console.log(a);
// a=30;
// console.log(a);


// let name ="Alper Kılıç";

// console.log(name);
// name = "Alper";
// console.log(name);

// let name ="Alper";


// const name= "Alper Kılıç";

// console.log(name);
// name = "Alper";


// const a= [1,2,3,4];
// console.log(a);
// a.push(5);
// console.log(a);






//  Variable Changes

//let value;

// To String

// value = String(123);
// value = String(1.23);
// value = String(true);
// value = String(function(){console.log()} );

// value = (10).toString();




// To Numbers

// value = Number("123");
// value = Number(null);
// value = Number(undefined);
// value = Number("hello world");
// value = Number(function(){console.log()});
// value = Number([1,2,3,4,5]);
// value = Number("3.14");
// value = parseFloat("3.14");
// value = parseInt("3.14");


// const a = "Hello" + 12;

// console.log(a);
// console.log(typeof a);



// console.log(value);
// console.log(typeof value);






// Day 3

//    Operators and Math Object





//    Aritmathic ops


// let value;

// const value1 = 10;
// const value2 = 4;

// value = value1 + value2;//add
// value = value1 - value2;//minus
// value = value1 * value2;//multiple
// value = value1 / value2;//divide
// value = value1 % value2;//mod



//    Math Methods
// value = Math.PI;
// value = Math.E;

// value = Math.round(3.6);//4
// value = Math.round(3.5);//3
// value = Math.round(3.2);//3



// value = Math.ceil(3.2);//4
// value = Math.ceil(3.8);//4


// value = Math.floor(3.2);//3
// value = Math.floor(3.8);//3



// value = Math.sqrt(16);//4
// value = Math.sqrt(31);//5.56


// value = Math.abs(-10);//10


// value = Math.pow(8,3);//512
// value = Math.pow(4.2);//16
 
// value = Math.max(10,-1,100,32);//100
// value = Math.min(10,-1,100,32);//-1



// value = Math.random();// [0,1)
// value = Math.random()*20;// [0,20)
// value = Math.random()*20+1 ;// [0,21)


// value = Math.floor(Math.random()*20+1) ;// [0,20] ∀ N




// console.log(value);


// String Methods

// let value;
// const firstName = "Alper";
// const lastName = "Kilic";
// const langs = "Java,Python,C++";

// value = firstName +" "+ lastName;

// value +=" İstanbul";//value= value+ "İstanbul"


// value = firstName.length;

// value = firstName.concat(" " ,lastName ," ","TAK");// firstName+lastName+tak

// value = firstName.toLowerCase();
// value = firstName.toUpperCase();



// value = firstName[0];



// value = firstName[firstName.length - 1 ];


// //      index OF


// value = firstName.indexOf("A");//0
// value = firstName.indexOf("b");//-1
// value = firstName.indexOf("a");//-1

// //      char At


// value=firstName.charAt(0);
// value=firstName.charAt(firstName.length-1);//Last Char




// //      Split

// value = langs.split(",");


// //      Replace

// value = langs.replace("Python","CSS");



// //      Includes

// value = langs.includes("Java"); //True
// value = langs.includes("Alper"); //False
// console.log(value);














//      Template Literal
//``= altGr + ,



// const name ="Alper Kılıç";
// const department = "Web Developer";
// const salary = 5000;


// //const a= "Name: "+name+"\n"+ "Department: "+ department+ "\n" + "Salary: "+ salary +"\n";

// //const a=`Name:${name}\nDepartment:${department}\nSalary:${salary}`;


// // const html = "<ul> " + 
// //              "<li>" + name + "</li>" +
// //              "<li>" + department + "</li>"+
// //              "<li>" + salary + "</li>" +
// //              "</ul>";

// // document.body.innerHTML = html;             

// function a() {
//     return "Hi!";
// }


// const html = `
//         <ul>
//          <li>${name} </li>
//          <li>${department}</li>
//          <li>${salary}</li>
//          <li>${10/4}</li>
//          <li>${a()}</li>
//          </ul>

//         `;
// document.body.innerHTML = html; 


// console.log(1);






//day 4
// Arrays


let value;
const numbers = [1,23,42,53,674,23,27];
//const numbers2 = new Array (1,2,3,4,5,6,7);

const langs = [ "Pyton", "Java", "C++", "JavaScript"];
const a = ["Hi!", 22, null,undefined,3,14];
//Length
value= numbers.length;

//index
value= numbers[0];//1
value= numbers[1];//23
value= numbers[numbers.length-1];//27



// index manupulation

numbers[2]= 1000;
value = numbers;

//index OF

value = numbers.indexOf(1000);

//array push,unshift
numbers.push(2000);//adds from last index


numbers.unshift(3000);// adds from first index
vaule=numbers;

// Pop mehtods

numbers.pop();//deletes last index

value=numbers;

numbers.shift();//deletes fist index
value = numbers ;


numbers.splice(0,3);//deletes between 0-3
value= numbers;


numbers.reverse();//reverses the array

value = numbers;


numbers.sort();//sorts by first value of each index
value= numbers;

value.sort(function(x,y){//sorts normally
    return x-y;
});
value = numbers ;


value.sort(function(x,y){
    return y-x;
});
value = numbers;







console.log(value);





























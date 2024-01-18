
//   Arithmetic operation by using Numbers 

var firstnumber = 10;
var secondnumber = 20;

console.log(firstnumber + secondnumber)
console.log(firstnumber - secondnumber)
console.log(firstnumber * secondnumber)
console.log(firstnumber / secondnumber)
console.log(firstnumber % secondnumber)


// Concat  by using Names 

var firstname = " Ram ";
var middlename = "sham";
var lastname = " Dhambere";

console.log(firstname + middlename + lastname)


// Array
var arr = [10, 20, "Ram", false]
console.log(arr)


// object
var obj = {
    firstname: "Pratik ",
    middlename: "Rajkumar",
    surname: " Khardekar",
    age: 26,
}
console.log(obj)


// Use function in js 
function myfunction(a, b) {
    console.log(a + b)
}

myfunction(25, 25)

// By using Assignment Operator  ( = ,+= , -= , *= , /=)
var name = "pratik";
var num = 20;
num = 10;
console.log(num);

var name = "20";
var num = 20;
num += 10;
console.log(num);


var name = "50";
var num = 20;
num -= 10;
console.log(num);

var name = "60";
var num = 20;
num *= 10;
console.log(num);

var name = "10";
var num = 20;
num /= 10;
console.log(num);

// By using Assignment Operator/ Comparision ( == , === , < , > , <= , >= )
var d =  10;
var c = 30;
console.log( d === c);

var d =  20;
var c = " 20";
console.log( d == c);
 
var c = 10;
console.log( c < 10);

var c = 10;
console.log( c > 10);

var c = 10;
console.log( c <= 10);

var c = 10;
console.log( c >= 10);


// By using logical Operator (  != , && , ||)

var a = 10 ;
console.log(a !=" 10");

var b = 20 ;
 console.log( a == 10 &&  b == 10 );

 var b = 20 ;
 console.log( a == 10 || b == 10 );

// use Type operator 
var object = {
     firstname: "Ram" ,
     lastname : "sham"
}

console.log(typeof(object));

var a = 10;
console.log(typeof(a));

// ........

var object1 = {
 Person1 : {
    firstname: "Ravi" ,
    lastname : "shyam ",
    phone : 6187683618  
 },

 Person2 : {
    firstname: "pratik" ,
    lastname : "khardekar ",
    phone : 82786428  
 },

 Person3 : {
    firstname: "Yash" ,
    lastname : "potdar ",
    phone : 763756799  
 },
}
 console.log(object1.Person3,object1.Person2,object1.Person1);



 //  ......
 var studentinfo = {
 firstname : "hgajgd",
 lastname:" gajdgyua",
 phonenumbers:[5134654173, 71783878147]
 }
 console.log(studentinfo.phonenumbers);


//  let/const......

let firstname = " ram ";
{
    var firstname =" yash ";
}
console.log(firstname);
















//  Arithmetic operation by using Numbers 

// var firstnumber = 10;
// var secondnumber = 20;

// console.log(firstnumber + secondnumber)
// console.log(firstnumber - secondnumber)
// console.log(firstnumber * secondnumber)
// console.log(firstnumber / secondnumber)
// console.log(firstnumber % secondnumber)


// Concat  by using Names 

// var firstname = " Ram ";
// var middlename = "sham";
// var lastname = " Dhambere";

// console.log(firstname + middlename + lastname)


//  Array
// var arr = [10, 20, "Ram", false]
// console.log(arr)


//  object
// var obj = {
//     firstname: "Pratik ",
//     middlename: "Rajkumar",
//     surname: " Khardekar",
//     age: 26,
// }
// console.log(obj)


// Use function in js 
// function myfunction(a, b) {
//     console.log(a + b)
// }

// myfunction(25, 25)

//  By using Assignment Operator  ( = ,+= , -= , *= , /=)
// var name = "pratik";
// var num = 20;
// num = 10;
// console.log(num);

// var name = "20";
// var num = 20;
// num += 10;
// console.log(num);


// var name = "50";
// var num = 20;
// num -= 10;
// console.log(num);

// var name = "60";
// var num = 20;
// num *= 10;
// console.log(num);

// var name = "10";
// var num = 20;
// num /= 10;
// console.log(num);

// By using Assignment Operator/ Comparision ( == , === , < , > , <= , >= )
// var d =  10;
// var c = 30;
// console.log( d === c);

// var d =  20;
// var c = " 20";
// console.log( d == c);

// var c = 10;
// console.log( c < 10);

// var c = 10;
// console.log( c > 10);

// var c = 10;
// console.log( c <= 10);

// var c = 10;
// console.log( c >= 10);


//  By using logical Operator (  != , && , ||)

// var a = 10 ;
// console.log(a !=" 10");

// var b = 20 ;
//  console.log( a == 10 &&  b == 10 );

//  var b = 20 ;
//  console.log( a == 10 || b == 10 );

//  use Type operator 
// var object = {
//      firstname: "Ram" ,
//      lastname : "sham"
// }

// console.log(typeof(object));

// var a = 10;
// console.log(typeof(a));

//  ........

// var object1 = {
//  Person1 : {
//     firstname: "Ravi" ,
//     lastname : "shyam ",
//     phone : 6187683618  
//  },

//  Person2 : {
//     firstname: "pratik" ,
//     lastname : "khardekar ",
//     phone : 82786428  
//  },

//  Person3 : {
//     firstname: "Yash" ,
//     lastname : "potdar ",
//     phone : 763756799  
//  },
// }
//  console.log(object1.Person3,object1.Person2,object1.Person1);



//    ......
//  var studentinfo = {
//  firstname : "hgajgd",
//  lastname:" gajdgyua",
//  phonenumbers:[5134654173, 71783878147]
//  }
//  console.log(studentinfo.phonenumbers);


// let/const......

// let firstname = " ram ";
// {
//     var firstname =" yash ";
// }
// console.log(firstname);

//  using if else 

// let age1 = 18 ; 
// let age2 = 17 ;

// if ( age1 < age2 ){
//     console.log( "age2 is not voting age");
// }else {
//     console.log( "age1 is voting age");
// }


// creating an array with datatype and loop

// var array = [ 10, 20 , 30, 40 ,50 , "ram", "sham", 60, 70,80,90, 100 ];
// console.log(
//     array[10],
//     array[20],
//     array[30],
//     array[40],
//     array[50],
//     array["ram"],
//     array["sham"],
//     array[60],
//     array[70],
//     array[80],
//     array[90],
//     array[100],
// );

// for(var  i = 0 ; i < 100; i++ ){
//     console.log(array[i]);
// }



// var array = [ 10, 20 , 30, 40 ,50 , "ram", 60, 70, 80, 90, 100 ];
// console.log(
//     array[0],
//     array[1],
//     array[2],
//     array[3],
//     array[4],
//     array[5],
//     array[6],
//     array[7],
//     array[8],
//     array[9],
//     array[10]
// );


//  using while loop
// var k =0;
//  while (k<12) {
//     console.log(k); k++;
//  }

//  using array.lenghth

//  var array = [ 1 , 3 ,5 ,7, 8,"bvvbbv", 9, 7846, "gsdjcj", 78387]

//  var k =0;
//   while (k<array.length) {
//      console.log(array[k]); k++;
//   }

//   using do while loop
//  var s= 0 ;
//  do{
//     console.log(s); s++;
//  }
// while (s<16) 

//  using for in loop 5 object
// let studentdata = {
//     firstname: "ram",
//     middlename: "sham",
//     surname: "yogi",
//     age: 35,
//     Location: "pune"
// };

// for (let keys in studentdata) {
//     console.log(studentdata[keys]);
// }



// BY using for off  loop 

// var colour =["red" , "blue", "yellow"]
// for ( let  a  of colour){
//         console.log(a);
// }



//  using on string 
//  let onename = "Atharva"

//  for(  let  values of onename){
//     console.log(values)
//  }

// function click_function(){
//     var firstname = document.getElementById("firstname").value;
//     var surname = document.getElementById("surname").value;
//     var phonenumber = document.getElementById("phonenumber").value;
//     console.log(firstname,surname,phonenumber);

//     document.getElementById("firstname").value ="";
//     document.getElementById("surname").value ="";
//     document.getElementById("phonenumber").value ="";
// }



// function change_function() {
//     var drop = document.getElementById("dropdown").value;
//     console.log(drop);    
// }

// function change() {
//     var input_box= document.getElementById("Name_of_students").value;
//     console.log(input_box);
// }

// using onmouseover



//  using for findinng length of words or para 
// function mouse_over() {
//     var img = document.getElementById("book_img")
//     img.style.height = "150px"
//     img.style.width = "150px"
// }

//  using onmouseover 
// function mouse_out() {
//     var img = document.getElementById("book_img")
//     img.style.height = "100px"
//     img.style.width = "100px"
// }

// using onmouse up And down

// function down_mouse() {
//     document.getElementById("paraupdown").style.color = "red ";
// }

// function up_mouse() {
//     document.getElementById("paraupdown").style.color = "blue";
// }

// function myFunction() {
//     alert("page reload");

// }



// var text = "advhjadvagdjgbsjdcbsjc";
// document.getElementById("demo").innerHTML = text.length;


//  <!-- show text  by using number postion  -->

// var text = "helllo world ";
// document.getElementById("demo").innerHTML = text.charAt(2);
//  Also you can use insted of charAt / at/text[];

// var text = "svchvhscjvbcs";
// console.log(text.length);

// using for finding the position of text or word into the para by charAT

// var text= "ram and sham are best friends ";
// console.log(text.charAt(10));


//  using for check UFT Number by charCodeAT

// var text= "ram and sham are best friends ";
// console.log(text.charCodeAt(15));

// using slice function (11 ,15)
//  var text = " my name is jhon doe  "
//  console.log(text.slice(11 ,15));

//  using slice function (-11 ,-15) 
//  var text = " my name is jhon doe  "
//  console.log(text.slice(-15 ,-11));

//using toLowerCase function for text and para lower form
// var text = " MY NAME IS JHON DOE  "
// console.log(text.toLocaleLowerCase());


//using toLowerCase function for text and para lower form
// var text = " my name is jhon doe  "
// console.log(text.toLocaleUpperCase());


// using  1)indexof 
// var text =  "hello it was a nice day but some work is pending anyway nice to meet you and nice to meet you rahul also "
// console.log(text.indexOf("nice"," 17"));

// using  3)search
// var text =  "hello it was a nice day but some work is pending anyway Nice to meet you and nice to meet you rahul also "
// text= text.match(/nice/g)
// console.log(text.length);

// using  4)match
// var text =  "hello it was a nice day but some work is pending anyway Nice to meet you and nice to meet you rahul also "
// text= text.match(/nice/gi)
// console.log(text.length);

// using  5)matchall
// var text =  "hello it was a nice day but some work is pending anyway Nice to meet you and nice to meet you rahul also "
// text= text.matchAll("nice")
// console.log(Array.from(text));

// using  6)includes
// var text =  "hello it was a nice day but some work is pending anyway Nice to meet you and nice to meet you rahul also "
// console.log(text.includes("is",40));

// using  7)startswith
//  var text= "Hello world"
//  console.log(text.startsWith("world",6));

// using  8)endsswith
//  var text= "Hello world ! its a classwork"
//  console.log(text.endsWith("world",18));


//  using numbers addition in js
// let num1 = 11.05;
// let num2= 12;
// console.log(num1+num2)

//  Using Function On change 
// function onchange() {
    
// var text = document.getElementById("fname").value;
// document.getElementById("show").innerHTML=(`My name is ${text}`)}


//  for showing type of function
// num =1234567897873483;
// console.log(num ==="1234567897873483");
// console.log(typeof(num));

// to check number true and false
// let number = 20;
// let number2= 20;
// console.log(number===number2)

// // toString in number
//  var num =1234;
//  num.toString()
//  console.log(typeof (num));


// //  toExponential in number
//  var num = 12426567;
//  console.log(num.toExponential(8));

//  //to fixed in number
//  var  num = 94.609      ;
//  console.log(num.toFixed(6));

// //  toprecision in number
// var  num = 94.609      ;
//  console.log(num.toPrecision(5));

// Array = replace the word and number 
//  var age  = [ 12 , 15 ,16 ,18]
//  age[3]= 25;
//  console.log(age);

//  var age  = [ 12 , 15 ,16 ,18]
//  age[3]= "Pratik";
//  console.log(age);      

//  using (-) to know the last number
// var age  = [ 12 , 15 ,16 ,18]
//  console.log(age.length-1);

 // using tostring for converting number to string 
//  var age  = [ 12 , 15 ,16 ,18]
//  console.log(age.toString());

 // using typeof to know type
//  var age  = [ 12 , 15 ,16 ,18]
//  console.log(typeof(age));

// looping through array
// var age  = [ 12 , 15 ,16 ,18]
// for (var i=0 ;i<age.length; i++){
// console.log(age[i]);}

// 1) array.length
//  var fname =[ " ram ", "sham","shiva"]
//  console.log(fname.length);

 //2) toString 
//  var  number = [1,2, 3, 4,5,6,7, 8, 9, 0]
//  console.log(number.toString());

 //3) at
//  var suraname =[ " ram ", "sham","shiva"]
//  console.log(suraname.at(2))
//  console.log(suraname[2]);

 //array.join
   // var cars = [ "bmw","Audi", "scoda"]
   // console.log(cars.join(" # "))    

   //array.push 
   // var cars = [ "bmw","Audi", "scoda"]
   // cars.push("volvo")
   // console.log(cars) 

//array.pop
   // cars.pop(" ")
   // console.log(cars)
   
   // shift and unshift 

   // var surname =[ "bdjjd", "xhjssc ", "bjcbjwkcb"]
   // surname.shift()
   // console.log(surname);

   // unshift
   // surname.unshift("bbbbbbb")
   // console.log(surname);

// Splice 
//  var fruits = [ "apple" , "banana", "kiwi", "pineapple", "mango", "dragonfruit"]
//  document.getElementById("code").innerHTML= fruits;

//  fruits.splice(3, 0 , "Grapes")
//  document.getElementById("code1").innerHTML = fruits;

 // toSpliced  

//  var fruits = [ "apple" , "banana", "kiwi", "pineapple", "mango", "dragonfruit"]
//  document.getElementById("code").innerHTML= fruits;

//  document.getElementById("code1").innerHTML = fruits.toSpliced(2 ,2, " grapes")


 //sliced
//  var fruits = [ "apple" , "banana", "kiwi", "pineapple", "mango", "dragonfruit"]
//  document.getElementById("code").innerHTML= fruits;

//  document.getElementById("code1").innerHTML =fruits.slice(3,6);


//  Array Search Methods 

// 1) indexof ()
//  var  fname =[ "abc ","hsj", "Ram", "bjsac", "nshs", "Ram"]
//  console.log(fname.indexOf("Ram")+1);

 // 2) lastindexof()
//  var  fname =[ "abc ","hsj", "Ram", "bjsac","sgsh", "nshs", "Ram"]
//  console.log(fname.lastIndexOf("Ram"));

 // 3)inculdes ()
//  var  fname =[ "abc ","hsj", "Ram", "bjsac","sgsh", "nshs", "Ram"]
//  console.log(fname.includes("Ram"));
   

//  4) find ()
//  var number = [11 , 12 , 13 , 14 ,15 , 16 ,17, 18 ]
//  document.getElementById("code").innerHTML = number.find(myFunction);

//  function myFunction(value){
//    return value > 15
//  }

//  findIndex ()

// var number = [11 , 12 , 13 , 14 ,15 , 16 ,17, 18 ]
// document.getElementById("code").innerHTML = number.findIndex(myFunction);

// function myFunction(value){
//    return value > 15
// }

//5) findLast ()

// var number = [11 , 12 , 13 , 14 ,15 , 16 ,17, 18 ]
// document.getElementById("code").innerHTML = number.findLast(myFunction);

// function myFunction(value){
//    return value > 15
// }


// Array Sorting :- 1) Alphabetical  2) Numerical 
// 1) Alphabetical

// 1) array.sort()

// var character = [ "banana" , "pineapple" , "blueberry",  "mango" , "orange"  , "Apple"] 
// document.getElementById("code").innerHTML = character 

// character.sort()
// document.getElementById("code1").innerHTML = character   
 
// 2) array.reverse()

// var character = [ "banana" , "pineapple" , "blueberry",  "mango" , "orange"  , "Apple"] 
// document.getElementById("code").innerHTML = character 

// character.reverse();
// document.getElementById("code1").innerHTML = character   


//2) Numerical , 

// 1) Numeric sort 
 
// var rollNo = [ 10 ,20 , 30 ,60 , 40 ,50, 21 ]
// document.getElementById("code").innerHTML=  rollNo ; 

// document.getElementById("code1").innerHTML= rollNo .sort(myFunction)

// function myFunction(a,b){
//    return a-b ;
// }


// Math.min 
// var rollNo = [ 10 ,20 , 30 ,60 , 40 ,50, 21 ]
//  console.log(Math.min.apply(null ,rollNo));

//Math.max  
// var rollNo = [ 10 ,20 , 30 ,60 , 40 ,50, 21 ]
//  console.log(Math.max.apply(null ,rollNo));

// Example of object
var obj = ["Pratik" , "Ram" , "Sham" , "Yash" , "Satvik"]
document.getElementById ("code") .innerHTML=  obj 

obj.sort()
document.getElementById("code1").innerHTML= obj
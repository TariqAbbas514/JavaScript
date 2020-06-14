// chapter1
//1
alert("Thank You Saylani and It's Team")


//1
var username;
//2
var myName = "Tariq Abbas";
//3
var message = "Hello World";
alert(message);
//4
alert(myName);
var age = "26 years old"
alert(age);
var bio="Certified Mobile & Web Application Development";
alert(bio);
//5
var myFavoriteFood = ["PIZZA,PIZZa,PIZ,PI,P"];
alert(myFavoriteFood " <br>");
//6
var email = "abbas.tariq514@gmail.com";
alert("My email address is " + email);
//7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task8
var content = "Yah! I can write HTML content through JavaScript"
document.write(content);

var number = +prompt("Enter your number:");
if(number%3 === 0){
	alert("This nuber divisible by 3")
}else{
	alert("Not divisible by 3")
}

// chapter6-9
// task1
document.write("Result: ");
document.write("<br>");
var number = 10;
 document.write("The value of a is: "+ number);document.write("<br><br>");
 document.write("The value of ++a is: " + ++number);document.write("<br>");
  document.write("Now the value of a is: " + number);document.write("<br><br>");
 document.write("The value of a++ is: " + number++);document.write("<br>");
 document.write("Now the value of a is: " + number);document.write("<br><br>");
  document.write("The value of --a is: " + --number);document.write("<br>");
   document.write("Now the value of a is: " + number);document.write("<br><br>");
   document.write("The value of a-- is: " + number--);document.write("<br>");
   document.write("Now the value of a is: " + number);document.write("<br><br>");

//task2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a);document.write("<br>");
document.write("b is " + b);document.write("<br>");
document.write("result is " + result);document.write("<br><br>");
document.write(" "+ --a);document.write("<br>");
document.write(" "+ --a - --b);document.write("<br>");
document.write(" "+ --a - --b + ++b);document.write("<br>");
document.write(" "+ --a - --b + ++b + b--);document.write("<br><br>");


//Task3
 var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.write("Welcome Dear " +person+ ", Thank you for joining Programming Community.");document.write("<br>");
}

//Task4
//missing
//Task5
 var table= +prompt("Enter a number for create Table:", "5");
document.write("Table of " +table);
document.write("<br>");
for(var i=1; i<=10; i++){
	var result = table*i;
 document.write(table + " * "+ i + " = " + result + "<br>");
}
			
			document.write("<br><br>");

// chapter5
// Task1
var num1 = +prompt("Enter First number:");
var num2 = +prompt("Enter Second number:");
var result = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " +result);document.write("<br>");

// Task2
var result = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " +result);document.write("<br>");
var result = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " +result);document.write("<br>");
var result = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " +result);document.write("<br>");
var result = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " +result);document.write("<br>");

// Task3
// a
var number;
//b
document.write("Value after variable declaration is " +number);document.write("<br>");
//c
var number = 5;
//d
document.write("Initial value: " +number);document.write("<br>");
//e
var number = ++number;
//f
document.write("Value after increment is: " +number);document.write("<br>");
//g
var number = number + 7;
//h
document.write("Value after addition is: " +number);document.write("<br>");
//i
var number = --number;
//j
document.write("Value after decrement is: " +number);document.write("<br>");
//k
var number = number % 3;
//l
document.write("The remainder is: " +number);document.write("<br><br>");

// Task 4
var ticketPrice = 600;
var ticket5 = ticketPrice*5;
document.write("Total cost to buy 5 tickets to a movie is " +ticket5+ "PKR");document.write("<br><br>");

// Task5
var table= +prompt("Enter a number for create Table:");
document.write("Table of " +table);
document.write("<br>");
for(var i=1; i<=10; i++){
	var result = table*i;
 document.write(table + " * "+ i + " = " + result + "<br>");
			}
			document.write("<br><br>");

// Task6
var number = +prompt("Enter Celsius Temperature:");
//a
var far = (number*9/5)+32;
//b
document.write(number+ "&deg;C is " +far+"&deg;F");document.write("<br>");

var number = +prompt("Enter Fahrenheit Temperature:");
//c
var cel = (number-32)*5/9;
//d
document.write(number+ "&deg;F is " +cel+"&deg;C");document.write("<br><br>");

//Task7
document.write("<h2>Shopping Cart</h2>")
var priceItem1 = +prompt("Enter Price of item 1");
document.write("Price of item 1 is " +priceItem1);document.write("<br>");
var quantityItem1 = +prompt("Enter Quantity of item 1");
document.write("Quantity of item 1 is " +quantityItem1);document.write("<br>");
var priceItem2 = +prompt("Enter Price of item 2");
document.write("Price of item 2 is " +priceItem2);document.write("<br>");
var quantityItem2 = +prompt("Enter Quantity of item 2");
document.write("Quantity of item 2 is " +quantityItem2);document.write("<br>");
var shipCharg = +prompt("Enter Shipping Charges");
document.write("Shipping Charges " +shipCharg);document.write("<br><br>");
var totalCost = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shipCharg;
document.write("Total cost of your order is " +totalCost);document.write("<br><br>");

//Task8
document.write("<h2>Marks Sheet</h2>");document.write("<br><br>");
var totalMarks = +prompt("Enter Total Marks");
var obtainMarks = +prompt("Enter Obtained Marks");
var percentage = obtainMarks/totalMarks*100;
document.write("Total marks: " +totalMarks);document.write("<br>");
document.write("Marks obtained: " +obtainMarks);document.write("<br>");
document.write("Percentage: " +percentage);document.write("<br>");

//Task9
document.write("<h2>Currency in PKR</h2>");document.write("<br><br>");
var dollarUS = 104.80;
var saudiRiyal = 28;
var totalPkr = 10*dollarUS+25*saudiRiyal;
document.write("Total Currency in PKR: " +totalPkr);document.write("<br><br>");

// Task10
var number = 12;
document.write(+((number + 5 ) * 10 )/ 2);document.write("<br><br>");

// Task11
document.write("<h2>Age Calculator</h2>");document.write("<br><br>");
var currentYear = +prompt("Enter Current Year: ");
var birthYear = +prompt("Enter Birth Year: ");
var yourAge = currentYear - birthYear;
document.write("Current Year: " +currentYear);document.write("<br>");
document.write("Birth Year: " +birthYear);document.write("<br>");
document.write("Your Age is: " +yourAge);document.write("<br><br>");
document.write("They are either " +yourAge+ " or " +(yourAge-1)+ " years old");document.write("<br><br>");


// Task12

document.write("<h2>The Geometrizer</h2>")
var r = +prompt("Enter radius of circle");
document.write("Radius of a circle: " +r);document.write("<br>");
var pi = 3.142;
document.write("The circumference is: " +2*pi*r);document.write("<br>");
var circleArea = pi*r^2;
document.write("The area is: " +circleArea);document.write("<br>");


//Task13
document.write("<h2>The Lifetime Supply Calculator</h2>")
var snack = prompt("Enter your Favorite Snack", "Ice Cream");
document.write("Favourite Snack: " +snack);document.write("<br>");
var currentAge = prompt("Enter yoaur Current Age: ");
document.write("Current age: " +currentAge);document.write("<br>");
var estimatedMaxAge = +prompt("Enter your Estimated Maximum Age: ");
document.write("Estimated Maximum Age: " +estimatedMaxAge);document.write("<br>");
var snackPerDay = +prompt("Enter Amount of snacks per day: ");
document.write("Amount of snacks per day: " +snackPerDay);document.write("<br>");
var totalSnack = (estimatedMaxAge - currentAge) * snackPerDay;
document.write("You will need " +totalSnack, snack+ " to last you until the ripe old age of " +estimatedMaxAge);document.write("<br>");


//chapter14-16
// Task1
var studentsNames = [];

// // Task2
var studentsNames = [];

// // Task3
var stringArray= ["This is my blog", " technology news posted here."];
// //document.write(stringArray);

// // Task4
var numberArray= [307, 345, 313, 333, 323];

// // Task5
var booleanArray = ["a", "b", "c"]
document.write(booleanArray instanceof Array);

//Task6
var mixArray = ["abcd", 99, "efgh", 100];


// Task7
document.write("<h2>Qualifications:</h2>");
var qualificationPakistan = ["SSC","HSC","BCS", "BS", "BCOM", "MS", "M.Phil.","PhD"];
document.write("1) "+qualificationPakistan[0]);document.write("<br>");
document.write("2) "+qualificationPakistan[1]);document.write("<br>");
document.write("3) "+qualificationPakistan[2]);document.write("<br>");
document.write("4) "+qualificationPakistan[3]);document.write("<br>");
document.write("5) "+qualificationPakistan[4]);document.write("<br>");
document.write("6) "+qualificationPakistan[5]);document.write("<br>");
document.write("7) "+qualificationPakistan[6]);document.write("<br>");
document.write("8) "+qualificationPakistan[7]);document.write("<br>");



//Task8
 var stdNames = ["Michael","John","Tony"];
 var stdScores = ["320","230","480"];
 var totalMarks = 500;

 document.write("Score of " +stdNames[0]+ " is " +stdScores[0]+ ", Percentage: " +(stdScores[0]/totalMarks*100)+"%");document.write("<br>");
  document.write("Score of " +stdNames[1]+ " is " +stdScores[1]+ ", Percentage: " +(stdScores[1]/totalMarks*100)+"%");document.write("<br>");
 document.write("Score of " +stdNames[2]+ " is " +stdScores[2]+ ", Percentage: " +(stdScores[2]/totalMarks*100)+"%");document.write("<br>");


//Task10
var scoreArray = ["320","230","480","120"];
document.write("Score of Students : " +scoreArray);document.write("<br>");
document.write("Ordered Scores of Students : " +scoreArray.sort());document.write("<br><br>");

//Task11
var arr = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h2>Cities list:</h2>");
document.write(arr);
document.write("<h2>Selected cities list:</h2>");
document.write(arr.splice(2,2));


//Task12
var arr = ["This", "is", "my", "cat"];
document.write("<h2>Array:</h2>");
document.write(arr);
document.write("<h2>String:</h2>");
document.write(arr.join(" "));


chapter17-20
//Task3
for (var i = 1; i <= 10; i++) {
	document.write(i);document.write("<br>");
}document.write("<br><br>");

//Task4
var table= +prompt("Enter a number to show its multiplication Table:");
document.write("Multiplication table of " +table);document.write("<br>");
var length= +prompt("Enter length multiplication Table  ");
document.write("Length " +length);
document.write("<br><br>");
for(var i=1; i<=length; i++){
	var result = table*i;
 document.write(table + " * "+ i + " = " + result + "<br>");
}
			
			document.write("<br><br>");


// Task5
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
 for (var i = 0; i <= length; i++) {
  document.write(fruits.join(" <br>"));
 	document.write("<br><br>");
 	 for (var i = 0; i <= 4; i++) {
 document.write("Element at index " +i+ " is " +fruits[i]+ "<br>");
 }
 }

 //Task7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
 var i = +prompt("Welcome to ABC Bakery, what do you wanr to order sir ma'am?");
if (i === A.includes("cake") || i === A.includes("apple pie") || i === A.includes("cookie")
 || i === A.includes("chips") || i === A.includes("patties")) {
 document.write(i+ " is available at index " + indexOf(i) + " in our bakery");
}else{
	document.write("no");
}
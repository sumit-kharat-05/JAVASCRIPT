
console.log("Hello, World!");
const student ={
    fullName : "Sumit kharat",
    age : 22,
    city : "Pune"
}
console.log(student);

// Que1

const product = {
    tittle : "Ball Pen",
    rating : 4.5,
    isDealm : true,
    price : 20,
};

console.log(product);

//Artimatic Operators
let a = 10;
let b = 5;

console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);

//Modules
console.log("a % b =",a % b);

//Exponentiation
console.log("a ** b =",a ** b);

//Increment and Decrement
a++;
console.log("a =", a);

b--;
console.log("b =", b);

//Assignment Operators
let c = 10;
let d = 20;

c += 5;
console.log("c =", c);

c -= 5;
console.log("c =", c);

c *= 3;
console.log("c =", c);

c /= 2;
console.log("c =", c);


//Comparison Operators
let e = 20;
let f = 40;

console.log("20 == 40", e == f);
console.log("20 === 40", e === f); 
console.log("20 != 40", e != f);
console.log("20 !== 40", e !== f);
console.log("20 < 40", e < f);
console.log("20 > 40", e > f);
console.log("20 <= 40", e <= f);
console.log("20 >= 40", e >= f);

//Logical Operators
let g = 30;
let h = 40;

console.log("30 > 40 && 30 < 40", g > h && g < h);
console.log("30 > 40 || 30 < 40", g > h || g < h);
console.log("30 > 40 ! 30 < 40", g > h , g < h);

//Conditional Statements
let Age=18;
let mode = "dark";
let num = 10;
let color;

//If Statement
if(Age <= 18)
{
    console.log("You Can Not Vote");
}

//If-Else Statement
 if(mode === "dark")
 {
    color = "black";
 }
else
 {
    color = "white";
 }

 console.log(color);

 
 if(Age >= 18)
 {
    console.log("You Can Vote");
 }
 else
 {
    console.log("You Can Not Vote");
 }


 if(num % 2 === 0)
 {
    console.log("Even");
 }
 else
 {
    console.log("Odd");
 }

  //Else-If Statement
  if(mode === "dark")
 {
    color = "black";
 }
else if(mode === "light")
{
    color = "white";
}
else if(mode === "blue")
{
    color = "blue";
}
else
{
    color = "unknown";
}           
 console.log(color);

 //Ternary Operator
 let age = 25;
 age >= 18 ? console.log("You Can Vote") : console.log("You Can Not Vote");

 // Que3

 let numm = prompt("Enter A Number: ");
 if(numm % 5 === 0)
 {
   console.log(numm,"multiple of 5");
 }
 else
 {
   console.log(numm,"not multiple of 5");
 }

 //Que4

 let score = 92;
 let grade;

 if(score >= 90 && score <= 100)
 {
   grade = "A";
 }
 else if(score >= 70 && score <= 89)
 {
   grade = "B";
 }
 else if(score >= 60 && score <= 79)
 {
   grade = "C";
 }
 else if(score >= 50 && score <= 59)
 {
   grade = "D";
 }
 else if(score >= 0 && score <= 45)
 {
   grade = "F";
 }
 console.log("This Is Your Grade: ",grade);
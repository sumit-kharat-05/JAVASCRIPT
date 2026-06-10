//Lecture No 01//
console.log("Hello, World!");
const student ={
    fullName : "Sumit kharat",
    age : 22,
    city : "Pune"
}
console.log(student);

//Lecture No 01 Que1//

const product = {
    tittle : "Ball Pen",
    rating : 4.5,
    isDealm : true,
    price : 20,
};

console.log(product);

//Lecture No 02//
//Artimatic Operators//
let a = 10;
let b = 5;

console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);

//Modules//
console.log("a % b =",a % b);

//Exponentiation//
console.log("a ** b =",a ** b);

//Increment and Decrement//
a++;
console.log("a =", a);

b--;
console.log("b =", b);

//Assignment Operators//
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


//Comparison Operators//
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

//Logical Operators//
let g = 30;
let h = 40;

console.log("30 > 40 && 30 < 40", g > h && g < h);
console.log("30 > 40 || 30 < 40", g > h || g < h);
console.log("30 > 40 ! 30 < 40", g > h , g < h);

//Conditional Statements//
let Age=18;
let mode = "dark";
let num = 10;
let color;

//If Statement//
if(Age <= 18)
{
    console.log("You Can Not Vote");
}

//If-Else Statement//
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

  //Else-If Statement//
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

 //Ternary Operator//
 let age = 25;
 age >= 18 ? console.log("You Can Vote") : console.log("You Can Not Vote");

 //Lecture No 02 Que1//

//  let numm = prompt("Enter A Number: ");
//  if(numm % 5 === 0)
//  {
//    console.log(numm,"multiple of 5");
//  }
//  else
//  {
//    console.log(numm,"not multiple of 5");
//  }

 //Lecture No 02 Que2//

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

 //Lecture No 03//
 //For Loops//

 let sum = 0;
 for (let i=1; i<=5; i++)
 {
  sum = sum + i;
 }
 console.log("sum =",sum);

 //While Loop//

 let i=1;
 while(i<=5)
{
  console.log("i=", i);
  i++;
}

//Do While Loop//

let j=20;
do{
  console.log("SUMIT");
  j++;
} while(j<=10);

//For Of Loop//

let str = "JavaScript";

let size = 0;
for(let val of str)
{
console.log("val=",val);
size++;
}
console.log("String Size=",size);

//For In Loop//

let studentt ={
  name:"sumit",
  Age:"20",
  Cgpa:"8.0",
  isPass:"true"
}
for(let i in student)
console.log(i);

//Lecture No 03 Que1//

for (let num=0; num<=100; num++)
{
    if(num % 2 !== 0)
    {
      console.log("num =", num)   
    }
}

//Lecture No 03 Que2//
// let gameNum = 25;
// let userNum = prompt("Guess The Game Number :");

// while(userNum != gameNum)
// {
//   userNum = prompt("You Entered Wrong Number , Guess Again");
// }
// console.log("Congratulations You Entered Correct Number");

//String//

let strr = "SUMIT KHARAT"

console.log (strr[8]);

//Template Literals//

let obj={
  item : "pen",
  price : 20
}

let output = `The Price Of ${obj.item} is \$${obj.price} Rupees`;
console.log(output);

//Escape Characters//

let strrr = "SUMIT\tKHARAT"
console.log(strrr.length);

console.log("SUMIT\nKHARAT");

//String Methods//

let str1 = "sumit kharat"
let newstr = str1.toUpperCase();
console.log(str1);
console.log(newstr);

let str2 = "SUMIT KHARAT"
let newstr1 = str2.toLowerCase();
console.log(str2);
console.log(newstr1);

let str3 = "   HTML CSS JS   "
console.log(str3.trim());

let str4 = "0123456789"
console.log(str4.slice(2,5));

let str5 = "shivaji"
let str6 = "Maharaj"
console.log(str5.concat(str6));

let str7 = "SUMIT"
console.log(str7.replace("SU","A"));

//Lecture No 03 Que 03//

// let fullname = prompt("Enter Your FullName Without Space");
// let username = "@" + fullname + fullname.length;
// console.log(username);

//Lecture No 04//

//Arrays//

let marks = [97, 65, 56, 46, 38];
console.log(marks);

//Array Indices//

let names = ['a', 'b', 'c', 'd'];
console.log(names[2]);

//Looping Over An Array//
let   heroies = ['ironman','thor','hulk','shaktiman','spiderman'];
for(let hero=0; hero < heroies.length; hero++)
{
  console.log(heroies [hero])
}

//Lecture No 04 Que 01//

let markss = [85,97,44,37,76,60];
let sum1 = 0;
for (let val of markss)
{
  sum1 += val;
}

let avg = sum1 / markss.length;
console.log(`avg marks Of The Class = ${avg}`);
// console.log(sum1);

//Lecture No 04 Que 02//

let items1 = [250,645,300,900,50]

let i1 = 0;
for (let valu of items1)
{
  console.log(`value at index ${i1} = ${valu}`);
  let offer = valu / 10;
  items1 [i1] = items1 [i1] - offer;
  console.log(`value after offer =${items1[i1]}`);
  i1++;
}

//Array Methods//
//push()//

// let fooditems = ["Potatao","Banana","Tomato","Apple","Graphes"]

// fooditems.push("Chips","Guava","Paneer");

// console.log(fooditems);

//pop()//

let fooditems = ["Potatao","Banana","Tomato","Apple","Graphes"]
console.log(fooditems);
let deletedItem=fooditems.pop();
console.log(fooditems);
console.log("Deleted" , deletedItem);

//tostring() + concat()//

let marvelheroies = ["thor","spiderman","ironman"];
let dcheroies = ["superman","batman"];

let heroies1 = marvelheroies.concat(dcheroies);
console.log(heroies1);

//slice()//

let marvelheroiess = ["thor","spiderman","ironman"];
console.log(marvelheroiess);
console.log(marvelheroiess.slice(0,2));

//splice()//

let arr = [10,20,30,40,50];
arr.splice(2,2,101,102);
console.log(arr);

//Lecture No 04 Que 03//

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// DeletedItems = companies.shift();
// console.log("Delete " , DeletedItems);
companies.splice(2,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

//Lecture No 05//

//Functions//

function sum2(x,y)
{
  console.log(x+y); 
}
sum2(55,45);

//Arrow Functions//

const arrowMul = (a,b) => 
{
  console.log(a*b);
}
arrowMul(5,6);

//Lecture No 05 Que 01//

function countvowels (str1) 
{
  let count2 = 0;
  for(const char of str1)
  {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
    {
      count2 ++;
    }
  }
  console.log(count2);
}
console.log(countvowels("sumit kharat"));

//Lecture No 05 Que 02//

let arr1 = ["Nagpur" , "Pune" , "Mumbai" , "Nashik" , "Sambhajinagar"];

arr1.forEach((val ,idx1 ,arr1) => {
  console.log(val.toUpperCase(),idx1, arr1);
});

//Lecture No 05 Que 03//

let nums= [1,2,3,4,5];

nums.forEach((num) =>
{
  console.log(num*num);
});

//Array Methods//
//map()//

let nums1 = [10,20,30,40,50];

nums1.map((nums) =>
{
  console.log(nums*nums);
});


//filter()//

let nums2 = [1,2,3,4,5,6,7,8,9,10];

let evenarr1 = nums2.filter((num1) =>
{
  return num1 % 2 === 0;
});

console.log(evenarr1);

//reduce()//

let nums3 = [1,2,3,4,5];

const sums  = nums3.reduce((res,currval) =>
{
  return res + currval;
});

console.log(sums);

//Lecture No 05 Que 04//

let marks1 = [85,96,63,85,92,91,85,88,90,95];

let toppers = marks1.filter((mark) =>
{
return mark > 90;
});
console.log(toppers);

//Lecture No 05 Que 05//

// let n = prompt ("Enter Number :");

// let arr2 = [];

// for(i = 1;i <= n; i++)
// {
//   arr2[i-1] = i;
// }

// console.log(arr2);

// let sums1 = arr2.reduce((res,currval1) =>
// {
//   return res + currval1;
// });

// console.log(sums1);

// let factorial = arr2.reduce((res,currval1) =>
// {
//   return res * currval1;
// });

// console.log(factorial);

//Lecture No 06//

//Document Object Model (DOM)//

console.dir(document);
console.log(document.body);

let heading = document.getElementById("head1");
console.log(heading);

let heading1 = document.getElementById("head2");
console.log(heading1);

let heading2 = document.getElementById("head3");
console.log(heading2);

let heading01 = document.getElementsByClassName("h01");
console.dir(heading01);
console.log(heading01);

let heading02 = document.getElementsByClassName("h02");
console.dir(heading02);
console.log(heading02);

let heading03 = document.getElementsByClassName("h03");
console.dir(heading03);
console.log(heading03);

let element = document.getElementsByTagName("h3");
console.log(element); 

let element1 = document.querySelector("h3");
console.log(element1); 

let element2 = document.querySelectorAll("h3");
console.log(element2); 

let div = document.querySelector("div");
console.log(div);
div.innerText;
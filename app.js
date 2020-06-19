Assignment 21-25

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.
 //Greet the user using his full name. 

 firstName=prompt("what is your first name");
LastName=prompt("what is your last name");

fullName=firstName+" "+LastName
alert(" welcome to "+fullName)

//2. Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser  

phoneModel=prompt("favourite mobile phone model");
document.write("My favourite phone is: "+ phoneModel+"<br>");
displayLength=phoneModel.length
document.write("Length of String: "+ displayLength)


//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 
var a="Pakistani"
document.write("String: "+a+"<br>")
b=a.indexOf("n")
document.write('Index of n: ' + b)

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 

a="Hello World";
document.write("String: " + a +"<br>")
b=a.lastIndexOf("l")
document.write("Last index of l: "+b)

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.   
var string="Pakistani"
document.write("String: "+string+"<br>")
index=string.slice(3,4)
document.write("Character at index 3 is: "+index)

//6. Repeat Q1 using string concat() method. 
firstName=prompt("what is your name")
LastName=prompt("what is your last name")
a=(firstName.concat(LastName))
alert("Welcome to"+ a)


//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 
var a="Hyderabad"
document.write("City: "+ a +"<br>")
var b=a.replace("Hyderabad","Islamabad")
document.write("After Replacement:"+b)

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//

var message = "Ali and Sami are best friends.They play cricket and football together." 
var a=message.replace("and","&")
document.write(a)



//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.   
a="472"
document.write("Value: "+a+"<br>")
document.write("Type: "+" "+typeof(a)+"<br>")
document.write("Value"+"<br>")
b=Number('472')
document.write("Type: "+ typeof(b))

//10. Write a program that takes user input. Convert and show the input in capital letters.  
userInput=prompt("write the input")
document.write("User Input: "+userInput+"<BR>")
b=userInput.toUpperCase()
document.write("Upper case: "+b)

//11. Write a program that takes user input. Convert and show the input in title case.
userInput=prompt("write the input")
document.write("User Input: "+userInput+"<BR>")
b=userInput[0].toUpperCase()+userInput.slice(1).toLowerCase()
document.write("Title case: "+b)

//12. Write a program that converts the variable num to string. 
//var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var d = 35.36;
var s = d + '';
s =s.replace('.', '');
s = parseInt(s);
document.write("Result: "+s)

//13. Write a program to take user input and store username in a variable.
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
userName=prompt("whaat is the username? ")
for(var i=0;i<=userName.length;i++){
    if(userName[i]==='@'||userName[i]===','||userName[i]==='.'||userName==='@'){
        alert("please enter a valid username")
    }
}

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
 //After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search.
 //Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:  

 A=["cake","apple pie","cookie","chips","patties"]
user=prompt("welcome to Abc bakery ,which item do you want to order");
for(var i=0;i<=A.length;i++){
    
    
    
    if (A[i]===user){
        alert(user+" is available at index "+i+" in our bakery")
        break
    }
    
     else{
        alert("we are sorry"+user+" is not available in our bakery")
       break
         }
        
        }

 }

 //15.Write a program to take password as an input from user. The password must qualify these requirements: 
 //a. It should contain alphabets and numbers 
 //b. It should not start with a number 
 //c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password.
  //For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document
  input=prompt("enter the password")
  


  //16. Write a program to convert the following string to an array using string split method.
  // var university = “University of Karachi”; Display the elements of array in your browser. 
  var university="University of Karachi"
  var a=university.split('') 
for(var i=0;i<a.length;i++){
    console.log(a[i])
}


//17. Write a program to display the last character of a user input. 
user=prompt("write your country name?")
document.write("User Input: "+user +'<br>')
document.write("Last character of input : "+ user.slice(-1))


  user=prompt("write the password")
  //18. You have a string “The quick brown fox jumps over the lazy dog”.
  // Write a program to count number of occurrences of word “the” in given string. 
  var temp = "The quick brown fox jumps over the lazy dog";
  a=temp.toLowerCase()
  var count = (a.match(/the/g) || []).length;
  document.write("Text: "+temp+"<br>"+" There are "+count+" occurence of word 'the'")



  //Assignment 26-30   Maths method


  //1. Write a program that takes a positive integer from user & display the following in your browser.
  // a. number
    //b. round off value of the number 
    //c. floor value of the number 
    //d. ceil value of the number 

    Number=+prompt("Enter the number");
document.write("Number: "+Number+"<br>")
var round=Math.round(Number)
document.write("Round: "+round+"<br>")

var floor=Math.floor(Number)
var ceil=Math.ceil(Number)

document.write("Floor Value: "+floor+"<br>")
document.write("Ceil Value: "+ceil+"<br>")


//2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number 
//c. floor value of the number 
//d. ceil value of the number  



Number=+prompt("Enter the number");
document.write("Number: "+Number+"<br>")
var round=Math.round(Number)
document.write("Round: "+round+"<br>")

var floor=Math.floor(Number)
var ceil=Math.ceil(Number)

document.write("Floor Value: "+floor+"<br>")
document.write("Ceil Value: "+ceil+"<br>")

//3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


Number=+prompt("enter the number")
var absolute=Math.abs(Number)
document.write("the absolute value of -4 is "+absolute)


//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:   
var a=Math.random() * 6
a=Math.round(a)
document.write("random dice value: " + a+"<br>")
var a=Math.random() * 6
a=Math.round(a)
document.write("random dice value: " + a+"<br>")
var a=Math.random() * 6
a=Math.round(a)
document.write("random dice value: " + a+"<br>")

//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
var toss=Math.random()*2
var a=Math.ceil(toss)
if(a===2){
    document.write(a +"<br>")
    document.write("Random coin Value: Head")
}
else{  document.write(a +"<br>")
document.write("Random coin Value: Tail")
}

//6. Write a program that shows a random number between 1 and 100 in your browser

a=Math.random()*100
a=Math.ceil(a)
document.write("the random number between 1 and 100 is: "+a)


//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

weight=prompt("Enter the weight")
a=parseInt(weight)

document.write("The weight of user is " +a+" kilograms "+ "<br>")


//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10.
// If the user input equals the secret number, congratulate the user.   


Number=Math.random()*10
SecretNumber=Math.ceil(Number)

Guess=+prompt("Enter the number")
if(Guess===SecretNumber){
    alert("You won")
}
else{
    alert("try again")
}


Assignment 31-34   Data method

//1. Write a program that displays current date and time in your browser.  
var a=new Date();
document.write(a)

//2. Write a program that alerts the current month in words. For example December. 
var months = ['January','February','March','April','May','June','July','August','September','October','November','december']
var a=new Date();
var b=a.getMonth();
document.write("Current month:" +months[b])

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var a=new Date();
var b=a.getDay();
document.write("Today is: " +days[b])


//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.  
var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var a=new Date();
var b=a.getDay();
 if (days[b]=='Saturday'|| days[b]=='Sunday'){
     alert("It's a fun day")

 }
 else {
     alert("it's a busy day")}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.  
var a=new Date();
var b=a.getDate();
if(b<16){
    alert("The fifteen days of month")

}
else{
    alert("the last days of month")
}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and 
//assigns it to a variable that hasn't been declared beforehand. 
//Use any variable you like to represent the Date object. 
var a=new Date();
document.write("Current date: "+a+"<br>")
var b=a.getTime()
var c=b/(1000*3600)
document.write("Elapsed milliseconds since january 1,1970: "+ b+"<br>")
document.write("Elapsed minutes since january 1,1970: "+ c+"<br>")


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”

var a=new Date();
var b=a.getHours();
if(b<12){
    alert("Its AM")
}
else{
alert('Its PM')
}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
var a=new Date();
a.setMonth(11);
a.setDate(31);
a.setFullYear(2020)
a.setHours(00)
a.setSeconds(00)
a.setMinutes(00)
document.write("Later date: "+a);

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
//Note: 1st Ramadan was on June 18, 2015 

var a=new Date();
a.setFullYear(2015);
a.setMonth(5);
a.setDate(18);
var b=new Date();
c=b-a;
c=c/(1000*3600*24)
document.write(c+" days has passed since 1st Ramadan,2015")

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.   

var a=new Date();
a.setFullYear(2015);
a.setMonth(11);
a.setDate(5);
a.setMinutes(50);
a.setHours(22);
a.setHours(16);
var b=new Date();
c=b-a;
c=c/(1000)
document.write("On reference date "+b+" <br>"+c+" had passed since beginning of 2015")


//11. Create a Date object for the current date and time. 
// the hours, reset the date object an hour ahead and finally display the date object in your browser
var a=new Date();
a.setFullYear(2015);
a.setMonth(11);
a.setDate(5);
a.setMinutes(08);
a.setHours(23);
a.setSeconds(16);
document.write("current date: "+a+"<br>")
b=a.getHours()-1
a.setHours(b)
document.write("1 hours ago, it was "+a)

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var a=new Date();
a.setFullYear(2015);
a.setMonth(11);
a.setDate(5);
a.setMinutes(09);
a.setHours(23);
a.setSeconds(37);
document.write("current date: "+a+"<br>")
b=a.getFullYear()-100
a.setFullYear(b)
document.write("100 year back, it was "+a)


//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.   
age =+prompt("what's your age?")
var b=new Date()
document.write("age: "+ age+"<br>")
c=b.getFullYear()-age
document.write("your birth of years is "+c+"<br>")

//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.
// Display the following fields:
// a. Customer Name
// b. Current Month 
//c. Number of units 
//d. Charges per unit e. Net Amount Payable (within Due Date) 
//f. Late Payment Surcharge 
//g. Gross Amount Payable (after Due Date) Where,  



var CustomerName= "ABC Customer";
var month='Februaury';
var NumberOfUnits=410;
var ChargesPerUnits=16
var LateCharges=350

var amountPayable=NumberOfUnits*ChargesPerUnits;
var GrossPayable=amountPayable+LateCharges;

document.write("Customer name: "+ CustomerName+"<BR>")

document.write("Month: "+ month+"<BR>")

document.write("Number of units: "+ NumberOfUnits+"<BR>")

document.write("Charge per units: "+ ChargesPerUnits+"<BR> <br>")



document.write("Net Amount Payable (within due date): "+ amountPayable+"<BR>")
document.write("Late payament surcharge "+ LateCharges+"<BR>")

document.write("Gross Amount Payable(after due date): "+ GrossPayable+"<BR>")


// Assignment 35-38 FUNCTION


//1. Write a function that displays current date & time in your browser. 
function DateTime(){
    a=new Date()
    document.write(a)
}

DateTime()


// 2. Write a function that takes first & last name and then it greets the user using his full name.

function Name(First,Last){
    var fullName=First+" "+Last;
    document.write(fullName)


}

Name('shaheryar','khan');

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 


function add(){
    a=+prompt("enter the first number")
    b=+prompt("enter the second number")
    return document.write(a+b)
}

add()


//4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
//Return and show the desired result in your browser.   
num1=+prompt("enter the first number")
num2=+prompt("enter the second number")
opr=prompt("enter the operator")
function calc(){
    if(opr==='+'){
        return num1+num2
}

   else if(opr==='-'){
       return num1-num2
   }
   else if(opr==='*'){
       return num1*num2
   }
   else if(opr==='/'){
       return num1/num2
   }
}

var result=calc()
document.write(result)



//5. Write a function that squares its argument.   
function square(a,b){
    a=Math.pow(a,2)
    b=Math.pow(b,2)
    document.write("the square of arguments are "+ a +" and "+b)

}
square(2,3)

//6. Write a function that computes factorial of a number. 
function fact(a){
    if (a===0){
        return 1
    }
    else{
        return a*fact(a-1)
    }

}

a=fact(5)
document.write(a)

//7. Write a function that take start and end number as inputs & display counting in your browser.   
function counting(){
    firstNumber=+prompt("enter the start number")
    secondNumber=+prompt("enter the end number")
    for(i=firstNumber;i<=secondNumber;i++){
        document.write(i+"<br>")
    }

}

counting()

//8. Write a nested function that computes hypotenuse of a right angle triangle.  
//Hypotenuse2 = Base2 + Perpendicular2 
base=+prompt("wht is the value of base")
perpendicular=+prompt("what is the value of perpencidular")



function Hypotenuse(){
    return Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
}
x=Hypotenuse()
document.write(x)
   


//9. Write a function that calculates the area of a rectangle.     
 //A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variable
  //i
 function area(width,height){
    return width*height
}
area=area(3,4)
document.write(area)
  
//ii
function area(width,height){
    return width*height
}
area=area('a','b')
document.write(area)


//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. 

function palindrome(str){
    var check=""
    for(var i=str.length - 1; i>=0;i--){
    check += str[i]

}
if(check===str){
    document.write(str +"   is palindrome")
}
else{
    document.write(str + " is not palindrome word")
}}

palindrome('pakistan')


//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 
function firstLetter(str){
    a=str.slice(0,1).toUpperCase()
    b=str.slice(1)
    return a+b

}
x=firstLetter("the quick brown fox")
document.write((x))


//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));


//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'   



function occurence(string,letter){
    var count = (string.match(/o/g) || []).length;
    document.write("occurence: "+count);
 }
occurence("JSresourceS.com","o")

//14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. 
//Create a function called calcCircumference: • Pass the radius to the function. 
//• Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea: • Pass the radius to the function. 
//• Calculate the area based on the radius, and output "The area is NN".  
//Circumference of circle    =     2πr
// Area of circle       =     πr2 


function calcCircumference(radius){
    circumference= 2*3.142*radius
    return document.write("The circumference is: "circumference)
}
calcCircumference(2)




function calcArea(radius){
    Area= 3.142*Math.pow(radius,2)
    return document.write("The Area is: "+Area)
}
calcArea(4)
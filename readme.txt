First Lecture 
DOM. Document Object Model. it is tree of objects create by browser when a webpage loads. browser use dom to
interpret the page and display its content. 
in the model, we have html at the top, inside html document we have root html, and inside root html we have several tags
like head title and also body elements that has a, p, and other tags. these elements has different attributes. 
DOM allows elements to be changed dynamically or updated using js library or jquery.

means we can change html elements attributes when specific events triggered. e.g, click button. 
3 methods to change elements. by tag name, by id, and by class name. 


Lecture 02.
Change elements color or text when we click on it. 


Lecture 03
html css are static programming languages. js is client side, means it communicates with web browser not web server. 
it allows user web page interactively. 
http://javascriptkit.com/script/script2/charcount.shtml (code to check how many characters users has entered).
http://javascriptkit.com/script/cut161.shtml (code for user to enter only 10 words)
http://javascriptkit.com/script/script2/formrequired.shtml (code for required attribute)
http://javascriptkit.com/script/script2/accept_term.shtml (code to accept_term)

js cannot be forced on users web browser. must be supported on client web browser. if user has turned off js in browser then it will not work.
if browser is outdated then some functions may not work properly. most browser support js by default. js in not java. 
js is object oriented language. means attributes of object are contained in variable like to describe person we have its name, height, color, weight etc., 


Lecture 04
we can put script tag in head tag to use js. it is because the head tag is load first when browser opens. 
if we put it in the body tag then there maybe some issue that some functions in code will not work as they will not be loaded properly. 

let's create a code to check age in dog years. 
 <script type="text/javascript">
                    function dogAge() {

                        console.log('form1',form1.humanage.value);
                        var yourage= form1.humanage.value*7;
                        alert("your age in dogyears is:"+ yourage);
                        
                    }
    </script>

       <form id="form1">
        <input type="number" placeholder="enter age" id="humanage">
        <button onclick="dogAge()">Click me</button>
    </form>


Lec 05. External JS.
JS code can be written in external separate file. create new file of js and insert previous lecture code in 
that separate file. link that js file in html. use script tag in head section. 
by using separate file, it is easy to maintain code. it increase page loading speed. 


Lec 06. JS Output
Different methods for output in js. first is document.write() method. e.g., 
<p>Below is result:</p> 
<script>document.write(6+5);</script> //This will output as "below is result: 11". 
if we use script tag in the head or start of body then output will be as "11 below is result:".

Another method for output is window alert. this will output data in popup message box. 
just change document.write with window.alert and see difference. 


Lec 07. JS Inner html
it allows to output data in inner html. for example, document.getelementbyid("id).innerhtml=6+3;
<p id="math"></p>


Lec 08. JS Comments. comments are not shown in output. these are to understand the code. 
// is used for single line comments and 
/* */ is used for multi line comments. used for explaining large line of code. 


Lec 09. JS Constants. 
the fixed values that can't be changes. which are independent of other. the values that does not depend on others.
like 6+3, in lec 07 are Constants. these are fixed. Constants can be numbers or integers or strings. you can use single 
qoute or double qoute strings. if we  add a string with a number, it will combine those values. 
e.g., "hello" + 6 = "hello6". if we use '6'+3, it will output 63. 


Lec 10. JS variables.
variables used to store single or multiple value. these values can be changed by user input or any other factor.
for example, var x,y,z; x=10; y=20; z=x+y;
alert("The result is:" + z); it will show 30 result. 

x,y,z are called identifiers. use more descriptive identifiers instead of short name. 
Rules for identifiers. 
1. must start with letter or underscore.
2. name can contain letters, digits, underscore, and dollar sign. 
3. name cannot contain spaces or special characters.
4. name cannot be reserved keywords. like var, let, const, etc.
5. name should be unique.
6. name should be case sensitive.
7. name should not be same as built-in objects. like date, math, etc.
8. name should not be same as built-in functions. like alert, prompt, etc.
9. name should not be same as built-in properties. like length, value, etc.
10. name should not be same as built-in methods. like tostring, valueof, etc

strings must be written in single or double qoute. 


Lec 11. JS Assignment Operator. 
Assignment operator (=) is used to assign value to variable. value of left side = value of right side. 
it allows us to compute values of two different data types. like string and numbers. e.g, var number= 30 + 'bananas';


Lec 12.  JS Arithmatic Operators.
Arithmatic operators are used to perform Arithmatic operations on numbers. +, -, *, /, %, ++, --. 
var x= 100+50. Add two numbers. same for multiply, divide, substract and increment(increase current value of 
variable by one, if x=5, then use x++, it will become 6). decrement will decrease the current value by one. 


Lec 13. JS Operator precedence.
Operator precedence is the order in which operations are performed in an expression. first bracket, then exponent, 
then multiplication, division, modulus, then addition, subtraction, then assignment. 
(two operators having same precedence will be solved according to the order in which they are written).

var x = (20+30)*5;


Lec 14. JS Data Types.
Many data types. 
1. Number: numeric values. e.g., 10, 20, 30.
2. String: sequence of characters. e.g., "hello", 'hello'.
3. Array: collection of values. e.g., [10, 20, 30].  
4. Object: collection of key-value pairs. e.g., {name: 'john', age:'25}'
5. Undefined: variable declared but not assigned any value.
6. Null: no value.
7. Boolean: true or false.
8. Date: date and time. e.g., new Date('2022-01-01')
10. Error: error object. e.g., new Error('something went wrong').
11. Math: math object. e.g., Math.PI.
12. JSON: json object. e.g., JSON.parse('{"name": "john", "age": 25}');


Lec 15. JS Objects.
var car = {type:'Honda', model:'2020', color:'white', seats:'4'}
document.getElementById("math").innerHTML= car.type; this will show car type in outpur. if we want to show 
all properties of car, we can use for in loop. if we want to use any other property we will write that like car.color.


Lec 16. JS Objects Output. 
var person = {name:'Ali', eyes:'black', age:'25'}
document.getElementById("math").innerHTML= person.name + ' has' +' ' +person.eyes +' eyes' + ' at the age of' + ' '
+person.age;


Lec 17. JS String.
strings store series of characters. single or double qoute. 
var str = 'hello';

Below are string methods. not discussed in video but just learn.
document.getElementById("math").innerHTML= str.toUpperCase(); this will show HELLO.
document.getElementById("math").innerHTML= str.toLowerCase(); this will show hello.
document.getElementById("math").innerHTML= str.length; this will show 5.
document.getElementById("math").innerHTML= str.charAt(0); this will show h.
document.getElementById("math").innerHTML= str.indexOf('e'); this will show 1.
document.getElementById("math").innerHTML= str.substring(1,3); this will show el.
document.getElementById("math").innerHTML= str.replace('h', 'H'); this will show Hello.
document.getElementById("math").innerHTML= str.concat(' world'); this will show hello world.
document.getElementById("math").innerHTML= str.split(''); this will show ["h", "e","l", "l", "o"].
document.getElementById("math").innerHTML= str.trim(); this will show hello (remove spaces from start and
end of string).

let's take example. var studentone= 'Ali';
let studenttwo= "Ahmed";
document.getElementById("math").innerHTML= studentone +" <br>"+studenttwo;

this will show Ali and Ahmed in two lines.


Lec 18. JS String length. 
we can use .length method to check length of string.  
var str = 'hello';
document.getElementById("math").innerHTML= str.length; this will show string length, e.g., 5.


Lec 19. JS Special Characters. 
to use "" inside "", we will use \.
var x= "we are the best \"players\" in the country";
document.getElementById("math").innerHTML= x;


Lec 20. JS Random numbers
we can use Math.random() to generate random numbers between 0 and 1.
document.getElementById("math").innerHTML= Math.random();

Lec 21. JS Min and Max functions.
document.getElementById("math").innerHTML= Math.min(500, 600, 300, 100, 40, 1000, 1500);
this will show minimum value 40.

document.getElementById("math").innerHTML= Math.max(500, 600, 300, 100, 40, 1000, 1500);
this will show maximum value 1500.


Lec 22. JS Math Round Function. 
document.getElementById("math").innerHTML= Math.round(4.7); this will round up the number and show 5.

We can also use math.ceil and math.floor function. floor function will round down the value, and ceil will round up the value even it is below .5.
take example. 
document.getElementById("math").innerHTML= Math.ceil(4.2); this will show 5.
document.getElementById("math").innerHTML= Math.floor(4.7); this will show 4.

Lec 23. JS Arrays. 
Used to store multiple values in single variable. we can also type index number of specific value that we want in output. 
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
document.getElementById("math").innerHTML= cars[0]; this will show Toyota.

to check length of array, we can use .length property.
document.getElementById("math").innerHTML= cars.length; this will show 4.


Lec 24. JS Array Attributes. 
We can use tostring() method to output values of array. 
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
document.getElementById("math").innerHTML= cars.toString();
this will show Toyota,Honda,Suzuki,Nissan. it is separated by comma default. if we want to show that it should be
separated by any other symbol we can use join() method. 
document.getElementById("math").innerHTML= cars.join(" - ");
this will show Toyota - Honda - Suzuki - Nissan.

we can use .push() method to add new value in array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.push("BMW");
document.getElementById("math").innerHTML= cars; this will show all values including BMW.


Lec 25. JS Arrays. Pop, Push, Shift, Unshift. 
pop() method is used to remove last element of array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.pop();
document.getElementById("math").innerHTML= cars; this will show Toyota,Honda,Suzuki.
it will remove Nissan from array.

push() method is used to add new element at the end of array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.push("BMW");
document.getElementById("math").innerHTML= cars; this will show Toyota,Honda,Suzuki,Nissan,BMW.

shift() method is used to remove first element of array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.shift();
document.getElementById("math").innerHTML= cars; this will show Honda,Suzuki,Nissan.
it will remove Toyota from array.

unshift() method is used to add new element at the beginning of array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.unshift("BMW");
document.getElementById("math").innerHTML= cars; this will show BMW,Toyota,Honda,Suzuki,Nissan.
it will add BMW at the beginning of array.

//These below are extra. not in video. 
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.splice(1, 1);
document.getElementById("math").innerHTML= cars; this will show Toyota,Suzuki,Nissan.
it will remove Honda from array.

indexOf() method is used to find the position of element in array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
var position = cars.indexOf("Suzuki");
document.getElementById("math").innerHTML= position; this will show 2.
it will show the position of Suzuki in array.

lastIndexOf() method is used to find the last position of element in array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan", "Suzuki"];
var position = cars.lastIndexOf("Suzuki");
document.getElementById("math").innerHTML= position; this will show 4.
it will show the last position of Suzuki in array.

join() method is used to join array elements into a string.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
var str = cars.join(",");
document.getElementById("math").innerHTML= str; this will show Toyota,Honda,Suzuki,Nissan.
it will join array elements into a string.

toString() method is used to convert array into a string.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
var str = cars.toString();
document.getElementById("math").innerHTML= str; this will show Toyota,Honda,Suzuki,Nissan.
it will convert array into a string.

valueOf() method is used to return the primitive value of array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
var str = cars.valueOf();
document.getElementById("math").innerHTML= str; this will show Toyota,Honda,Suzuki,Nissan.
it will return the primitive value of array.


Lec 26. JS Changing and Deleting Elements 
we can change array elements using using index number. 
var cars =["Toyota", "Honda", "Civic", "Corolla"]
cars[0]= "BMW";
document.getElementById("math").innerHTML= cars; this will change toyota to bmw.

to delete, we can use delete cars[index number].
var cars= ["Toyota", "Honda", "Civic", "Corolla"]
delete cars[0];
document.getElementById("math").innerHTML= cars;


Lec 27. JS Splicing and Array
Used to specify position of new elements and also if any elements should be remove. 
splice() method is used to add or remove elements from an array.

splice() method takes three arguments:
1. position: where to add or remove elements.
2. number of elements to remove: how many elements to remove.
3. elements to add: what elements to add.

if we don't specify number of elements to remove, it will remove all elements from specified position.
if we don't specify elements to add, it will only remove elements.
if we don't specify number of elements to remove and elements to add, it will add elements at
specified position.
splice() method returns an array of removed elements.


var cars = ["Toyota", "Honda", "Civic", "Corolla"];
cars.splice(1, 0, "BMW", "Audi"); 
//1 means we want to add new value at position 1. 0 means we do not want to remove any other element. 
document.getElementById("math").innerHTML= cars; this will add BMW and Audi at position 1.

var cars = ["Toyota", "Honda", "Civic", "Corolla"];
cars.splice(1, 2);
document.getElementById("math").innerHTML= cars; this will remove Honda and Civic from array.

var cars = ["Toyota", "Honda", "Civic", "Corolla"];
cars.splice(1, 1, "BMW");
document.getElementById("math").innerHTML= cars; this will replace Honda with BMW.


splice() method is used to add or remove elements from array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.splice(1, 0, "BMW");
document.getElementById("math").innerHTML= cars; this will show Toyota,BMW,Honda,Suzuki,Nissan.
it will add BMW at the second position of array.



Lec 28. JS Sorting an Array.
Sorting an array means arranging elements in a specific order. There are two types of sorting:
1. Ascending order: arranging elements from smallest to largest.
2. Descending order: arranging elements from largest to smallest.
In JavaScript, we use sort() method to sort an array.

sort() method sorts an array in ascending order.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.sort();
document.getElementById("math").innerHTML= cars; this will show Honda,Nissan,Suzuki,Toyota
it will sort array in ascending order.

reverse() method is used to reverse array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.reverse();
document.getElementById("math").innerHTML= cars; this will show Nissan,Suzuki,Honda,Toyota.
it will reverse array.

if we want to sort array in descending order, we use reverse() method.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
cars.sort();
cars.reverse();
document.getElementById("math").innerHTML= cars; this will show Toyota,Suzuki,Nissan,Honda
it will sort array in descending order.

Note: sort() method sorts array in lexicographical order (alphabetical order).

//Not in video but understand. 
If we want to sort array of numbers, we need to use a compare function.
var numbers = [40, 100, 1, 5, 25, 10]
numbers.sort(function(a, b){return a-b});
document.getElementById("math").innerHTML= numbers; this will show 1,5,10,25
it will sort array of numbers in ascending order.

if we want to sort array of numbers in descending order, we use compare function with b-a.
var numbers = [40, 100, 1, 5, 25, 10]
numbers.sort(function(a, b){return b-a});
document.getElementById("math").innerHTML= numbers; this will show 100,40,25,10
it will sort array of numbers in descending order.


Lec 29. JS Joining Arrays. 
In JavaScript, we can join two or more arrays using concat() method.
var cars = ["Toyota", "Honda", "Suzuki"];
var bikes = ["Yamaha", "Suzuki", "Hero"];
var vehicles = cars.concat(bikes);
document.getElementById("math").innerHTML= vehicles; this will show Toyota,Honda,Suzuki,Yamaha
it will join two arrays.
Note: concat() method returns a new array, it does not modify the original arrays.


Lec 30. JS Conditional Statements. 
Conditional statements are used to perform different actions based on different conditions.
There are three types of conditional statements in JavaScript:
1. if statement
2. if else statement
3. switch statement
if statement:
var age = 25;
if (age > 18) {
    document.getElementById("math").innerHTML = "You are eligible to vote.";
    }
    it will show "You are eligible to vote." because age is greater than 18.

if else statement:
var age = 15;
if (age > 18) {
    document.getElementById("math").innerHTML = "You are eligible to vote.";
    } else {
        document.getElementById("math").innerHTML = "You are not eligible to vote.";
        }
        it will show "You are not eligible to vote." because age is less than 18.

Create a code that will assign grades according to marks of students. 


Lec 31. JS Comparisons. 
In JavaScript, we can compare values using comparison operators. There are several comparison operators in JavaScript:

1. Equal (==)
    var x=6;
    document.getElementById("math").innerHTML= (x==6) // true

2. Not Equal (!=)

    var x=6;
    document.getElementById("math").innerHTML= (x!=7) // true
    document.getElementById("math").innerHTML= (x!=6) // false

3. Equal value and also equal type (===)
    var x=6;
    document.getElementById("math").innerHTML= (x===6) // true
    document.getElementById("math").innerHTML= (x==="6") // false
    document.getElementById("math").innerHTML= (x===7) // false

4. Not Equal value or type (!==)
    var x=6;
    document.getElementById("math").innerHTML= (x!==7) // true
    document.getElementById("math").innerHTML= (x!=="6") // true
    document.getElementById("math").innerHTML= (x!==6) // false

5. Greater Than (>)
    var x=6;
    document.getElementById("math").innerHTML= (x>5) // true
    document.getElementById("math").innerHTML= (x>6) // false

6. Less Than (<)
    var x=6;
    document.getElementById("math").innerHTML= (x<7) // true
    document.getElementById("math").innerHTML= (x<6) // false

7. Greater Than or Equal (>=)
    var x=6;
    document.getElementById("math").innerHTML= (x<=6) // true
    document.getElementById("math").innerHTML= (x<=5) // false

8. Less Than or Equal (<=)
    var x=6;
    document.getElementById("math").innerHTML= (x>=6) // true
    document.getElementById("math").innerHTML= (x>=7) // false


Lec 32. JS Boolean
In JavaScript, a boolean is a data type that can have one of two values: true or false. Boolean values are used 
in conditional statements, such as if/else statements. it is used to check if a condition or expression is true or false. 
This includes numerical and strng data. 
var b1= Boolean(80);
var b2= Boolean(2.86);
var b3= Boolean(-10);
var b4= Boolean("Hi");
var b5= Boolean('false');
var b6= Boolean(1+8+10.14);
var b7= Boolean(0);
document.getElementById("math").innerHTML= 
"80 is" + b1 + "<br>" + 
"2.86 is" + b2 + "<br>" + 
"-10 is" + b3 + "<br>" + 
"Any (not empty string) is" + b4 + "<br>" + 
"the string 'false' is" + b5 + "<br>" + 
"any expression (except zero) is" + b6 + "<br>" + 
"zero is" + b7;


Lec 33. JS for loop.
A for loop is used to execute a block of code as long as the specified condition is true.
it is used to run a code over and over again each time with different value.

    for (var x=0; x<=10; x++) {
    document.write(x+"<br>");
    }


Lec 34. JS For in loop.
A for...in loop is used to loop through the properties of an object. it is used to run a code for each 
property of an object.

var person={fname:"John", lname:"Doe", age:25};
for (var x in person) {
    document.write(x+"<br>");
    }
    // output: fname, lname, age


// to get the value of each property
for (var x in person) {
        document.write(x+":"+person[x]+"<br>");
        }
        // output: fname:John, lname:Doe, age:25


Lec 35. JS While loop.
A while loop is used to execute a block of code as long as the specified condition is true.
it is used to run a code over and over again each time with different value.
var x=0;
while (x<=10) {
    document.write(x+"<br>");
    x++;
    }
    // output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    // it will run until the condition is false

    // x+=5 means x=x+5
    // x-=5 means x=x-5
    // x*=5 means x=x*5
    // x/=5 means x=x/5
    // x%=5 means x=x%5


Lec 36. JS Do while loop.
A do...while loop is used to execute a block of code at least once, and then continue to execute it as long as 
the specified condition is true.
it is used to run a code over and over again each time with different value.

var x=0;
do {
    document.write(x+"<br>");
    x++;
    } while (x<=10);
    // output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

// it will run at least once even if the condition is false. then it will check the condition and run again if true
it will stop when the condition is false
it is used when we want to run a code at least once


Lec 37. JS Break and continue.
we can use it to exit a loop or skip an iteration of loop. 

Break: it is used to jump out of a loop.
Continue: it is used to skip the current iteration of a loop.

var x=0;
while (x<=10) {
    if (x==5) {
        break; // it will stop the loop when x is 5
        }
document.write(x+"<br>");
        x++;
        }
        // output: 0, 1, 2, 3, 4. it will stop when x is 5

var x=0;
        while (x<=10) {
    if (x==5) {
        x++; // it will skip the current iteration when x is 5
        continue;
        }
        document.write(x+"<br>");
        x++;
    }
        // output: 0, 1, 2, 3, 4, it will skip the current iteration when x is 5. it will not print 5
        // it will print 6, 7, 8, 9, 10
        // it will stop when x is 11. it will not print 11. it will stop when the condition is false


Lec 38. JS Functions.
a function performs particular task when it is called. 
A function is a block of code that can be executed repeatedly with different inputs.
it is used to perform a specific task. it is used to avoid duplicate code.
it is used to make the code more readable and maintainable.
it is used to make the code more reusable. it is used to make the code more efficient.

function multiply(a,b) {
    return a*b;    
}
document.getElementById("math").innerHTML= multiply(5,3);


Lec 39. JS events.
onclick, onmouseover, onmouseout, key down, document load. 

an event is an action that occurs when a user interacts with a web page.
it is used to trigger a function when a user interacts with a web page.
it is used to make a web page more interactive, dynamic, responsive, user-friendly, engaging.

    <button onmouseover="time()">Time</button>
    <p id="math"></p> 
 
    function time() {
    document.getElementById("math").innerHTML=Date();
}


Lec 40. Now we create a simple project that will change background color of screen every time when refresh.
<script>
function changeColor() {
    var color = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white"];
    var randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.background = randomColor;
    }
    changeColor();
    </script>
    // it will change the background color of the screen every time when refresh.
    // it will randomly select a color from the array and apply it to the background of the screen

// Explanation of code:

// Defining a function: The code defines a function called changeColor. This function will be executed when called.
// Declaring an array: Inside the changeColor function, an array called color is declared. 
// This array contains 9 string elements, each representing a different color.
// Generating a random index: The code uses Math.random() to generate a random number between 0 and 1. 
// This number is then multiplied by the length of the color array (color.length) to get a random index within the array. 
// The Math.floor() function is used to round down the result to an integer, ensuring we get a valid index.
// Selecting a random color: The code uses the random index to select a random color from the color array. 
// This is done using color[randomIndex].
// Setting the background color: The code sets the background property of the document.body element to the randomly selected color. 
// This will change the background color of the HTML document.
// Calling the function: Finally, the code calls the changeColor function using changeColor();. 
// This executes the function and changes the background color of the document.

// Output:
// When the code is executed, the background color of the HTML document will be randomly changed to one of the colors in the color array. 
//Each time the code is run, a different color will be selected.


Lec 41. JS Photo Gallery Project.
Different pictures will be showing in screen header. on which user will hover, it will show that picture in body.
also it has hover effect that on which picture we hover, it will have border.  




//This is extra lecture about array methods. not in video. 
Lec extra. JS Array Iteration Methods.
Iteration means going through each element of an array.
There are several methods to iterate through an array in JavaScript.

1. for loop: it is used to iterate through an array.
var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
for (var i = 0; i < cars.length; i++) {
    document.getElementById("math").innerHTML += cars[i] + "<br>";
    } it will show each element of array on a new line.

2. for...of loop: it is used to iterate through an array.
    var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
    for (var car of cars) {
        document.getElementById("math").innerHTML += car + "<br>";
        }   it will show each element of array on a new line.

3. forEach() method: it is used to iterate through an array.
        var cars = ["Toyota", "Honda", "Suzuki", "Nissan"];
        cars.forEach(function(car) {
            document.getElementById("math").innerHTML += car + "<br>";
            }); it will show each element of array on a new line.

4. map() method: it is used to iterate through an array and return a new array with modified elements.
            var numbers = [1, 2, 3, 4, 5];
            var doubleNumbers = numbers.map(function(num) {
                return num * 2;
                });
        document.getElementById("math").innerHTML = doubleNumbers; it will show [2, 4, 6, 8, 10]

5. filter() method: it is used to iterate through an array and return a new array with elements that pass a test.
                var numbers = [1, 2, 3, 4, 5];
                var evenNumbers = numbers.filter(function(num) {
                    return num % 2 === 0;
                    });
        document.getElementById("math").innerHTML = evenNumbers; it will show [2, 4]

6. reduce() method: it is used to iterate through an array and return a single value.
            var numbers = [1, 2, 3, 4, 5];
            var sum = numbers.reduce(function(total, num) {
                    return total + num;
                        }, 0);
            document.getElementById("math").innerHTML = sum; it will show 15

7. every() method: it is used to iterate through an array and return true if all elements pass a test.
                var numbers = [1, 2, 3, 4, 5];
                var allPositive = numbers.every(function(num) {
                return num > 0;
                });
            document.getElementById("math").innerHTML = allPositive;   it will show true

8. some() method: it is used to iterate through an array and return true if at least one element passes a test.
            var numbers = [1, 2, 3, 4, 5];
            var hasThree = numbers.some(function(num) {
                return num === 3;
        });
            document.getElementById("math").innerHTML = hasThree; it will show true

9. indexOf() method: it is used to find the index of the first occurrence of a specified element in an array.
            var fruits = ["apple", "banana", "cherry"];
            var index = fruits.indexOf("banana");
            document.getElementById("math").innerHTML = index; it will show 1

10. lastIndexOf() method: it is used to find the index of the last occurrence of a specified element in an array.
            var fruits = ["apple", "banana", "cherry", "banana"];
            var index = fruits.lastIndexOf("banana");
            document.getElementById("math").innerHTML = index; it will show 3

11. includes() method: it is used to check if an array includes a specified element.
            var fruits = ["apple", "banana", "cherry"];
            var includes = fruits.includes("banana");
            document.getElementById("math").innerHTML = includes; it will show true

12. find() method: it is used to return the value of the first element in an array that satisfies a provided
testing function.
            var numbers = [1, 2, 3, 4, 5];
            var found = numbers.find(function(num) {
            return num > 3;
        });
        document.getElementById("math").innerHTML = found;    it will show 4

13. findIndex() method: it is used to return the index of the first element in an array that satisfies a
 provided testing function.
    var numbers = [1, 2, 3, 4, 5];
    var foundIndex = numbers.findIndex(function(num) {
        return num > 3;
        });
    document.getElementById("math").innerHTML = foundIndex;    it will show 3.


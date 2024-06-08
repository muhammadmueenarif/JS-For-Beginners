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

Below are string methods.
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

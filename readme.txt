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
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
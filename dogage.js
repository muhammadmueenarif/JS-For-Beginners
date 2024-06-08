var person={fname:"John", lname:"Doe", age:25};
// for (var x in person) {
//     document.write(x+"<br>");
//     }
// output: fname, lname, age

// to get the value of each property
for (var x in person) {
    document.write(x+":"+person[x]+"<br>");
    }
    // output: fname:John, lname:Doe, age:25
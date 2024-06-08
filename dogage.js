// var x=0;
// while (x<=10) {
//     if (x==5) {
//         break; // it will stop the loop when x is 5
//         }
// document.write(x+"<br>");
//         x++;
//         }
//         // output: 0, 1, 2, 3, 4. it will stop when x is 5


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
function changeColor() {
    var color = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white"];
    var randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.background = randomColor;
    }
    changeColor();

// Explanation:

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
// Each time the code is run, a different color will be selected.
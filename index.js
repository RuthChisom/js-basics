// In the ‘js-basics’ folder you created above, create a file and name it ‘index.js’. Inside the file, Write a function that multiples two numbers. Call that function to multiply any two numbers of your choice and log the answer in your console
// In the same index.js file, create variables for your first name, last name, Stutern track, skills, favourite color, year of your country’s independence. Use these variables to form a sentence and log the sentence in the console.

function multiply(x,y){
    let result = x*y
    console.log(x +" multiplied by "+y+" = "+result);
}

multiply(40,3);

const fname = "Ruth";
const lname = "Obidike";
const track = "Mobile Development";
const skills = "HTML, CSS and Javascript";
const color = "Blue";
const independence = "1960";

console.log("I am "+ fname +" " + lname + ", studying "+ track + " with the knowledge of " + 
            skills +" from the country Nigeria that gained freedom in "+ independence +" and i love color "+ color)


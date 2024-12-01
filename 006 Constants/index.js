// const = a variable that can't be changed

const pi = 3.14159;
let radius;
let cirumference;

// pi = 420.69;        This will not work if we use const as declaration for the number
// radius = window.prompt('Enter the radius of a circle');

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    cirumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = cirumference + " cm";
}

// console.log(cirumference);
console.log("this is seperate js file");

function makeRed(){
    document.body.style.backgroundColor = "red";
} 


const buttonBlue = document.getElementById("blue");
buttonBlue .onclick = makeBlue;



function makeBlue (){
    document.body.style.backgroundColor = 'blue';
}
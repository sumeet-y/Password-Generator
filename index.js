const inputBox = document.querySelector(".input-field");
const lengthOfPassword = document.querySelector(".counter");
let text=[];

const upper = document.getElementById("Uppercase");
const lower = document.getElementById("Lowercase");
const number = document.getElementById("Number");
const symbol = document.getElementById("Symbol");

// Listining click event to generate Password
document.querySelector(".btn").addEventListener("click",()=>{
    text = [];
    funcArry = [];
    document.querySelector(".btn").classList.add("scale");
    setTimeout(()=>{
        document.querySelector(".btn").classList.remove("scale");
    },100)

    let length = lengthOfPassword.value;
    const isUpperChecked = upper.checked;
    const isLowerChecked = lower.checked;
    const isNumberChecked = number.checked;
    const isSymbolChecked = symbol.checked;

    generatePassword(length,isUpperChecked,isLowerChecked,isNumberChecked,isSymbolChecked);
});



// function to generates password
function generatePassword(length,isUpperChecked,isLowerChecked,isNumberChecked,isSymbolChecked){

    let checkCount = isUpperChecked + isLowerChecked + isNumberChecked + isSymbolChecked;

    if(checkCount === 0){
        return inputBox.value = '';
    }

    let funcArry = [];
    if(isLowerChecked){
        funcArry.push("Lower");
    }
    if(isUpperChecked){
        funcArry.push("Upper");
    }
    if(isNumberChecked){
        funcArry.push("Number");
    }
    if(isSymbolChecked){
        funcArry.push("Symbols");
    }

    for(i = 1; i <= length ; i++){

        password = funcArry.forEach((val)=> {
            if(val == "Upper"){
                password = getRandomUpper();
                text.push(password);
            }
            if(val == "Lower"){
                password = getRandomLower();
                text.push(password);
            }
            if(val == "Number"){
                password = getRandomNumber();
                text.push(password);
            }
            if(val == "Symbols"){
                password = getRandomSymbols();
                text.push(password);
            }
        });
    }
    return inputBox.value = text.slice(0,length).join(""); 
}


// functions which generate random values 
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()* 10 ) + 48);
}
function getRandomSymbols(){
    const symbols = "!@#$^%&*()-_+={}[]:;,.<>/?"
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// password length counter
var count = 3; 
function incrementByOne(){
    if(count < 25){
        count++;
        document.querySelector(".counter").value = count;
    }
}
function decerementByOne(){

    if(count >= 5){
        count--;
        document.querySelector(".counter").value = count;
    }
    else if(count <= 4){
        document.querySelector(".counter").value = 4;
    }    
}

// function to copy password from input field
function copyPassword() {
    
    // Get the text field
    var copyText = document.getElementById("inputField");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

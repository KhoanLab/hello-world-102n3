// function!!

// prompt()
// alert()
// console.log()
// document.write()

// Structure

// function functionName(parameters){ code to excute }  ---> all on one line

// function functionName(parameters){
//  code to excute
//}

// function
function addTwoNumber(number1, number2){
    let sum = number1 + number2;
    return sum;
}

// Called/Invoking a function: call it by with name()
let print = addTwoNumber(2, 3); // 5

console.log(print);

function sayHi(){
    let userName = prompt('What is your name?');  // ''

    if (userName == ''){
        alert("you didn't type a name...");
        userName = prompt('Please tell me your name?'); // ''
    }

    console.log(userName);  // ''
    document.write('Hello and welcome to my page ', userName); // '' 

    return userName; // ''
}

// Called
// let myName = sayHi(); //

// console.log('My Name is ',myName);

function likesCookies(){
    let response = prompt("Do you like cookie?");

    if (response == 'yes'){
        alert(" you're come to the right place");
    } else if (response == 'no'){
        alert(" What are you doing at a cookies shop website?")
    } else {
        alert(" I'm not sure what that means...");
    }

    document.write(response);

    return response;
}

let result = likesCookies();

console.log('result', result);
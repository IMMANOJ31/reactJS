console.log('Back to Frontend Development');

// var can be re-declared and re-assigned
var noOfDays = 5;
var noOfDays = 10;
console.log('Number of days:', noOfDays);

// let can be re-assigned but cannot be re-declared
let noOfWeeks = 2;
noOfWeeks = 4;
console.log('Number of weeks:', noOfWeeks);


// const cannot be re-assigned or re-declared
const noOfMonths = 12;
console.log('Number of months:', noOfMonths);


var arrow = () => {
    console.log('Arrow Function');
}

arrow();
console.log(arrow); // prints the function definition


function xworkz(){
    var trainee = 'Software Developer';
    console.log('Trainee Role:', trainee);
}

function executeCallBack(xworkz){
    console.log('Executing Callback Function');
    xworkz();
}

executeCallBack(xworkz);
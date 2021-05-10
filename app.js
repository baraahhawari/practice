// if nested-if statement

// let getAge = parseInt(prompt('please enter your age'));
// let userName = prompt('please enter your name');
// if (getAge > 4) {
//     if (userName.toLocaleLowerCase() == 'ibrahim') {

//         alert('you are welcome');
//     }

// }



// array
// let theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let secondArray = ['a', 'b', 'c', 'd'];
// // nested for statement 
// for (let i = 1; i <= 10; i++) {
//     // console.log('');
//     let space = '';
//     for (let j = 0; j < i; j++) {
//         // console.log('*');
//         space += '*';

//     }
//     console.log(space);


// }

// password validator
// let passwords = ['1234', 'hello1234', '0000', 'ABC'];
// let userPassword = prompt('enter your password');



// let count = 0;
// // validator, build in function includes [strings]
// while (!passwords.includes(userPassword)) {
//     userPassword = prompt('enter your password again please');
// }

// // checking the values in the array
// for (let index = 0; index < passwords.length; index++) {

//     if (userPassword == passwords[index]) {
//         alert('correct password');
//         break;

//     }
// }



// global array
// let studentsArray = []
//     // constructor
// function Student(name, age, marks) {
//     this.userName = name;
//     this.userAge = age;
//     this.marks = marks;

//     // 
//     studentsArray.push(this);

// }

// console.log(new Student('Sultan', 25689, 22589874859876985556));

// new Student('riziq', 56898, 1258);
// new Student('sanaa', 56898, 1258);
// new Student('ali', 56898, 1258);
// new Student('mamoun', 56898, 1258);
// console.log(studentsArray);




// // function that create table
// function createTable() {
//     let parent = document.getElementById('parent');
//     console.log(parent);
//     let theTable = document.createElement('table');
//     parent.appendChild(theTable);

//     // table header
//     let trElement = document.createElement('tr');
//     theTable.appendChild(trElement);

//     // th ==> tr
//     for (let i = 0; i < studentsArray.length; i++) {


//         let thElement = document.createElement('th');
//         trElement.appendChild(thElement);
//         thElement.textContent = studentsArray[i].userName;
//     }
//     // td ==> tr

// }
// createTable();

// Events

// let clickMe = document.getElementById('theButton');
// clickMe.addEventListener('click', clicker);

// function clicker(event) {

//     console.log(event, 'hello');
// }



// form getting
let form = document.getElementById('calcForm');
form.addEventListener('submit', formSubmitter);

function formSubmitter(event) {
    // prevent the default
    event.preventDefault();
    console.log(event);

    let firstNumber = event.target.number1.value;
    console.log(firstNumber);
    let secondNumber = event.target.number2.value;
    console.log(secondNumber);

    // addition value
    let theAddition = Number(firstNumber) + Number(secondNumber);
    console.log(theAddition);


    let result = document.getElementById('result');
    let h2Element = document.createElement('h2');
    result.appendChild(h2Element);
    h2Element.textContent = `the addition result  ${theAddition}`;


    // multiplication value
    let theMultiplication = Number(firstNumber) * Number(secondNumber);
    let h2Element1 = document.createElement('h2');
    result.appendChild(h2Element1);
    h2Element1.textContent = `the Multiplication result  ${theMultiplication}`;

}
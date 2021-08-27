/*
number
string
boolean
null
undefined
array
object
*/

/*
var
*/

/*
if else
switch case
for
function
*/

/*
&&
||
!=
*/

// =======================> ES6
// let const 
// for (let i = 0; i <= 9; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 2000);
// }

// var color = 'red'
// color = 'green'

// let color = 'black'
// color = 'white'
// console.log(color);

// ====================> const 
// const id = 'AB4545'
// // id = 'AB45454877777777'
// console.log(id);

// const arr = [1, 2]
// const obj = { a: 2 }
// arr.push(10)
// obj.a = 10
// console.log(arr);
// console.log(obj);

// ------------------------- function // arrow funtions
// function calc(a, b) {
//     return a + b
// }

// let calc = function (a, b) {
//     return a + b
// }

// let func = (a, b) => {
//     return a + b
// }

// let func = (a, b) => a + b
// console.log(func(5, 4));

// let func = a => a
// console.log(func(5));

// ====================> object 
// let person = {
//     name: 'Tom',
//     age: 50,
//     job: {
//         who: 'Dev',
//         salary: 45000
//     }
// }

// let name = person.name
// let age = person.age
// let age = person.age

// let { age, name, job: { salary } } = person
// console.log(salary);

//  =================================== array

// let arr = ['Tom', 25, { who: 'dev', salary: 45000 }]
// let [name, age, { who: value }] = arr
// console.log(value);

// =================================> assetsatsivniy massivlar
// let arr = [
//     { name: 'Tom', age: 50 },
//     { name: 'Karl', age: 30 },
//     { name: 'Yuri', age: 15 },
// ]

// // arr.forEach(element => {
// //     console.log(element.age);
// // });

// let [{ name: val }] = arr

// val = 'Ricki'

// console.log(val);

// const arr = ['Kim', 50]
// console.log(arr);

// const person = {
//     name: 'Tom',
//     age: 50,
//     number: 998978
// }

// const { name, age, number } = person

// // console.log('Name: ' + person.name + ' ' + 'Age: ' + person.age + ' ' + 'Number: ' + person.number);
// console.log(`Name ${person.age}   Age: ${person.age}   Number: ${person.number}`);

// spread operatori -------------------------
// const arr = [1, 5, 6, 8]

// console.log(...arr);

// arr.forEach((val, index) => {
//     console.log(index);
// })

// const arr = [1, 5, 6, 8, 9, 65, 95]

// const sum = (a, b, c, ...rest) => {
//     return rest
// }

// const calc = sum(...arr)
// console.log(calc);

//////////////////rest ===========

// const person = {
//     name: 'Tom',
//     age: 50,
//     number: 998978
// }

// const { name, ...rest } = person

// console.log(rest);

// const person = {
//     name: 'Tom',
//     surname: 'Jack',
//     age: 60
// }

// const public = {
//     gender: 'man',
//     number: 99898,
//     job: 'Dev'
// }

// const common = { ...person, ...public }

// const {number} = common

// console.log(number);

// Class ======================
// function Car(marka){
//     this.marka = marka
//     console.log(this.marka);
// }

// const car = new Car('Ford')

// class Car {
//     constructor(marka) {
//         this.marka = marka
//     }

//     logger() {
//         console.log(this.marka);
//     }
// }

// const car = new Car('BWM')

// class Ford extends Car{
//     log(){
//         console.log('Hello');
//     }
// }

// const ford = new Ford('Mazda')

// ford.logger()

// --------------------- default parametr
/* const createPost = (user, message = 'Default message', date = new Date().toLocaleDateString()) => {
    return {
        user,
        message,
        // date: date || new Date().toLocaleDateString()
        date
    }
}

const post = createPost('Edy')

console.log(post); */

// ==================== map
// const arr = [1, 2, 6, 5, 8, 9]

// arr.map((val, index) => {
//     console.log(index);
// })

// const fil = arr.filter((val, index) => {
//     if (val % 2 === 0) {
//         return true
//     }
//     else {
//         return false
//     }
// })

// console.log(fil);

// const users = [
//     { name: 'Tom', age: 30, job: true },
//     { name: 'Lady', age: 20, job: true },
//     { name: 'Harry', age: 60, job: false },
//     { name: 'Jack', age: 10, job: false },
// ]

// const adult = users.filter((val, index) => {
//     if (!val.job) {
//         return true
//     }
//     else {
//         return false
//     }
// })

// console.log(adult);

// 
/*
    Client -> Server -> DataBase -> Server -> Client
*/
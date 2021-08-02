// Задача 86.3
// function isFreindly(num1, num2) {
// 	return getOwnDivisors(num1) === num2; 
// }

// Задача 86.1
// function getOwnDivisors(num) {
//     let arrDev = [];
//     for (let i = 1; i < num; i++) {
//         if (num%i === 0) arrDev.push(i);
//     }

//     return getSum(arrDev)
// }

// Задача 86.2
// function getSum(arr) {
//     return arr.reduce((elem, acc) => {
//         acc += elem
//         return acc; 
//     }, 0)
// }

// Задача 86.4
// function getFreindly(start , end) {
//     let obj = {};
//     for (let i = start; i <= end; i++) {
//         obj[i] = getOwnDivisors(i);
//     }
//     return getCoincidence(Object.entries(obj));
// }


// function getOwnDivisors(num) {
//     let arrDev = [];
//     for (let i = 1; i < num; i++) {
//         if (num%i === 0) arrDev.push(i);
//     }
//     return getSum(arrDev);
// }

// function getSum(arr) {
//     return arr.reduce((elem, acc) => {
//         return acc += elem; 
//     }, 0)
// }

// function getCoincidence(devisors) {
//     let result = [];

//     return result  
// }

// console.log(getFreindly(220, 284))

//let result = '';

//задачи от code.mu Трепачева

// for (let i = 1; i <= 5; i++) {
//     let result ='';
//     for (let g = 1; g <= i; g++) {
//         result += i;
//     }
//     console.log(result);
// }



// let elem = document.createElement('p');
// document.body.appendChild(elem);

// function timer() {
//     let num = 10;
//     return function() {
//         num--;
//         if (num===0) clearInterval(id)
//         return elem.innerHTML = num;
//     }
// }

// let id = setInterval(timer(), 1000);

// let date = new Date();
// document.write(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());

// крестики-нолики

let arr = document.querySelectorAll('.cell');
let btn = document.querySelector('button');

arr.forEach(elem => elem.addEventListener('click', move));
btn.addEventListener('click', reset);

let counter = 0;

function move() {
    counter++;
    if (counter % 2 === 0) {
        this.innerHTML = '0';
    } else {
        this.innerHTML = 'X';
    }
    if (this.innerHTML !== '') this.removeEventListener('click', move);

    if (arr[0].innerHTML === arr[1].innerHTML && arr[1].innerHTML === arr[2].innerHTML && arr[0].innerHTML !== '') winner(0, 1, 2);
    if (arr[3].innerHTML === arr[4].innerHTML && arr[4].innerHTML === arr[5].innerHTML && arr[3].innerHTML !== '') winner(3, 4, 5);
    if (arr[6].innerHTML === arr[7].innerHTML && arr[7].innerHTML === arr[8].innerHTML && arr[6].innerHTML !== '') winner(6, 7, 8);
    if (arr[0].innerHTML === arr[3].innerHTML && arr[3].innerHTML === arr[6].innerHTML && arr[0].innerHTML !== '') winner(0, 3, 6);
    if (arr[1].innerHTML === arr[4].innerHTML && arr[4].innerHTML === arr[7].innerHTML && arr[1].innerHTML !== '') winner(1, 4, 7);
    if (arr[2].innerHTML === arr[5].innerHTML && arr[5].innerHTML === arr[8].innerHTML && arr[2].innerHTML !== '') winner(2, 5, 8);
    if (arr[0].innerHTML === arr[4].innerHTML && arr[4].innerHTML === arr[8].innerHTML && arr[0].innerHTML !== '') winner(0, 4, 8);
    if (arr[2].innerHTML === arr[4].innerHTML && arr[4].innerHTML === arr[6].innerHTML && arr[2].innerHTML !== '') winner(2, 4, 6);
    if (counter === 9) {
        arr.forEach(elem => elem.style.background = 'pink');
    }
}

function winner(first, second, third) {
    arr.forEach(elem => elem.removeEventListener('click', move));
    arr[first].style.background = '#94e28a';
    arr[second].style.background = '#94e28a';
    arr[third].style.background = '#94e28a';
}

function reset() {
    arr.forEach(elem => elem.addEventListener('click', move));
    arr.forEach(elem => {
        elem.innerHTML = '';
        elem.style.background = '';
    })
    counter = 0;
}


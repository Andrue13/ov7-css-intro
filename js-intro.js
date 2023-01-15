
                            //Переменные
let x = 1
const b = 5
var c = 4
// & - амперсанд ($$  - и  ||  - иле)

let num = 45 // number
let str = 'fwleihflw' // string
let bool = true // boolean
let Null = null // let i = null
let undef = undefined // let i 
let sym = Symbol('Some desc') // Создает уникальною строку, переменною

typeof num === "number"


function sum (a, b) {
    if (typeof a !== 'number') a = Number(a)
    if (typeof b !== 'number') b = Number(b)
    return a + b
}
// 3
sum('1', '2')


const obj = { // Объект
    a: 1,
    b: 2
}
obj.a = 'Hello word' // Изменили а
obj.c = 3 // Добавели с в объект
console.log(obj.a); // 'Hello word' 

const obj1 = Object.freeze ({  // Объект заморожен (изменить пременные невозможно)
    t: 1,
    r: 2
})

                            // Функции

// Варианты создание функции
// 1  можем объявить в любом месте и обратиться в любом месте к функции
function test(arg1, arg2) {
    return arg1 + arg2
}
// 2 можем обращаться только после ее объявление
const  test2 = function (arg1, arg2) {
    return arg1 + arg2
}
// 3
const test3 = (arg1, arg2) => {
    if (arg1 > 0) return  arg1 - arg2
    if (arg1 < 0) return  arg1 * arg2
    if (arg1 == 0) return arg2
}
//4
const test4 = (arg1, arg2) => arg1 + arg2 // если только одно выражения return не нужен


                        //  Сосдание функции в объектах и классах

const userModel = {
    name: "John",
    address: "Volgograd",
    getUserData: function() {              // анонимная функция
        return this.name + this.address
    },
    getUserData2() {            // method работает в объекте или класcе
        return this.name + this.address
    },
    getUserData3:() => { // стрелочная функция НЕ РАБОТАЕТ!!!  с 'this'!!
        return this.name + this.address
    }
}

                            // if  + экранирование

const  userName = 'Jo'
if (userName.length > 0){
    console.log(userName)  
} 
if (userName) console.log(userName)  // Сокращенный вариант
if (userName) console.log('That\'s all right')  //  \'  экранирование для того что бы вывести ' 
else if (userName.length > 0) {
    console.log('That\'s  \nall right') // \n перенос (текст с новой строчки)
} else {
    console.log('That\'s  \nall right')
}     
//else console.log('That\'s  \nall right')  cокращенный вариант else без скобок работает если опереция  в else только одна


                            // switch case

switch (userName.lengthy) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;    
    default:
        console.log('Always runs');
        break;
}

                            // Тернарное выражения

//const  userName = 'Jo' переменная userName обявленная выше
const gender = 'man'
const userName2 = (gender === 'man') ? `Mr. ${userName}` : `Mrs. ${userName}`
// ? - True  : - false

// const gender = 'man'                 Вложенный тернарник
// const fullName = (gender === 'man') 
// ? `Mr. ${userName}` 
// : `Mrs. ${userName}`
//     ? `Mrs. ${userName}`
//     : `I dont know who are you`

greeting(fullName)  // тернарное фыражения возращает значения

function greeting(message) {
    console.log(message);
}

                            // Цикл for

let arr5 = [1, 2, 3, 4, 5] 
for (let i = 0; i < arr5.length; i++) {  //  Метод for
    const element = arr5[i];
    console.log(element);
}
                           
for (let i = arr5.length -1; i >= 0; i--) {  // Переберает масив с конца
    const element = arr5[i];
    console.log(element);
}

for (const element of arr5) {  // Метод  'for of'
    console.log(element);
}

for (const index in arr5) {   // Метод  'for in'  работает по индексам (ключи)
    if (Object.hasOwnProperty.call(arr5, index)) {
        const element = arr5[index];
        console.log(arr5[index]);
    }
}


                                         // Цикл forEach

arr5.forEach((elem, index) => {  // Можно использувать только  c elem
    console.log(`${index}: ${elem}`)
})


                            // Цикл while

let hello = 'Hello'   // функция pop() удаляет последний элемент масива  мутируя (изменяя масив) и возращает этот элемент
let helloArr = hello.split('')
while (helloArr.length) {
    console.log(helloArr.pop());
}

let hello2 = 'Hello'  // slice функция которая берет последний элемент строки  (масив не мутирует) есть много вариантов и комбинаций
while (hello2) {
    console.log(hello2.slice(-1))
    hello2 = hello2.slice(0, -1)
}

let hello3 = 'Hello'  // 3-й вариант решения задачи
let index = hello3.length -1
while (index >= 0) {
    console.log(hello3[index])
    index --
}



                         // Масив

const arr = [1, 2, 3, 4, 5]
typeof arr // object
Array.isArray(arr) // true проверка является ли наш масив масивом
arr instanceof Array // true   исп. для проверок ошибок
// Выводим ключи и елементы масива через forEach
arr.forEach(function(el, index) {
    console.log("Element: " + el)
    console.log("Index: " + index)
})
// Element: 1
// Index: 0
// Element: 2
// Index: 1
// Element: 3
// Index: 2
// Element: 4
// Index: 3
// Element: 5
// Index: 4
// (результат)

arr.map(function(el, index){
    return el * 2
})
// (5) [2, 4, 6, 8, 10] (результат)

arr.map(function(el, index){
    return 'Hello'
})
// (5) ['Hello', 'Hello', 'Hello', 'Hello', 'Hello'] (результат)

arr.reverse()
// (5) [5, 4, 3, 2, 1] масив мутирует(перезаписувается) (результат)

arr.filter(function(el, index){
    return el > 2
})
// (3) [3, 4, 5]  (результат)

arr.push(6)
// (6) [1, 2, 3, 4, 5, 6] масив мутирует (результат)

const arr2 = [...arr, 7] 
// (6) [1, 2, 3, 4, 5, 7] копирует старый масив arr  и делает новый arr2 + доб. новый елемент (результат)

arr.join()
// '1,2,3,4,5' делает строку обединяя елементы (результат)

arr.join('')
// '12345' (результат)

'Hello'.split()
// ['Hello'] (результат)

'Hello'.split('')
// (5) ['H', 'e', 'l', 'l', 'o'] (результат)

'Hello'.split('').reverse().join('') // Технология чейн (анг.)
// 'olleH' (результат)



const arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
// Первый вариант задачи через forEach (сумируем все елементы масива)
// let sum = 0
// arr3.forEach(el => sum += el)


// Второй вариант через reduce (сумируем все елементы масива)
arr3.reduce((acc, cur)=> {return acc + cur}, 0)
// 36 (результат)
 

arr3.reduce((acc, cur)=> {return acc + cur}, '')
// '12345678' (результат)


// Выбрать все четные елементы с масива и умножить на 3
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
arr4.filter(el => el % 2 === 0).map(el => el * 3)
// (5) [0, 6, 12, 18, 24] (результат)


// Найти сумму всех чисел в строке
let i = '12344356345345' 
i.split('').reduce((acc, cur)=> {return acc + Number(cur)}, 0)
// 52 (результат)

i.split('').reduce((acc, cur)=> {return acc + parseInt(cur)}, 0)
// 52 (результат)


// Задача из строки выбрать цифры и подать их как цифру
function customParseInt (str) {
    // Первый вариант
    // return Number(str.split('').filter((el) => {return !isNaN(el)}).join(''))}
    // сокращенный вариант записи
    return Number(str.split('').filter(el => !isNaN(el)).join(''))
}
console.log(customParseInt('d12f45d'))
// 1245 (результат)

// Второй вариант reduce  не работает?!
function customParseInt (str) {
    return Number(str.split('').reduce((acc, cur) => {return acc + !isNaN(cur)}, ''))
}
console.log(customParseInt('d12f45d'))


                    //  лекция №7(61)  задачки с codewars
                       // Задача №1
// 1 вариант
function solution (str) {
    return str.split('').reverse().join('') 
}
console.log(solution('hello'))

// 2 вариант цикл
function solution (str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i --) {
        result += str[i];
    }
    return result
}
console.log(solution('hello'))

// 3 варинт reduceRight
function solution (str) {
    return str.split('').reduceRight((acc, cur) => {return acc + cur}, '')
}
console.log(solution('hello'))

// 4 вариант  через рекурсию
function solution (str) {
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : ''
}
console.log(solution('Hello world!'))

                            // Спред оператор
// консоль
// let str = 'Hello'
// [...str]
// результат (5) ['H', 'e', 'l', 'l', 'o']

                            // Задача №2
// 1 вариант через тернарник и рекурсию
var hotpo = function (n) {
    if(n == 0 || n == 1) return 0;
    return hotpo(n % 2 === 0 ? (n / 2) : (3*n + 1)) + 1
}
console.log(hotpo(56))
 
// 2 вариант if и рекурсию
var hotpo = function (n) {
    if(n == 0 || n == 1) return 0;
    let value
    if (n % 2 === 0) {
        value = n / 2    
    } else {
        value = 3*n + 1
    }
    return hotpo(value) + 1
}
console.log(`Steps: ` + hotpo(6))

// 3 вариант if 
var hotpo = function (n) {
    if(n == 0) return 0;
    let steps = 0;
    while (n > 1){
        if (n % 2 === 0) {
            n = n / 2    
        } else {
            n = 3 * n + 1
        }
        console.log(n)
        steps++
    }
    return steps
}
console.log(`Steps: ` + hotpo(6))

                    // Задача №3
// Варинт 1
function findMultiples(integer, limit) {
const arr = []
for (let num = integer; num <= limit; num++) {
    if (num % integer === 0) {
        arr.push(num)
        }
    }
    return arr
}
console.log(findMultiples(5, 105))

// Вариант 2
function findMultiples(integer, limit) {
let arr = []
let count = Math.floor(limit / integer)
    for (let i = 1; i <= count; i++) {
        arr.push(integer * i)  
    }
    return arr
}
console.log(findMultiples(5, 105))

//вариант 3  через Array.from
function findMultiples(integer, limit) {
let arr = []
let count = Math.floor(limit / integer)
return Array.from(new Array(count), (e, i) => (e, i) * integer)
}
console.log(findMultiples(5, 105))



                                //Лекция № 8(62)  Объекты

 const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            f: 'Hello'
        },
        e: [1, 2, 3, 4, 5]
    }, 
}// console.log(obj.b.e[3]); выводим в консоль третий элемент масива e: 4

for (const key in obj) {
    if (Object.hasOwnProperty.call (obj, key)) {
        console.log(key); // выводим ключи a: b:
    }
}
//.toString() функция делает строку
// Object.keys(obj) -извлекаем ключи из объекта
// Object.entries(obj) - возвращает из  объекта масив где первый елемент масива выступает  ключем объекта а второй значениям объекта
// Object.fromEntries(obj) - делает все наоборот 
// Object.values(obj)
                               
                    //Задача №1
//подать значения объекта в виде масива 
//вариант 1 рекурсия
const result = []
function getValues(value) {
    if (typeof value === 'object') { //Array or Object
        const arrValue = Array.isArray(value)
            ? value
            : Object.values(value)
        for (const value of arrValue) {
            getValues(value)
        }
    } else result.push(value)
}
getValues(obj)
console.log(result)
//(8) [1, 2, 'Hello', 1, 2, 3, 4, 5] результат



// вариант 2  рекурсия
//const result = []
function getValues(obj) {
    if (typeof obj === 'object'){ //Array or Object
        for (const el of Object.values(value)) {
            getValues(el)
        }
    } else result.push(value)  
}
getValues(obj)
console.log(result)
//(8) [1, 2, 'Hello', 1, 2, 3, 4, 5] результат

// вариант 3 рекурсия
function getValues(obj) {
    const result = []
    function recursion(value) {
    if (typeof value === 'object'){ //Array or Object
        for (const el of Object.values(value)) {
            recursion(el)
        }
    } else result.push(value)  
    }
    recursion(obj)
    return result
}
console.log(getValues(obj))
//(8) [1, 2, 'Hello', 1, 2, 3, 4, 5] результат

                        //Задача №2 
const objEntrence = {
    a: 1,
    b: 2,
    c: 'Hello'
}
// варинт 1
function convertObj(obj) {
    const entries = Object.entries(obj)
    return Object.fromEntries(entries.map(prop => {
        return [prop[0].toUpperCase(),
            typeof prop[1] === 'number' ? prop[1] * 2 : prop[1]
        ]
    }))
}
console.log(convertObj(objEntrence));
//{A: 2, B: 4, C: 'Hello'} результат

//вариант 2 сокращенный
function convertObj(obj) {
    return Object.fromEntries(Object.entries(obj).map(prop => {
        return [prop[0].toUpperCase(),
            typeof prop[1] === 'number' ? prop[1] * 2 : prop[1]
        ]
    }))
}
console.log(convertObj(objEntrence));
//{A: 2, B: 4, C: 'Hello'} результат

//вариант 3 
function convertObj(obj) {
    const resultObj = {}
    const keys = Object.keys(obj)
    keys.forEach(key => {
        const newValue = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key]
        resultObj[key.toUpperCase()] = newValue
    })
    return resultObj
}
console.log(convertObj(objEntrence));
//{A: 2, B: 4, C: 'Hello'} результат

                            // Задача №3
// const objEntrence = {
//     a: 1,
//     b: 2,
//     c: 'Hello'
// }
function toString(obj) {
    return `{${Object.entries(obj).map(el => `${el[0]}:${typeof el[1] === 'string' ? `"${el[1]}"` : el[1]}`).join(',')}}`
}
console.log(toString(objEntrence)); 
//{a:1,b:2,c:"Hello"} результат  




                           
                           
                                //Лекция 14.01.23 codewars
// Вариант 1
var number = function(busStops){
let sum = 0;
    for (let i = 0; i < busStops.length; i++) {
        sum += busStops[i][0] - busStops[i][1]
    }
     return sum
}
// Вариант 2                                
var number = function(busStops){
    return busStops.reduce((acc, cur) => acc + cur[0] - cur[1], 0)
}


                    //Задача №2
//Вариант 1
const factorial = n => {
let result = 1
while (n > 0) {
    result = result * n
    n--
    }
    return result
};

// Вариант 2
const factorial = n => {
return n ? n * factorial(n-1) : 1
};














array = [1, 2, 3, 4, 5, 6, 7]

function sumRecursive(array = []) {
    if (array.length) {
        return array.pop() + sumRecursive(array)
    } else return 0
}

console.log(sumRecursive(array));


            





const obj = {
    a: 1,
    b: 2,
    c: {
        d: 'Hello',
        e: 3
    },
    f: [1, 2, 3, 4, 5]  
}

function getValues(obj) {
    return obj && typeof obj === 'object' ? Object.values(obj).map(value => getValues(value)).flat()
    : obj
}

function getValues(obj) {
    if (obj)
    return obj && typeof obj === 'object' ? Object.values(obj).map(value => getValues(value)).flat()
    : obj
}

console.log(getValues(obj));



const array = [1, 2, 3, 4, 5, 6, 7]

function sumRecursive(array = []) {
    if (array.length) {
        return array[0]+ sumRecursive(array.slice(1))
    } else return 0
}

console.log(sumRecursive(array));



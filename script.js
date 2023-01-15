// @ts-check
const openModal = document.getElementById('open-modal')
/** @type {HTMLElement | null} */
const modal = document.querySelector('.modal')
const modalBackground = document.querySelector('.modal-background')


// Первый вариант 
// if (openModal) openModal.onclick = function() {
//    modal?.classList.add('show')
// }
// if (modalBackground) modalBackground.addEventListener('click', function() {
//     modal?.classList.remove('show')
// })

// Второй вариант с EventListener и удалениям 
const modalClose = function(){
    modal?.classList.remove('show')
    modalBackground?.removeEventListener('click', modalClose)
}
if (openModal) openModal.onclick = function() {
   modal?.classList.add('show')
   if (modalBackground) modalBackground.addEventListener('click', modalClose)
}
    
// const openNewModal = document.querySelector('.btn1')
// if (openNewModal) openNewModal.onclick = function() {
//     const newDiv = document.createElement('div')
//     newDiv.classList.add('elem')
//     const numElem = document.createElement('span')
//     numElem.textContent = '12'
//     newDiv.append(numElem)
//     document.body.append(newDiv)
//     const newButton = document.createElement('button')
//     newButton.id = 'btn2';
//     newButton.textContent = 'Delete'
//     newDiv.append(newButton)
//  }




// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 'Hello',
//         e: 3
//     },
//     f: [1, 2, 3, 4, 5]   
// }

// function fletten(obj, values = []) {
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             const value= obj[key];
//             if (value !== null && typeof value === 'object') {
//                 fletten (value, values)
//             }
//             else values.push(value)
            
//         }
//     }
//     return [values]
// }

// console.log(fletten(obj))



//  1 вариант a, e, i, o, u - гласные
// function stringWithoutVowels(str) {
//     // str.split().reduce((acc, cur)=> {return acc + cur}, '')
//     return str.split('').filter(function(el, index){
//         return el !== 'a' && el !== 'e' && el !== 'i' && el !== 'o' && el !== 'u'
//     }).join('')
// }
// console.log(stringWithoutVowels('Hello world'));

// // 2 вариант
// function stringWithoutVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     return str.split('').filter(function(el){
//         return !vowels.includes(el)
//     }).join('')
// }
// console.log(stringWithoutVowels('Hello world'));

// 3 вариант
// function stringWithoutVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let result = ''
//     for (let index = 0; index < str.length; index++) {
//         if (!vowels.includes(str[index]))
//         result = result + str[index]
//     }
//     return result
// }
// console.log(stringWithoutVowels('Hello world'));


// function removeDublicates(arrayStr = []) {
//     let obj = {}
//     arrayStr.forEach((str) => {
//         obj[str] = null 
//     }) 
//     }
// console.log(removeDublicates(["Hello", "world", "Hello"]));

// const cars = [
//     {
//     id: 1,
//     name: 'Honda',
//     year: 1999
//     },
//     {
//         id: 2,
//         name: 'Toyota 1',
//         year: 2010
//     },
//     {
//         id: 3,
//         name: 'Toyota 2',
//         year: 2010
//     },
//     {
//         id: 4,
//         name: 'Mazda',
//         year: 2020
//     }
// ]

// function filter(filterObj) {
//     return cars.filter(car => {return filterByName(car, filterObj) && filterByYear(car, filterObj)})   
// }
// console.log(filter({ name: 'mazda', minYear: 2000, maxYear: 2020}))

// function filterByName(car, filterObj ) {
//     return car.name.toLowerCase().includes(filterObj.name.toLowerCase())
// }

// function filterByYear(car, filterObj) {
//     return car.year >= filterObj.minYear && ( filterObj.maxYear && car.year <= filterObj.maxYear)
// }








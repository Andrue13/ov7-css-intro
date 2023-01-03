// @ts-check
const openModal = document.getElementById('open-modal')
/** @type {HTMLElement | null} */
const modal = document.querySelector('.modal')
const modalBackground = document.querySelector('.modal-background')

// if (openModal) openModal.onclick = function() {
//    modal?.classList.add('show')
// }
// if (modalBackground) modalBackground.addEventListener('click', function() {
//     modal?.classList.remove('show')
// })

const modalClose = function(){
    modal?.classList.remove('show')
    modalBackground?.removeEventListener('click', modalClose)
}
if (openModal) openModal.onclick = function() {
   modal?.classList.add('show')
   if (modalBackground) modalBackground.addEventListener('click', modalClose)
}
    



const openNewModal = document.querySelector('.btn1')
if (openNewModal) openNewModal.onclick = function() {
    const newDiv = document.createElement('div')
    newDiv.classList.add('elem')
    const numElem = document.createElement('span')
    numElem.textContent = '12'
    newDiv.append(numElem)
    document.body.append(newDiv)
    const newButton = document.createElement('button')
    newButton.id = 'btn2';
    newButton.textContent = 'Delete'
    newDiv.append(newButton)
 }

 const btn2 = document.querySelector('.btn2')
 const oldDiv = document.querySelector('elem')
 if (btn2) btn2.addEventListener('click', function() {
    oldDiv?.remove()
})

const arr =[1, 2, 3, 4, 5, 6, 7]


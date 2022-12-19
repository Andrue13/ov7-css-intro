// @ts-check
const openModal = document.getElementById('open-modal')
const modal = document.querySelector('.modal')
/**
 * @type {HTMLElement | null}*/
const modalBackground = document.querySelector('.modal-background')

if (openModal) openModal.onclick = function() {
   modal?.classList.add('show')
}

if (modalBackground) modalBackground.addEventListener('click', function() {
    modal?.classList.remove('show')
})

const newDiv = document.createElement('div')
newDiv.classList.add('elem')
const numElem = document.createElement('span')
numElem.textContent = '12'
newDiv.append(numElem)
document.body.append(newDiv)

const openNewModal = document.querySelector('.btn1')
if (openNewModal) openNewModal.onclick = function() {
    const newDiv = document.createElement('div')
    newDiv.classList.add('elem')
    const numElem = document.createElement('span')
    numElem.textContent = '12'
    newDiv.append(numElem)
    document.body.append(newDiv)
 }

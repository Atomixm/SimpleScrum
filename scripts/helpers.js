/*
 Agrega animacion de ingreso al formulario
 */
let button = document.getElementById('newTask')
let formElement = document.getElementById('formElement')
let cancelButton = document.getElementById('cancelForm')

button.addEventListener('click', () =>{
    formElement.classList.add('active')
})
cancelButton.addEventListener('click',()=>{
    formElement.classList.remove('active')
})
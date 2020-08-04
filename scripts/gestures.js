delete Hammer.defaults.cssProps.userSelect //habilita que el usario pueda selecionar el texto de los elementos donde se emplea hammer

const body = document.getElementById('body')

const hammerjs = new Hammer(body)
hammerjs.on('panleft panright', ev => {
    if(ev.pointerType === 'touch'){
        if(ev.type === 'panleft' && ev.distance > 100){
            formElement.classList.add('active')
        }
        if(ev.type === 'panright' && ev.distance > 100){
            formElement.classList.remove('active')
        }
    }
})
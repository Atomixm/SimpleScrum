const body = document.getElementById('body')

const hammerjs = new Hammer(body)
hammerjs.on('pan', ev => console.log(ev))
const $btn = document.querySelector('#btn')

$btn.addEventListener('click', () => {
    console.log('Me presionaste')
})

const $text = document.querySelector('#input')

$text.addEventListener('keydown', () => {
    console.log("presionaste una tecla")
})
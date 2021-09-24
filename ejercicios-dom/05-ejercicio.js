const $body = document.querySelector('body')
const $colors = document.querySelector('#colors')

$colors.addEventListener('change', (e) => {
    switch(e.target.value) {
        case 'red':
            $body.className = ''
            $body.classList.add('red')
            break
        case 'green':
            $body.className = ''
            $body.classList.add('green')
            break
        case 'blue':
            $body.className = ''
            $body.classList.add('blue')
            break       
    }
})
const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $list = document.querySelector('#list')

$form.addEventListener('submit', (e) => {
    e.preventDefault()
    let element = document.createElement('li')
    element.textContent = $input.value
    element.setAttribute('class','list-group-item')
    $list.appendChild(element)
    e.target.reset()
})
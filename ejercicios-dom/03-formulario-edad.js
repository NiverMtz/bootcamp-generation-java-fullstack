const nameTitle = document.querySelector('#name')
const inputSet = document.querySelector('#input')

const writeName = () => {
    nameTitle.textContent = inputSet.value >= 18 ? "eres mayor de edad" : "eres menor de edad"
}
const $btn = document.querySelector('#btnCat')
const $divCats = document.querySelector('#cats')

$btn.addEventListener('click', async () => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search')
    const data = await resp.json()
    const imgCat = document.createElement('img')
    imgCat.src = data[0].url
    $divCats.appendChild(imgCat)
    imgCat.height = "100"

})
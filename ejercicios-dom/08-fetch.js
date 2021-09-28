const $btn = document.querySelector('#btnCat')
const $divCats = document.querySelector('#cats')

$btn.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        const imgCat = document.createElement('img')
        imgCat.src = data[0].url
        $divCats.appendChild(imgCat)
        imgCat.height = "100"
    })
})



/* const [cat] = data[0]
const {url} = cat
imgCat.src = url */
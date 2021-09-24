const title = document.getElementsByTagName("h1")
title[0].innerHTML = "Título cambiado desde HTML"


const texto = document.querySelector("#text")
texto.textContent = "Agregando texto desde JS"

const div = document.createElement("div")
const body = document.querySelector("body")

body.append(div)

const $btn = document.querySelector("#btnCat");
const $divDogs = document.querySelector("#cats");

$btn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const imgCat = document.createElement("img");
      imgCat.src = data.message;
      imgCat.height = "150";
      imgCat.className = 'p-2'
      $divDogs.appendChild(imgCat);
    });
});

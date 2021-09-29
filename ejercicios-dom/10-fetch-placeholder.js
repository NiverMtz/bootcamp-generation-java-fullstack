const $tarjeta = document.querySelector("#tarjeta");
const $contenedor = document.querySelector("#contenedor");
let content = "";

var mostrar_cartas = () => {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      var count = Object.keys(data).length;
      for (let n = 0; n < count; n++) {
        content += ` <div id="tarjeta" class="card m-3" style="width: 18rem;">
                        <img src="${data[n].url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${data[n].title}</p>
                        </div>
                    </div> `;
      }
      $contenedor.innerHTML = content;
      
    });
};

mostrar_cartas();

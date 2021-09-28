const peticion = fetch("https://jsonplaceholder.typicode.com/todos1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(e => console.log(e));

console.log(peticion);
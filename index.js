fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((myJson) => console.log(myJson))
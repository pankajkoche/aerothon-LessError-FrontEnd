console.log("'Allo 'Allo!");

const backendUrl = "https://jsonplaceholder.typicode.com/todos/1";

fetch(backendUrl)
  .then((response) => response.json())
  .then((json) => {
    document.getElementById('backendMessage').innerHTML = json.title;
  });

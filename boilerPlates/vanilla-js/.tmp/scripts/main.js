"use strict";

console.log("'Allo 'Allo!");
var backendUrl = "https://jsonplaceholder.typicode.com/todos/1";
fetch(backendUrl).then(function (response) {
  return response.json();
}).then(function (json) {
  document.getElementById('backendMessage').innerHTML = json.title;
});
//# sourceMappingURL=main.js.map
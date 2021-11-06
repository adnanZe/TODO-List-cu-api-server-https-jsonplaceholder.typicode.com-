




// functions for API response

function responseJSON(data) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${data}`)
  .then(response => response.json())
  .then(json => console.log(json))
}


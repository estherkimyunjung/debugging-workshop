// document.addEventListener('DOMContentLoaded', () => {
    
  const form = document.getElementById('joke-form')

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const jokeList = document.getElementById('joke-list')
    const newJokeLi = document.createElement('li')
    const username = document.getElementById('name-input').value

    if(username === "") return;

    fetchJoke().then(joke => {

      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `

      jokeList.appendChild(newJokeLi)
    })
  })
    
  // <div id="main-container">
  //   <div>
  //     <form id="joke-form">
  //       <h2>Make an awesome joke</h2>
  //       <p>Your Name: <input type="text" id="name-input" placeholder="Your Name" autocomplete="off"></input></p>
  //       <p><input type="submit" value="Click here to make a joke"></input></p>
  //     </form>
  //   </div>
  //   <ul id="joke-list">
  //   </ul>
  // </div>
  
  // })

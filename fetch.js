    const jokes = document.createElement('p')  
   




 fetch('https://api.chucknorris.io/jokes/random')
 .then((res)=>{
    return (res.json())
  }).then((joke)=>{
    jokes.textContent = joke.value
  })
        

document.body.append(jokes)

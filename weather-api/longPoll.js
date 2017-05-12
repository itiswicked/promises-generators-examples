// let fetch = require('node-fetch');

function *pollForWeatherInfo(){
  while(true){
    yield fetch('http://localhost:8000/api/currentWeather', { // returns a promise
      method: 'get'
    }).then(function(response) {
      return response.json(); // also returns a promise
    })

  }
}

function runPolling(generator){
  if(!generator){
    generator = pollForWeatherInfo();
  }

  let jsonPromise = generator.next().value;
  jsonPromise.then(function(data){
    if(!data.temperature){
      setTimeout(() => runPolling(generator), 1000) // Sweet recursion
    } else {
      console.log(data);
    }
  })
}

runPolling();

let successful = false

// This is what the new fetch API does
function fetchMock(url) {
  return new Promise(function(resolve, reject) {
    if(successful) {
      let response = { status: 200, body: { data: [1,2,3,4,5] }  };
      resolve(response);
    } else {
      let response = { status: 422, body: { error: "Meaningful Failure Message" } };
      reject(response);
    }
  });
}

fetchMock('/some/url')
  .then(response => console.log(response))
  .catch(response => console.error(response));

const baseURL = 'http://localhost:3000'

class Request {

  get(url) {
    return fetch(baseURL+url)
    .then((res) =>  res.json());
  }
}


export default Request;

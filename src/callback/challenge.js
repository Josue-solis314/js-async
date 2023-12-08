const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi,cb){
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET',urlApi,true);
  xhttp.onreadystatachange = function (event) {
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        cb(null,JSON.parse(xhttp.responseText));
      }
    }else{
      const error = new Error('Error',urlApi);
      return cb(error,null);
    }
  }
  xhttp.send();
}
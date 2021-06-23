const md5 = require('crypto-js/md5');

async function teste() {
  const publicKey = 'b70a3ef37c227fc1b5ac6d8d01b85a90';
  const privateKey = 'ba849312d717670e9bdbd3e634ec4f11a1bd8f3e';
  
  const timeStamp = Math.floor(Date.now() / 1000);
  
  const hash = md5(`${timeStamp}${privateKey}${publicKey}`).toString();
  
  const endpoint = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`;

  // const response = await fetch(endpoint);
  const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
  const result = await response.json();

  console.log(result);

  // return json;
}

// teste();

const result = fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then((response) => response.json()).then((data) => data);

console.log(result);


// async function getCategories() {
//   const API_URL = 'https://api.mercadolibre.com/sites/MLB/categories';
//   return fetch(API_URL).then((response) => response.json());
// }

// console.log(getCategories());

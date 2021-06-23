// const md5 = require('crypto-js/md5');

export const getCharactersById = (id) => {
  const token = '3022127751354980';
  const endpoint = `https://superheroapi.com/api/${token}/${id}`;

  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

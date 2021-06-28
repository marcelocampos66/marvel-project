// const md5 = require('crypto-js/md5');

export const getCharactersById = async (id) => {
  const token = '3022127751354980';
  const endpoint = `https://superheroapi.com/api/${token}/${id}`;

  const result = await fetch(endpoint, {mode: 'no-cors'})
    .then((response) => response.json())
    .then((data) => console.log(data));

  return result;
};

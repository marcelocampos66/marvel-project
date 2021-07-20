// fetchs

export const getAPageOfHeroes = (page) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/heroes?page=${page}`;
  return fetch(endpoint)
    .then((response) => response.json()).then((data) => data);
};

export const searchHeroesByName = (name) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/heroes/search/${name}`;
  return fetch(endpoint)
    .then((response) => response.json()).then((data) => data);
};

export const getHeroById = (id) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/heroes/${id}`;
  return fetch(endpoint)
    .then((response) => response.json()).then((data) => data);
};

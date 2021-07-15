// fetchs

export const getAPageOfHeroes = (page) => {
  const endpoint = `http://localhost:5500/heroes?page=${page}`;
  return fetch(endpoint)
    .then((response) => response.json()).then((data) => data);
};

export const searchHeroesByName = (name) => {
  const endpoint = `http://localhost:5500/heroes/${name}`;
  return fetch(endpoint)
    .then((response) => response.json()).then((data) => data);
};

// export const getHeroById = (id) => {

// };

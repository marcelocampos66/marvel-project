export const getAPageOfHeroes = (page, token) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/heroes?page=${page}`;
  return fetch(endpoint, {
    headers: { 
      'Authorization': token,
    },
  })
    .then((response) => response.json()).then((data) => data)
    .catch((err) => err);
};

export const searchHeroesByName = (name) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/heroes/search?name=${name}`;
  return fetch(endpoint)
    .then((response) => response.json()).then((data) => data);
};

export const getHeroById = (id, token) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/heroes/${id}`;
  return fetch(endpoint, {
    headers: { 
      'Authorization': token,
    },
  })
    .then((response) => response.json()).then((data) => data)
    .catch((err) => err);
};

export const getMyListOfHeroes = (token) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/heroes/mylist`;
  return fetch(endpoint, {
    method: 'GET',
    headers: { 
      'Authorization': token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const addHeroToList = (id, token) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/users/${id}`;
  return fetch(endpoint, {
    method: 'POST',
    headers: { 
      'Authorization': token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const deleteHeroOfList = (id, token) => {
  const endpoint = `https://heroes-list-api.herokuapp.com/users/${id}`;
  return fetch(endpoint, {
    method: 'DELETE',
    headers: { 
      'Authorization': token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const getQuantityOfHeroes = () => {
  const endpoint = 'https://heroes-list-api.herokuapp.com/heroes/quantity';
  return fetch(endpoint)
    .then((response) => response.json()).then((data) => data);
};

export const registerNewUser = (newUSer) => {
  const endpoint = 'https://heroes-list-api.herokuapp.com/users';
  delete newUSer.terms && delete newUSer.error && delete newUSer.image;
  return fetch(endpoint, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...newUSer }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const loginUser = (user) => {
  const endpoint = 'https://heroes-list-api.herokuapp.com/users/login';
  return fetch(endpoint, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...user }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const recoveryPassWord = (email) => {
  const endpoint = 'https://heroes-list-api.herokuapp.com/users/recover/password';
  return fetch(endpoint, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...email }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const updateUser = (user, token) => {
  const endpoint = 'https://heroes-list-api.herokuapp.com/users/update-infos';
  delete user.terms && delete user.error && delete user.role && delete user.list;
  return fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({ ...user }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const getUser = (token) => {
  const endpoint = 'https://heroes-list-api.herokuapp.com/users/selfuser';
  return fetch(endpoint, {
    method: 'GET',
    headers: { 
      'Authorization': token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};


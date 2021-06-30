import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Details({ match: { params: { id } } }) {
  console.log(id);
  return (
    <main>
      <Header />
      <p>Details</p>
    </main>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf().isRequired,
  params: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default Details;

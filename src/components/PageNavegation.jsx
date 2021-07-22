import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function PageNavegation() {
  const { page, setPage } = useContext(AppContext);

  return (
    <div>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span>{page}</span>
      <button
        type="button"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default PageNavegation;

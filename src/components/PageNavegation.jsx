import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import * as S from '../CSS/S.PageNavegation';

function PageNavegation() {
  const { page, setPage } = useContext(AppContext);

  return (
    <S.Section>
      <S.Button
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </S.Button>
      <span>{page}</span>
      <S.Button
        type="button"
        onClick={() => setPage(page + 1)}
      >
        Next
      </S.Button>
    </S.Section>
  );
}

export default PageNavegation;

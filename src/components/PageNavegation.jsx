import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import * as S from '../CSS/S.PageNavegation';
import { getQuantityOfHeroes } from '../services/api';

function PageNavegation() {
  const {
    page, setPage,
    quantity, setQuantity,
  } = useContext(AppContext);

  const fetchQuantity = async () => {
    const number = await getQuantityOfHeroes();
    setQuantity((number.heroesQuantity / 12).toFixed(0));
  };

  useEffect(async () => {
    await fetchQuantity();
  }, []);

  return (
    <S.Section>
      <S.ImgBack
        type="button"
        // disabled="true"
        disabled={page === 1}
        onClick={() => page > 1 && setPage(page - 1)}
      />
      <p>{`${page} of ${quantity}`}</p>
      <S.ImgNext
        type="button"
        disabled={page === Number(quantity)}
        onClick={() => page < Number(quantity) && setPage(page + 1)}
      />
    </S.Section>
  );
}

export default PageNavegation;

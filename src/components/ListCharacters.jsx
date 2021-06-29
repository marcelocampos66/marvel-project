import React, { useContext } from 'react';
import * as S from '../CSS/S.ListCharacters';
import AppContext from '../context/AppContext';

function ListCharacters() {
  const { heroes } = useContext(AppContext);

  return (
    <S.Section>
      {
        heroes.map(({
          _id: id,
          name,
          image: { url },
          biography: { alignment, fullName },
        }) => (
          <>
            <S.DivCard key={id}>
              <S.Img src={url} alt={`Personagem: ${name}`} />
              <div>
                <S.P>
                  Name:
                  { name }
                </S.P>
                <S.P>
                  Real Name:
                  {fullName || name }
                </S.P>
                <S.P>
                  Alignment:
                  { alignment }
                </S.P>
              </div>
            </S.DivCard>
            <S.Hr />
          </>
        ))
      }
    </S.Section>
  );
}

export default ListCharacters;

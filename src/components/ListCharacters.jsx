import React, { useContext } from 'react';
import * as S from '../CSS/S.ListCharacters';
import AppContext from '../context/AppContext';

function ListCharacters() {
  const { heroes } = useContext(AppContext);

  return (
    <S.Section>
      <S.DivFlexStart>
        {
          heroes.map(({
            _id: id,
            name,
            image: { url },
            biography: { alignment, fullName },
          }) => (
            <S.DivCard>
              <S.SLink to={`/details/${id}`}>
                <S.DivContent key={id}>
                  <S.Img src={url} alt={`Personagem: ${name}`} />
                  <S.DivText>
                    <S.P>
                      {`Name: ${name}`}
                    </S.P>
                    <S.P>
                      {`Real Name: ${fullName || name}`}
                    </S.P>
                    <S.P>
                      {`Alignment: ${alignment}`}
                    </S.P>
                  </S.DivText>
                </S.DivContent>
              </S.SLink>
              <S.Hr />
            </S.DivCard>
          ))
        }
      </S.DivFlexStart>
    </S.Section>
  );
}

export default ListCharacters;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from '../CSS/S.ListCharacters';
import AppContext from '../context/AppContext';
import NoHeroesFound from '../components/NoHeroesFound';

function ListCharacters({ type }) {
  const { heroes, myList } = useContext(AppContext);
  const list = (type === 'favorite') ? myList : heroes;

  if (heroes.length === 0) return <NoHeroesFound />;

  return (
    <S.Section>
      <S.DivFlexStart>
        {
          list.map(({
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

ListCharacters.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ListCharacters;

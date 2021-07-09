import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Button from '../components/Button';
import * as S from '../CSS/S.Details';

function Details({ match: { params: { id } } }) {
  const { heroes } = useContext(AppContext);
  const currentHero = heroes.find(({ _id: heroId }) => heroId === id);

  const {
    name,
    image: { url },
    appearance: {
      eyeColor, gender, hairColor, height, race, weight,
    },
    biography: {
      aliases, alignment, alterEgos, firstAppearance, fullName, placeOfBirth, publisher,
    },
    connections: { groupAffiliation, relatives },
    work: { base, occupation },
    powerstats: {
      combat, durability, intelligence, power, speed, strength,
    },
  } = currentHero;

  const handleClick = () => {
    const { _id: heroId } = currentHero;
    const heroList = JSON.parse(localStorage.getItem('heroList'));
    const isOnList = heroList.some((listId) => listId === heroId);
    if (!isOnList) {
      const newHeroList = [...heroList, heroId];
      localStorage.setItem('heroList', JSON.stringify(newHeroList));
    }
  };

  return (
    <main>
      <Header />
      <h1>{name}</h1>
      <S.PowerStatusSection>
        <S.HeroImg
          src={url}
          alt={`${name}`}
        />
        <S.PowerStatusDiv>
          <h4>Power Status</h4>
          <p>{`Combat: ${combat}`}</p>
          <p>{`Durability: ${durability}`}</p>
          <p>{`Intelligence: ${intelligence}`}</p>
          <p>{`Power: ${power}`}</p>
          <p>{`Speed: ${speed}`}</p>
          <p>{`Strength: ${strength}`}</p>
        </S.PowerStatusDiv>
      </S.PowerStatusSection>
      <S.MainInfoSection>
        <h4>Main information</h4>
        <p>{`Race: ${race === 'null' ? 'unknown' : race}`}</p>
        <p>{`Alignment: ${alignment || 'unknown'}`}</p>
        <p>{`Gender: ${gender || 'unknown'}`}</p>
        <p>{`Eye color: ${eyeColor || 'unknown'}`}</p>
        <p>{`Hair: ${hairColor || 'unknown'}`}</p>
        <p>{`Weight: ${weight[0]} - ${weight[1]}`}</p>
        <p>{`Height: ${height[0]} - ${height[1]}`}</p>
      </S.MainInfoSection>
      <S.BiographySection>
        <h4>Biography</h4>
        <p>{`Full name: ${fullName || name}`}</p>
        <p>{`Group Affiliation: ${groupAffiliation || 'unknown'}`}</p>
        <p>{`Alter egos: ${alterEgos || 'unknown'}`}</p>
        <p>{`Publisher: ${publisher || 'unknown'}`}</p>
        <p>{`First appearance: ${firstAppearance || 'unknown'}`}</p>
        <p>{`Place of birth: ${placeOfBirth || 'unknown'}`}</p>
        <p>{`Relatives: ${relatives || 'unknown'}`}</p>
        <p>Aliases:</p>
        <ul>{aliases.map((aliase) => <li key={aliase}>{aliase}</li>)}</ul>
        <p>Work:</p>
        <ul>
          <li>{`Base: ${base}`}</li>
          <li>{`Occupation: ${occupation}`}</li>
        </ul>
      </S.BiographySection>
      <div>
        <Button text="Add to list" click={handleClick} />
      </div>
    </main>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf().isRequired,
  params: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default Details;

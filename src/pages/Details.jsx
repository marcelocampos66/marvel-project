import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
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

  // Kinship;

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
        <p>{`Race: ${race}`}</p>
        <p>{`Alignment: ${alignment}`}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Eye color: ${eyeColor}`}</p>
        <p>{`Hair: ${hairColor}`}</p>
        <p>{`Weight: ${weight[1]}`}</p>
        <p>{`Height: ${height[1]}`}</p>
      </S.MainInfoSection>
      <S.BiographySection>
        <h4>Biography</h4>
        <p>{`Full name: ${fullName || name}`}</p>
        <p>{`Group Affiliation: ${groupAffiliation}`}</p>
        <p>{`Alter egos: ${alterEgos}`}</p>
        <p>{`Publisher: ${publisher}`}</p>
        <p>{`First appearance: ${firstAppearance}`}</p>
        <p>{`Place of birth: ${placeOfBirth}`}</p>
        <p>{`Relatives: ${relatives}`}</p>
        <p>Aliases:</p>
        <ul>{aliases.map((aliase) => <li key={aliase}>{aliase}</li>)}</ul>
        <p>Work:</p>
        <ul>
          <li>{`Base: ${base}`}</li>
          <li>{`Occupation: ${occupation}`}</li>
        </ul>
      </S.BiographySection>
    </main>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf().isRequired,
  params: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default Details;

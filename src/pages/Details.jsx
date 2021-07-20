import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getHeroById } from '../services/api';
import * as S from '../CSS/S.Details';
import * as I from '../helpers/percentualPathImages';
import imageScore from '../helpers/imageScore';
import seta from '../images/SetaW.png';

const initialState = {
  powerStatusDrop: true,
  mainInformationDrop: false,
  biographyDrop: false,
};

function Details({ match: { params: { id } } }) {
  const [controlDrop, setControlDrop] = useState(initialState);
  const [currentHero, setCurrentHero] = useState();
  const [loading, setLoading] = useState(true);

  const getHero = async () => {
    const hero = await getHeroById(id);
    setCurrentHero(hero);
    setLoading(false);
  };

  useEffect(() => {
    getHero();
  }, []);

  if (loading) return <p>Loading...</p>;

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
    overall,
  } = currentHero;

  const heroStatus = [
    { combat }, { durability }, { intellect: intelligence },
    { power }, { speed }, { strength },
  ];

  const handleClick = () => {
    const { _id: heroId } = currentHero;
    const heroList = JSON.parse(localStorage.getItem('heroList'));
    const isOnList = heroList.some((listId) => listId === heroId);
    if (!isOnList) {
      const newHeroList = [...heroList, heroId];
      localStorage.setItem('heroList', JSON.stringify(newHeroList));
    }
  };

  const { powerStatusDrop, mainInformationDrop, biographyDrop } = controlDrop;

  const handleDrop = (key) => {
    if (key === 'powerStatusDrop') {
      setControlDrop({ ...controlDrop, powerStatusDrop: !powerStatusDrop });
    }

    if (key === 'mainInformationDrop') {
      setControlDrop({ ...controlDrop, mainInformationDrop: !mainInformationDrop });
    }
    if (key === 'biographyDrop') {
      setControlDrop({ ...controlDrop, biographyDrop: !biographyDrop });
    }
  };

  return (
    <S.Main>
      <Header />
      <S.HeroSec>
        <S.H1Tittle>{name}</S.H1Tittle>
        <S.Hero>
          <S.HeroImg
            src={url}
            alt={`${name}`}
          />
          <S.OverallContainer>
            <S.OverallImg
              src={`${I[imageScore(overall)]}`}
              alt="overall"
            />
            <S.H1Tittle>OVERALL</S.H1Tittle>
          </S.OverallContainer>
        </S.Hero>
      </S.HeroSec>
      <S.StatusSection
        onClick={() => handleDrop('powerStatusDrop')}
      >
        <S.Dropdown>
          <S.H4tittle>POWER STATUS</S.H4tittle>
          <S.Arrow
            src={seta}
            alt="seta dropdown"
          />
        </S.Dropdown>
        { powerStatusDrop && (
          <S.PowerStatusDiv visible={powerStatusDrop}>
            {
              heroStatus.map((obj) => {
                const status = Object.entries(obj);
                return (
                  <S.StatusDiv key={status[0][0]}>
                    <S.H4status>{status[0][0].toUpperCase()}</S.H4status>
                    <S.StatusImg
                      src={`${I[imageScore(status[0][1])]}`}
                      alt={status[0][1]}
                    />
                  </S.StatusDiv>
                );
              })
            }
          </S.PowerStatusDiv>
        )}
      </S.StatusSection>
      <S.MainInfoSection
        onClick={() => handleDrop('mainInformationDrop')}
      >
        <S.Dropdown>
          <S.H4tittle>MAIN INFORMATION</S.H4tittle>
          <S.Arrow
            src={seta}
            alt="seta dropdown"
          />
        </S.Dropdown>
        { mainInformationDrop && (
          <S.InfosContainer>
            <S.InfoP>{`Race: ${race === 'null' ? 'unknown' : race}`}</S.InfoP>
            <S.InfoP>{`Alignment: ${alignment || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Gender: ${gender || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Eye color: ${eyeColor || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Hair: ${hairColor || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Weight: ${weight[0]} - ${weight[1]}`}</S.InfoP>
            <S.InfoP>{`Height: ${height[0]} - ${height[1]}`}</S.InfoP>
          </S.InfosContainer>
        )}
      </S.MainInfoSection>
      <S.BiographySection
        onClick={() => handleDrop('biographyDrop')}
      >
        <S.Dropdown>
          <S.H4tittle>BIOGRAPHY</S.H4tittle>
          <S.Arrow
            src={seta}
            alt="seta dropdown"
          />
        </S.Dropdown>
        { biographyDrop && (
          <S.InfosContainer>
            <S.InfoP>{`Full name: ${fullName || name}`}</S.InfoP>
            <S.InfoP>{`Group Affiliation: ${groupAffiliation || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Alter egos: ${alterEgos || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Publisher: ${publisher || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`First appearance: ${firstAppearance || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Place of birth: ${placeOfBirth || 'unknown'}`}</S.InfoP>
            <S.InfoP>{`Relatives: ${relatives || 'unknown'}`}</S.InfoP>
            <S.InfoP>Aliases:</S.InfoP>
            <ul>{aliases.map((aliase) => <li key={aliase}>{aliase}</li>)}</ul>
            <S.InfoP>Work:</S.InfoP>
            <ul>
              <li>{`Base: ${base}`}</li>
              <li>{`Occupation: ${occupation}`}</li>
            </ul>
          </S.InfosContainer>
        )}
      </S.BiographySection>
      <div>
        <S.Button type="button" onClick={handleClick}>
          Add to list
        </S.Button>
      </div>
    </S.Main>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf().isRequired,
  params: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default Details;

import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getHeroById, addHeroToList, deleteHeroOfList, getMyListOfHeroes } from '../services/api';
import * as S from '../CSS/S.Details';
import * as I from '../helpers/percentualPathImages';
import imageScore from '../helpers/imageScore';
import seta from '../images/SetaW.png';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import myContext from '../context/AppContext';

const initialState = {
  powerStatusDrop: true,
  mainInformationDrop: false,
  biographyDrop: false,
};

function Details({ match: { params: { id } } }) {
  const [controlDrop, setControlDrop] = useState(initialState);
  const [currentHero, setCurrentHero] = useState();
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);
  const { myList, setMyList } = useContext(myContext);

  const getHero = async () => {
    const token = JSON.parse(localStorage.getItem('shlToken'));
    const hero = await getHeroById(id, token);

    if (hero.type === 'invalid_token') {
      setRedirect(true);
      return;
    }
    setCurrentHero(hero);
    setLoading(false);
  };

  const setInitialState = (windowSize) => {
    if (windowSize >= 1024) {
      setControlDrop({
        powerStatusDrop: true,
        mainInformationDrop: true,
        biographyDrop: true,
      });
    }
  };

  const verifyFavorite = () => {
    const find = myList.find((hero) => hero._id === id)
    if (!find) {
      setFavorite(false);
      return;
    }
    setFavorite(true);
  }

  useEffect(() => {
    getHero();
    setInitialState(windowSize);
  }, []);

  useEffect(async () => {
    await verifyFavorite(); 
  }, [myList]);

  if (loading) return <Loading />;
  if (redirect) return <Redirect to='/' />;

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

    
  const updateList = async () => {
    const token = JSON.parse(localStorage.getItem('shlToken'));
    const { _id: heroId } = currentHero;
    const find = myList.find((hero) => hero._id === heroId);
    if (!find) {
      setMyList([...myList, currentHero]);
      await addHeroToList(heroId , token);
      return;
    } 
    setMyList((prev) => {
      const newMyList = prev.filter((hero) => hero._id !== id)
      return newMyList;
     });
    await deleteHeroOfList(heroId, token);
  }

  const { powerStatusDrop, mainInformationDrop, biographyDrop } = controlDrop;

  const handleDrop = (key) => {
    if (windowSize >= 1024) return;
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
              src={!imageScore(overall) ? I.unknown :`${I[imageScore(overall)]}`}
              alt="overall"
            />
            <S.H1Tittle>OVERALL</S.H1Tittle>
          </S.OverallContainer>
        </S.Hero>
      </S.HeroSec>
      <S.StatusSection>
        <S.Dropdown
          onClick={() => handleDrop('powerStatusDrop')}
        >
          <S.H4tittle>POWER STATUS</S.H4tittle>
          {(windowSize < 1024) && (<S.Arrow
            src={seta}
            alt="seta dropdown"
          />)}
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
                      src={!imageScore(status[0][1]) ? I.unknown : `${I[imageScore(status[0][1])]}`}
                      alt={status[0][1]}
                    />
                  </S.StatusDiv>
                );
              })
            }
          </S.PowerStatusDiv>
        )}
      </S.StatusSection>
      <S.MainInfoSection>
        <S.Dropdown
          onClick={() => handleDrop('mainInformationDrop')}
        >
          <S.H4tittle>MAIN INFORMATION</S.H4tittle>
          {(windowSize < 1024) && (<S.Arrow
            src={seta}
            alt="seta dropdown"
          />)}
        </S.Dropdown>
        { mainInformationDrop && (
          <S.InfosContainer test={mainInformationDrop}>
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
      <S.BiographySection>
        <S.Dropdown
          onClick={() => handleDrop('biographyDrop')}
        >
          <S.H4tittle>BIOGRAPHY</S.H4tittle>
          {(windowSize < 1024) && (<S.Arrow
            src={seta}
            alt="seta dropdown"
          />)}
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
      <S.ButtonDivContainer>
        <S.Button type="button" onClick={ () => updateList() }>   
          { favorite ? 'Remove' : 'Add' }
        </S.Button>
      </S.ButtonDivContainer>
    </S.Main>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf().isRequired,
  params: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default Details;

import React, { useContext, useEffect, useState } from 'react';
import { getUser, updateUser } from '../services/api';
import * as S from '../CSS/S.Profile';
import noUserImg from '../images/no-user-image.jpg';
import { formInitialState } from '../context/Provider';
import myContext from '../context/AppContext';
import renderInput from '../helpers/renderInput';
import updateValidator from '../helpers/updateValidator';

function Profile() {
  const { formData, setFormData } = useContext(myContext);
  const [user, setUser] = useState(formInitialState);
  const [editUser, setEditUser] = useState(false);
  const [disableButton, setDisableButton] = useState(true);


  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem('shlToken'));
    const infos = await getUser(token);
    setUser(infos);
  };

  const editProfile = () => {
    setFormData({...user});
    setEditUser(!editUser);
  };

  const updateMyProfile = async () => {
    const token = JSON.parse(localStorage.getItem('shlToken'));
    const newInfos = await updateUser(formData, token);
    setUser(newInfos);
    setFormData(formInitialState);
  };

  const validateForm = () => {
    const verify = updateValidator(formData);
    setDisableButton(verify);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const { name, age, email } = user;

  const formEditUser = (
    <S.Form>
      {renderInput('text', 'name', 'Name')}
      {renderInput('number', 'age', 'Age')}
      {renderInput('text', 'email', 'Email')}
      {renderInput('password', 'password', 'Password')}
      {renderInput('text', 'image', 'Image link')}
      <button
        type="button"
        onClick={() => { updateMyProfile() }}
        disabled={disableButton}
      >
        Submit Changes
      </button>
    </S.Form>
  );

  const currentDataUser = (
    <S.UserSection>
        <S.UserImg
          src={!user.image ? noUserImg : user.image}
          alt="user"
        />
        <S.UserInfoDiv>
          <h2>{name}</h2>
          <h3>{age}</h3>
          <h4>{email}</h4 >
        </S.UserInfoDiv>
      </S.UserSection>
  );

  return (
    <S.Main>
      <h1>My Profile</h1>
      {
        editUser ? formEditUser : currentDataUser
      }
      <S.EditButtonContainer>
        <S.EditButton
          type="button"
          onClick={ () => editProfile() }
        >
          Edit information
        </S.EditButton>
      </S.EditButtonContainer>
    </S.Main>
  );
}

export default Profile;

import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
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
    const update = formData;
    const newInfos = await updateUser(update, token);
    setUser(newInfos);
    setFormData(formInitialState);
    setEditUser(false);
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
    </S.Form>
  );

  const currentDataUser = (
    <S.UserSection>
        <S.UserImg
          src={!user.image ? noUserImg : user.image}
          alt="user"
        />
        <S.UserInfoDiv>
          <S.H2>{name}</S.H2>
          <S.H3>{age}</S.H3>
          <S.H4>{email}</S.H4>
        </S.UserInfoDiv>
      </S.UserSection>
  );

  return (
    <S.Main>
      <Header />
      <S.H1>My Profile</S.H1>
      {
        editUser ? formEditUser : currentDataUser
      }
      <S.EditButtonContainer>
        <S.EditButton
          type="button"
          type={editUser}
          onClick={ () => editProfile() }
        >
          { editUser ? 'Cancel' : 'Edit' }
        </S.EditButton>
        {editUser && <S.SubmitButton
          type="button"
          onClick={() => { updateMyProfile() }}
          disabled={disableButton}
        >
          Submit
        </S.SubmitButton>}
      </S.EditButtonContainer>
    </S.Main>
  );
}

export default Profile;

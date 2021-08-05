import * as S from '../CSS/S.RenderInput';
import myContext from '../context/AppContext';
import { useContext } from 'react';

const renderInput = (type, nameInput, labelText) => {
  const { formData, setFormData } = useContext(myContext);
  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'terms') {
      setFormData({ ...formData, [name]: checked });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <S.DivInput
      direction={type === 'checkbox' ? 'row' : 'column'}
      align={type === 'checkbox' ? 'center' : 'stretch'}
    >
      <S.Label
        htmlFor={nameInput}
        className={type === 'checkbox' ? 'checkbox' : 'others'}
      >
        {`${labelText}:`}
      </S.Label>
      <S.Input
        type={type}
        id={nameInput}
        name={nameInput}
        value={formData[nameInput]}
        larguraMin={type === 'checkbox' ? '20px' : '100px'}
        largura={type === 'checkbox' ? '20px' : '90%'}
        onChange={handleChange}
        className={type === 'checkbox' ? 'checkbox' : 'others'}
      />
    </S.DivInput>
  );
}

export default renderInput;

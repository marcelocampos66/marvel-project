import React from 'react';
import Logo from '../images/Logo.png';
import Lupa from '../images/Lupa.png';
import Menu from '../images/Menu.png';

function Header() {
  return (
    <div>
      <img src={Menu} alt="Ícone de Menu" />
      <img src={Logo} alt="Logo da Marvel" />
      <img src={Lupa} alt="Ícone de Lupa" />
    </div>
  );
}

export default Header;

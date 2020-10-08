import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Image, NavLinks, Button } from './styles';

import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <Image>
        <img src={Logo} alt="loocal" />
      </Image>
      <NavLinks>
        <ul>
          <li>
            <Link to='/'>
              Sobre
            </Link>
          </li>
          <li>
            <Link to='/s'>
              Testemunhos
            </Link>
          </li>
        </ul>
        <Button>
          <Link to="/">
            <button type="submit">Área do comerciante</button>
          </Link>
        </Button>
      </NavLinks>
    </Container>
  );
}

export default Header;
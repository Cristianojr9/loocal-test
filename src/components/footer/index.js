import React from 'react';

import {
  Container
} from './styles.js';

import Logo from '../../assets/logo.svg';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import Twitter from '../../assets/Twitter.svg';

export default function Footer() {
  return (
    <Container>
      <div>
        <img src={Logo} alt="" />
        <span>2020 - Santos/SP</span>

        <ul>
          <li>
            <img src={Facebook} alt="" />
          </li>
          <li>
            <img src={Twitter} alt="" />
          </li>
          <li>
            <img src={Instagram} alt="" />
          </li>
        </ul>
      </div>
      <section>
        <ul>
          <h1>Sistema Loocal</h1>
          <li>Guia rápido</li>
          <li>FAQ</li>
          <li>Tutoriais</li>
          <li>Política de privacidade</li>
          <li>Termos de serviço</li>
        </ul>
        <ul>
          <h1>Para entregadores</h1>
          <li>Aplicativo móvel</li>
          <li>FAQ</li>
          <li>Tutoriais</li>
          <li>Política de privacidade</li>
          <li>Termos de serviço</li>
        </ul>
        <ul>
          <h1>Sobre</h1>
          <li>Equipel</li>
          <li>Novidades</li>
        </ul>
      </section>
    </Container>
  )
}

import React from 'react';
import Header from '../../components/header';

import { Container, Content, CenterInfo } from './styles';

import Illustration1 from '../../assets/Illustration1.svg';
import Location from '../../assets/location.svg';
import Server from '../../assets/Server.svg';
import User from '../../assets/user.svg';

function Landing() {
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <span>
            Solicite entregadores <br /> de forma eficiente 🛵
          </span>
          <p>
            Somos a solução que o seu comércio precisa pra lidar com entregas
            <br />
            de forma prática e objetiva.
          </p>
          <button>
            Entre em contato
          </button>
        </section>
        <img src={Illustration1} alt="" />
      </Content>
      <CenterInfo>
        <div>
          <img src={User} alt="user" />
          <ul>
            <li>
              <span>
                900+
              </span>
            </li>
            <li>
              Entregadores
            </li>
          </ul>
        </div>
        <div>
          <img src={Location} alt="location" />
          <ul>
            <li>
              <span>
                300+
              </span>
            </li>
            <li>
              Comerciantes
            </li>
          </ul>
        </div>
        <div>
          <img src={Server} alt="server" />
          <ul>
            <li>
              <span>
                +70%
              </span>
            </li>
            <li>
              Conversão
            </li>
          </ul>
        </div>
      </CenterInfo>
    </Container>
  );
}

export default Landing;
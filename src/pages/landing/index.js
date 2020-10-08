import React from 'react';
import Header from '../../components/header';

import {
  Container,
  Content,
  CenterInfo,
  SectionAdvantage
} from './styles';

import Illustration1 from '../../assets/Illustration1.svg';
import Illustration2 from '../../assets/Illustration2.svg';
import Location from '../../assets/location.svg';
import Server from '../../assets/Server.svg';
import User from '../../assets/user.svg';
import Checked from '../../assets/checked.svg';

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
      <SectionAdvantage>
        <img src={Illustration2} alt="persona2" />
        <div>
          <h1>Gerencie as entregas <br /> do seu comércio</h1>
          <span>Com a Loocal você possui total controle sobre suas <br /> entregas</span>

          <ul>
            <li>
              <img src={Checked} alt="Checked" />
              Insira créditos na plataforma de modo pré-pago
            </li>
            <li>
              <img src={Checked} alt="Checked" />
              Entregadores segmentados por região
            </li>
            <li>
              <img src={Checked} alt="Checked" />
              Dashboard completa com métricas sobre vendas
            </li>
            <li>
              <img src={Checked} alt="Checked" />
              Acompanhamento em tempo real do seu pedido
            </li>
          </ul>
        </div>
      </SectionAdvantage>
    </Container>
  );
}

export default Landing;
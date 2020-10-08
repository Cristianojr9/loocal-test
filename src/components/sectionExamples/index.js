import React, { useEffect, useState } from 'react';

import api from '../../services/index';

import { Container, ListComments, ProfileContent, ContentStar } from './styles';

import Star from '../../assets/star.svg';

export default function SectionExamples() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    async function loadPersonas() {
      try {
        const response = await api.get('');
        setPersonas(response.data.data);
      } catch {
        console.log('error');
      }
    }
    loadPersonas()
  }, []);

  console.log(personas);

  return (
    <Container>
      <h1>Utilizada por centenas de <br /> empreendedores 👀</h1>
      <span>
        Veja alguns depoimentos de comerciantes que utilizam a Loocal para <br />
      gerenciar as demandas de entregas dos seus estabelecimentos
      </span>
      <ListComments>
        {personas.map(persona => (
          <ul key={persona.firstname}>
            <section>
              <img src={persona.image} alt="" />
              <ProfileContent>
                <li>
                  <span>
                    {persona.firstname} {persona.lastname}
                  </span>
                </li>
                <li>
                  {persona.website}
                </li>
              </ProfileContent>
              <ContentStar>
                <p>
                  4.5
                </p>
                <img src={Star} alt="star" width={20} />
              </ContentStar>
            </section>
            <span>
              “Com a Loocal conseguimos aumentar em <br /> 40% o número de vendas durante a <br /> pandemia, ótimo serviço!”
            </span>
          </ul>
        ))}
      </ListComments>
    </Container>
  )
}

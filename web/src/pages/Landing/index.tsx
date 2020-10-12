import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container, Wrapper, Location, EnterButton } from './styles';
import logoImg from '../../assets/Logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Imagem da logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </Location>

        <EnterButton to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterButton>
      </Wrapper>
    </Container>
  );
};

export default Landing;

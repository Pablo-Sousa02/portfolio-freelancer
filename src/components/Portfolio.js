import React, { useState } from 'react';
import styled from 'styled-components';
import landing from '../assets/landing.svg';
import site from '../assets/site.svg';
import teste1 from '../assets/teste1.svg';
import dentista1 from '../assets/dentista1.svg';
import advogado1 from '../assets/advogado1.svg'
import psicologa from '../assets/psicologa.svg'


const PortfolioSection = styled.section`
  padding: 50px;
  text-align: center;
  background: #f9f9f9;
  color: #333;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const PortfolioItem = styled.div`
  border: 2px solid #8B0000;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;

  img {
    width: 100%;
    display: block;
    transition: transform 0.3s;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.1);
    }
  }
`;
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 500px;
  color: #333;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background: #8B0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #a80000;
    }
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background: #8B0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #a80000;
  }
`;

const InspirationSection = styled.section`
  padding: 50px;
  text-align: center;
  background:rgb(206, 229, 248);
  color: #333;

  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    span {
    color: #8B0000;
    font-weight: bold;
    text-shadow: 
    1px 1px 2px rgba(136, 32, 32, 0.3), 
    -1px -1px 2px rgba(0, 0, 0, 0.3),
    2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

const CarrosselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const CarrosselTrack = styled.div`
  display: flex;
  transform: translateX(${(props) => props.offset}%);
  transition: transform 0.5s ease-in-out;
`;

const CarrosselItem = styled.div`
  flex: 0 0 100%;

  img {
    border-radius: 15px;
  }
`;

const CarrosselButton = styled.button`
  position: absolute;
  top: 50%;
  background: #8b0000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;

  &:hover {
    background: #a80000;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const Portfolio = () => {
  const [modalContent, setModalContent] = useState(null);
  const [carrosselOffset, setCarrosselOffset] = useState(0);

  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const handleNext = () => {
    setCarrosselOffset((prevOffset) => (prevOffset - 100) % -300);
  };

  const handlePrev = () => {
    setCarrosselOffset((prevOffset) => (prevOffset + 100) % -300);
  };

  return (
    <>
      <PortfolioSection id="portfolio">
        <h2>Meu Portfólio</h2>
        <PortfolioGrid>
          <PortfolioItem>
            <img src={dentista1} alt="Projeto 1" />
            <Button onClick={() => handleOpenModal('Detalhes do Projeto 1')}>
              Ver mais detalhes
            </Button>
          </PortfolioItem>
          <PortfolioItem>
            <img src={advogado1} alt="Projeto 2" />
            <Button onClick={() => handleOpenModal('Detalhes do Projeto 2')}>
              Ver mais detalhes
            </Button>
          </PortfolioItem>
          <PortfolioItem>
            <img src={psicologa} alt="Projeto 3" />
            <Button onClick={() => handleOpenModal('Detalhes do Projeto 3')}>
              Ver mais detalhes
            </Button>
          </PortfolioItem>
        </PortfolioGrid>
      </PortfolioSection>

      <InspirationSection id="inspiration">
        <h2>
          Crie <span>landing pages</span> atrativas para seu serviço/produto
        </h2>
        <CarrosselWrapper>
          <CarrosselTrack offset={carrosselOffset}>
            <CarrosselItem>
              <img src={landing} alt="Inspiração 1" />
            </CarrosselItem>
            <CarrosselItem>
              <img src={site} alt="Inspiração 2" />
            </CarrosselItem>
            <CarrosselItem>
              <img src={teste1} alt="Inspiração 3" />
            </CarrosselItem>
          </CarrosselTrack>
          <CarrosselButton className="left" onClick={handlePrev}>
            &#8249;
          </CarrosselButton>
          <CarrosselButton className="right" onClick={handleNext}>
            &#8250;
          </CarrosselButton>
        </CarrosselWrapper>
      </InspirationSection>

      {modalContent && (
        <Modal>
          <ModalContent>
            <h3>{modalContent}</h3>
            <p>
              Aqui você pode adicionar mais informações sobre o projeto para
              atrair a atenção dos visitantes.
            </p>
            <button onClick={handleCloseModal}>Fechar</button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Portfolio;

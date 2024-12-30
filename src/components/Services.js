import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Animações
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  0% { transform: translate(-50%, -40%) scale(0.8); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
`;

const hoverEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Estilos
const ServicesSection = styled.section`
  padding: 50px;
  text-align: center;
  background: #fff;
  color: #333;
  animation: ${fadeIn} 1s ease-out;

  h2 {
    font-size: 32px;
    margin-bottom: 30px;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: none; /* Esconde o layout de grid no mobile */
  }
`;

const ServiceBox = styled.div`
  background: #f5f5f5;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid #8B0000;
  width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #8B0000;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #333;
  }

  button {
    background-color: #8B0000;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgb(206, 7, 7);
    }
  }
`;

const MobileSlider = styled(Slider)`
  @media (min-width: 769px) {
    display: none; /* Esconde o carrossel em telas maiores */
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background-color: #fff;
  padding: 30px;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: ${slideUp} 0.5s ease-out forwards;
`;

const ModalCloseButton = styled.button`
  background-color: #8B0000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(206, 7, 7);
  }
`;

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const services = [
    { title: "Desenvolvimento de Sites", description: "Criação de websites dinâmicos e responsivos com as melhores tecnologias." },
    { title: "Design Responsivo", description: "Layouts adaptáveis para todos os dispositivos, garantindo ótima experiência." },
    { title: "SEO Otimizado", description: "Estratégias de SEO para melhorar a visibilidade do seu site nos motores de busca." },
    { title: "Manutenção de Sites", description: "Atualização e melhorias contínuas para garantir que seu site esteja sempre otimizado." }
  ];

  const handleOpenModal = (service) => {
    setCurrentService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentService(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ServicesSection id="serviços">
      <h2>Meus Serviços</h2>

      {/* Carrossel para dispositivos móveis */}
      <MobileSlider {...settings}>
        {services.map((service, index) => (
          <ServiceBox key={index} onClick={() => handleOpenModal(service)}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Saiba Mais</button>
          </ServiceBox>
        ))}
      </MobileSlider>

      {/* Grid para dispositivos maiores */}
      <ServiceContainer>
        {services.map((service, index) => (
          <ServiceBox key={index} onClick={() => handleOpenModal(service)}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Saiba Mais</button>
          </ServiceBox>
        ))}
      </ServiceContainer>

      {/* Modal */}
      <ModalBackground show={modalOpen} onClick={handleCloseModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <h3>{currentService?.title}</h3>
          <p>{currentService?.description}</p>
          <ModalCloseButton onClick={handleCloseModal}>Fechar</ModalCloseButton>
        </ModalContainer>
      </ModalBackground>
    </ServicesSection>
  );
};

export default Services;

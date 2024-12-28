import React from 'react';
import styled from 'styled-components';
import landing from '../assets/landing.svg';
import site from '../assets/site.svg';
import teste1 from '../assets/teste1.svg';

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
  transition: transform 0.3s;

  img {
    width: 100%;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Portfolio = () => {
    return (
        <PortfolioSection id ="portfolio">
            <h2>Meu Portfólio</h2>
            <PortfolioGrid>
                <PortfolioItem>
                    <img src={landing} alt="Projeto 1" />
                </PortfolioItem>
                <PortfolioItem>
                    <img src={site} alt="Projeto 2" />
                </PortfolioItem>
                <PortfolioItem>
                    <img src={teste1} alt="Projeto 3" /> {/* Corrigido para usar 'web' */}
                </PortfolioItem>
            </PortfolioGrid>
        </PortfolioSection>
    );
};

export default Portfolio;

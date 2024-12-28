import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 50px;
  text-align: center;
  background: #fff;
  color: #333;
`;

const ServiceBox = styled.div`
  display: inline-block;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ff758c;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Services = () => {
  return (
    <ServicesSection id="serviços">
      <h2>Meus Serviços</h2>
      <ServiceBox>Desenvolvimento de sites</ServiceBox>
      <ServiceBox>Design responsivo</ServiceBox>
      <ServiceBox>SEO otimizado</ServiceBox>
    </ServicesSection>
  );
};

export default Services;

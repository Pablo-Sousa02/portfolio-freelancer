import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(1000deg,rgb(0, 0, 0), #8B0000);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 40px;
  margin-left:10px;   
`;

const Hero = () => {
    return (
        <HeroSection id = "inicio">
            <Title initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
                Crie seu site agora!
            </Title>
            <Subtitle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                Transforme sua ideia em realidade.
            </Subtitle>
            <a href="#contato"><motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Contrate-me
            </motion.button></a>
        </HeroSection>
    );
};

export default Hero;

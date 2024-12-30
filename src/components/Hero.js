import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ParticlesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: white;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 40px;
  color: white;
  font-weight: 300;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HeroButton = styled(motion.button)`
  padding: 15px 40px;
  font-size: 1.2rem;
  background-color: #8b0000;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #a10000;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff"],
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
        },
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <HeroSection id="inicio">
      <ParticlesBackground>
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </ParticlesBackground>
      <Title
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Crie seu site agora!
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Transforme sua ideia em realidade.
      </Subtitle>
      <a href="#contato">
        <HeroButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Contrate-me
        </HeroButton>
      </a>
    </HeroSection>
  );
};

export default Hero;

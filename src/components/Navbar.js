import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

// Estilos
const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #8B0000;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background:rgba(139, 0, 0, 0.85);
    position: absolute;
    top: 60px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateX(100%);
  }

  &.active {
    opacity: 1;
    pointer-events: all;
    transform: translateX(0);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: auto;
    width: 100px;
    margin-top: 10px;
    margin-left: -20px;
  }

  span {
    margin-left: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  position: relative;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block; 
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    background: white;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;

    &:first-child {
      transform: ${({ menuOpen }) => (menuOpen ? 'rotate(45deg) translateY(8px)' : 'none')};
    }

    &:nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
    }

    &:last-child {
      transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none')};
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Header
      as={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <BurgerMenu menuOpen={menuOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </BurgerMenu>
      <NavLinks className={menuOpen ? 'active' : ''}>
        <a href="#inicio">Início</a>
        <a href="#serviços">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#contato">Contato</a>
      </NavLinks>
    </Header>
  );
};

export default Navbar;

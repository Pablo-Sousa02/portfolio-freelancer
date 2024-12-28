import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 60px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    display: none;
  }

  &.active {
    display: flex;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
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
      <Logo>Meu Logo</Logo>
      <BurgerMenu onClick={toggleMenu}>
        ☰
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

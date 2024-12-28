import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // Importando os ícones corretamente

const ContactSection = styled.section`
  padding: 50px;
  text-align: center;
  background: #333;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  background: #fff;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  background: #fff;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;

const Icon = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: #333;
`;

const SocialLinksSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

const SocialLink = styled.a`
  font-size: 30px;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color:rgb(3, 88, 128); /* Mudando a cor do ícone no hover */
    transform: scale(1.2); /* Aumenta o tamanho no hover */
  }

  &:active {
    transform: scale(1.1); /* Leve redução ao clicar */
  }
`;

const Contact = () => {
    return (
        <div>
            <ContactSection id = "contato">
                <h2>Entre em Contato</h2>
                <Form>
                    <InputWrapper>
                        <Icon>
                            <FaUser />
                        </Icon>
                        <Input type="text" placeholder="Seu Nome" />
                    </InputWrapper>
                    <InputWrapper>
                        <Icon>
                            <FaEnvelope />
                        </Icon>
                        <Input type="email" placeholder="Seu Email" />
                    </InputWrapper>
                    <TextAreaWrapper>
                        <Icon>
                            <FaPaperPlane />
                        </Icon>
                        <TextArea rows="5" placeholder="Sua Mensagem"></TextArea>
                    </TextAreaWrapper>
                    <button type="submit">Enviar</button>
                </Form>
            </ContactSection>

            {/* Seção de links com ícones */}
            <SocialLinksSection>
                <SocialLink href="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                </SocialLink>
                <SocialLink href="https://wa.me" target="_blank">
                    <FaWhatsapp />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com" target="_blank">
                    <FaLinkedin />
                </SocialLink>
            </SocialLinksSection>
        </div>
    );
};

export default Contact;

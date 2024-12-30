import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';
import emailjs from 'emailjs-com';


const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const slideIn = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const ContactSection = styled.section`
  padding: 50px;
  text-align: center;
  background: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 450px;
`;

const SideMessage = styled.div`
  background: #444;
  color: #fff;
  padding: 30px;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  animation: ${slideIn} 1s ease-out;
  transition: all 0.3s ease;

  &:hover {
    border: 2px solidrgb(87, 184, 223);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  h3 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }
    &:hover {
      background-color:rgb(89, 181, 235);
      
    }
  }
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
  background: ${(props) => (props.hasError ? '#ffcccc' : '#fff')};
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;

const TextAreaWrapper = styled(InputWrapper)``;

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

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  animation: ${(props) => (props.show ? shake : 'none')} 0.3s ease;
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  background: #4caf50;
  color: #fff;
  font-size: 16px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [showError, setShowError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.from_name) newErrors.from_name = 'O nome é obrigatório.';
        if (!formData.email) newErrors.email = 'O email é obrigatório.';
        if (!formData.message) newErrors.message = 'A mensagem é obrigatória.';
        setErrors(newErrors);
        setShowError(true);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs
                .sendForm('service_049qcq2', 'template_3caexmg', e.target, 'bloOASXlIbynI1PdA')
                .then(
                    (result) => {
                        setSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve!!!');
                        setFormData({ from_name: '', email: '', message: '' });
                        setErrors({});

                        setTimeout(() => {
                            setSuccessMessage('');
                        }, 2000);
                    },
                    (error) => {
                        alert('Erro ao enviar a mensagem:', error.text);
                    }
                );
        }
    };

    return (
        <div>
            <ContactSection id="contato">
                <FormWrapper>
                    <h2>Entre em Contato</h2>
                    <Form onSubmit={handleSubmit}>
                        <InputWrapper hasError={errors.from_name}>
                            <Icon>
                                <FaUser />
                            </Icon>
                            <Input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleInputChange}
                                placeholder="Seu Nome"
                            />
                        </InputWrapper>
                        {errors.from_name && <ErrorMessage show={showError}>{errors.from_name}</ErrorMessage>}

                        <InputWrapper hasError={errors.email}>
                            <Icon>
                                <FaEnvelope />
                            </Icon>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Seu Email"
                            />
                        </InputWrapper>
                        {errors.email && <ErrorMessage show={showError}>{errors.email}</ErrorMessage>}

                        <TextAreaWrapper hasError={errors.message}>
                            <Icon>
                                <FaPaperPlane />
                            </Icon>
                            <TextArea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Sua Mensagem"
                            ></TextArea>
                        </TextAreaWrapper>
                        {errors.message && <ErrorMessage show={showError}>{errors.message}</ErrorMessage>}

                        <button type="submit">Enviar</button>
                    </Form>
                    {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
                </FormWrapper>

                {/* Mensagem ao lado */}
                <SideMessage>
                    <h3>Quer fazer um orçamento?</h3>
                    <p>Se você precisa de um orçamento personalizado ou deseja saber mais sobre nossos serviços, entre em contato conosco através do e-mail ou por uma de nossas redes sociais abaixo.</p>
                </SideMessage>
            </ContactSection>
        </div>
    );
};

export default Contact;

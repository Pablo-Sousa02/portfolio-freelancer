import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom,rgb(0, 0, 0), #8B0000);
    color: #fff;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    text-align: center;
    margin: 20px 0;
  }

  button {
    background-color:rgb(0, 0, 0);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color:rgb(146, 0, 0);
    transform: scale(1.05);
  }
    html {
  scroll-behavior: smooth;
}
  /* Barra de rolagem */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #8B0000; /* Cor da parte clicável */
}


::-webkit-scrollbar-thumb:hover {
  background: #a70000;
}

`;

export default GlobalStyle;
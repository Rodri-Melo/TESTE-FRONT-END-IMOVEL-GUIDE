import React from 'react';
import './Footer.css'; // Certifique-se de importar o arquivo de estilos

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-buttons'>
        <button>Termos</button>
        <button>Contato</button>
        <button>Sobre</button>
      </div>
      <p>Copyright 2022. Todos os direitos reservados.</p>
      <img src="/logo.jpg" alt="Logo" className="logo" />
    </footer>
  );
}

export default Footer;

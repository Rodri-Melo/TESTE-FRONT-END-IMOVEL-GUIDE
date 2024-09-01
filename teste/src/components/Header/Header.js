import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <img src="/logo.jpg" alt="Logo" className="logo" />
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <button className="nav-button">Condomínios</button>
          <button className="nav-button">Fóruns</button>
          <button className="nav-button">Guias</button>
          <button className="nav-button">Artigos</button>
          <button className="nav-button">Ferramentas</button>
        </div>
        <div className="cta-items">
          <button className="cta-button">Cotar imóveis</button>
          <button className="cta-button">Planos</button>
          <button className="cta-button">Entrar</button>
        </div>
        <button className="signup-button">CADASTRE-SE</button>
      </nav>
    </header>
  );
};

export default Header;

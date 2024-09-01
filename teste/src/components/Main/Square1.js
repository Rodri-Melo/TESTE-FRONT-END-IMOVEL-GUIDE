import React, { useState } from 'react';
import './Square1.css';

const Square1 = () => {
  const [visibleNumbers, setVisibleNumbers] = useState({
    first: false,
    second: false
  });

  const handleClick = (key) => {
    setVisibleNumbers(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  return (
    <div className="square">
      <div className="user-block">
        <div className="people">
          <img src="/w1.jpg" alt="people" className="i-desf" />
          <img src="/w1.jpg" alt="people" className="p-image" />
        </div>
        <div className="user-info">
          <p className="user-name">Nome Corretora</p>
          <p className="user-points">3.000 Pontos</p>
          <button className="user-phone" onClick={() => handleClick('first')}>
            {visibleNumbers.first ? '(99) 99999-9999' : 'Ver Telefone'}
          </button>
        </div>
      </div>
      <div className="user-block">
        <div className="people">
          <img src="/w1.jpg" alt="people" className="i-desf" />
          <img src="/w1.jpg" alt="people" className="p-image" />
        </div>
        <div className="user-info">
          <p className="user-name">Nome Corretora</p>
          <p className="user-points">2.000 Pontos</p>
          <button className="user-phone" onClick={() => handleClick('second')}>
            {visibleNumbers.second ? '(99) 99999-9999' : 'Ver Telefone'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Square1;

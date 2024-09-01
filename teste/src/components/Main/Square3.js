import React, { useState } from 'react';
import './Square3.css';

const Square3 = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [valueC, setValueC] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const a = parseFloat(valueA);
    const b = parseFloat(valueB);
    const c = parseFloat(valueC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setResult('Preencha todos os campos com números válidos');
      return;
    }

    const d = (b * c) / a;
    setResult(d);
  };

  return (
    <div className="square3">
      <h2 className="square-title">Regra de 3</h2>
      <div className="input-row">
        <input
          className="square-input3"
          type="number"
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
          placeholder="Valor A"
        />
        <input
          className="square-input3"
          type="number"
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
          placeholder="Valor B"
        />
      </div>
      <div className="input-row">
        <input
          className="square-input3"
          type="number"
          value={valueC}
          onChange={(e) => setValueC(e.target.value)}
          placeholder="Valor C"
        />
        <p className="result">{result}</p>
      </div>
      <button 
      className='square3-btn'
      onClick={handleCalculate}>Calcular</button>
    </div>
  );
};

export default Square3;

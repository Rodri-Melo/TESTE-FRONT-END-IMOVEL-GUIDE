import React, { useState } from 'react';
import './Square2.css';

const Square2 = () => {
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    setPhone(value);
  };

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(value);
  };

  const handleSubmit = () => {
    alert(`Telefone: ${phone}\nCPF: ${cpf}\nAssunto: ${message}`);
  };

  return (
    <div className="square2">
      <h2 className='square-title2'>Mande uma Mensagem</h2>
      <div className="input-row">
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Digite seu telefone"
          className="square-input2"
        />
      </div>
      <div className="input-row">
        <input
          type="text"
          value={cpf}
          onChange={handleCpfChange}
          placeholder="Digite seu CPF"
          className="square-input2"
        />
      </div>
      <div className="input-row">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite o assunto"
          className="square-textarea"
        />
      </div>
      <button className="send-button" onClick={handleSubmit}>Enviar Mensagem</button>
    </div>
  );
};

export default Square2;

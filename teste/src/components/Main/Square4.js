import React, { useState } from 'react'
import './Square4.css'

const Square4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="add-btn">
      <div className="square4">
        <img src="/house.jpg" alt="house" className="house" />
      </div>
      <button className="open-btn" onClick={openModal}>
        Abrir Imagem no Modal
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="close-btn" onClick={closeModal}>
                Fechar
              </button>
            </div>
            <img src="/house.jpg" alt="house" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Square4

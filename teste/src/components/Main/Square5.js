import React from 'react'
import html2canvas from 'html2canvas'
import './Square5.css'

const Square5 = () => {
  const captureScreenshot = () => {
    const element = document.querySelector('.square5')
    if (element) {
      html2canvas(element).then((canvas) => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = 'screenshot.png'
        link.click()
      })
    }
  }

  return (
    <div className="add-btn">
      <div className="square5">
        <img src="/house.jpg" alt="house" className="house" />
        <button className="guide-btn">Imóvel Guide</button>
      </div>
      <div className="square-btn">
        <button className="download-btn" onClick={captureScreenshot}>
          Download
        </button>
      </div>
    </div>
  )
}

export default Square5

import React from 'react'

// Usa la ruta del archivo que subiste como foto:
const PHOTO = "/mnt/data/55a81599-d543-4ba3-a02a-fad7e08a6f23.png"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <img className="avatar" src="./src/imagen/Foto.png" alt="Foto de perfil" />
        <div className="title-block">
          <h1>Angel David Guarin Betancourt</h1>
          <p className="subtitle">Desarrollador Web — Frontend / Backend</p>
        </div>
      </div>
    </header>
  )
}

export default Header

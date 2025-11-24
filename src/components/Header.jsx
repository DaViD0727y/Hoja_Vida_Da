import React from 'react'
import PHOTO from '../imagen/Foto.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <img className="avatar" src={PHOTO} alt="Foto de perfil" />
        <div className="title-block">
          <h1>Angel David Guarin Betancourt</h1>
          <p className="subtitle">Desarrollador Web — Frontend / Backend</p>
        </div>
      </div>
    </header>
  )
}

export default Header

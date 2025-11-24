import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar-inner">
      <h3>Perfil</h3>
      <p>Persona responsable, con ganas de aprender y crecer profesionalmente muy atento a los detalles y comprometido con la calidad.</p>

      <h3>Educación</h3>
      <ul>
        <li>2023 - Bachiller Técnico en agropecuaria ...</li>
        <li>2016 - Básica Primaria</li>
      </ul>

      <h3>Contacto</h3>
      <p>Tel: +57 312 890 3493<br/>Email: david27guaro@Gmail.com</p>

      <h3>Redes</h3>
      <div className="socials">
        <a href='https://github.com/DaViD0727y'><button><img src="./src/imagen/Git.png" width={60} alt="Git" /></button></a>
        <a href='https://wa.me/3128903493'><button><img src="./src/imagen/What.png" width={60} alt="WhatsApp" /></button></a>
        <a href='https://www.linkedin.com/in/angel-david-guarin-betancourt-986616392?utm_source=share_via&utm_content=profile&utm_medium=member_android'><button><img src="./src/imagen/Lin.png" width={60} alt="LinkedIn" /></button></a>
        
      </div>
    </div>
  )
}

export default Sidebar

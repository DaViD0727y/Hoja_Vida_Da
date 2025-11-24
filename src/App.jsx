import React from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Skills from './components/Skills.jsx'
import DownloadButton from './components/DownloadButton.jsx'

const App = () => {
  return (
    <div className="page">
      <Header />
      <div className="container">
        <aside className="sidebar">
          <Sidebar />
        </aside>

        <main className="content">
          <section className="section">
            <h2>Conocimientos</h2>
            <p>
              Tengo conocimiento en el manejo del desarrollo web y en su diseño, me especializo en Frontend y Backend, manejo lenguajes como HTML, CSS, JavaScript, TypeScript, React y Python con Django. Además, tengo habilidades en el uso de herramientas de control de versiones como Git y plataformas como GitHub. Estoy comprometido con el aprendizaje continuo y la mejora de mis habilidades técnicas y tecnologicas para adaptarme a las demandas del desarrollo web moderno.
              {/* Reemplaza por tu texto real */}
            </p>
          </section>

          <section className="section">
            <h2>Habilidades</h2>
            <div className="skills-grid">
              <Skills name="Trabajo en equipo" level="" />
              <Skills name="Capacidad de escucha" level="" />
              <Skills name="Habilidad de análisis" level="" />
              <Skills name="Toma de decisiones" level="" />
            </div>
          </section>

          <section className="section">
            <h2>Habilidades técnicas</h2>
            <div className="tech-grid">
              <Skills name="HTML y CSS" level="6/10" />
              <Skills name="JavaScript" level="5/10" />
              <Skills name="TypeScript" level="6/10" />
              <Skills name="React" level="5/10" />
              <Skills name="Python / Django" level="6/10" />
              <Skills name="Git & GitHub" level="5/10" />
            </div>
          </section>

          <section className="section">
            <h2>Experiencia Laboral</h2>
            <p>No aplica</p>
          </section>

          <section className="section">
            <h2>Referencias personales</h2>
            <div className="refs-grid">
              <div className="card">Jonathan Alberto Guarin Chavez<br/><small>Arquitecto de Software</small></div>
              <div className="card">Kelly Johana Betancourt Ordoñez<br/><small>Especialista en seguridad informática</small></div>
            </div>
          </section>

          <div style={{ marginTop: 24 }}>
            <DownloadButton />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

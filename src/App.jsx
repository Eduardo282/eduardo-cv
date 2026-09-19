import './styles.css'
import { usePrint } from './hooks/usePrint'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Strengths from './components/Strengths'
import Footer from './components/Footer'

export default function App() {
  const print = usePrint()

  return (
    <>
      <a className="skip" href="#contenido">Ir al contenido</a>
      <div className="ambient" aria-hidden="true"></div>
      <Header onPrint={print} />
      <main id="contenido">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Strengths />
      </main>
      <Footer />
    </>
  )
}

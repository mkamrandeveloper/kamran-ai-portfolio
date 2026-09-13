import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Neural from './components/Neural'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Rocket from './components/Rocket'
import SectionReveal from './components/SectionReveal'
import './App.css'

function App() {
  return (
    <>
      <Rocket />
      <Navbar />
      <SectionReveal><Hero /></SectionReveal>
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Stats /></SectionReveal>
      <SectionReveal><Experience /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
      <SectionReveal><Neural /></SectionReveal>
      <SectionReveal><Skills /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
    </>
  )
}

export default App

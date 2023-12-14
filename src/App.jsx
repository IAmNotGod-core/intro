import './App.css'
import ParticlesBackground from './components/ParticlesBackground'
import Header from './components/Header'
import Card from './components/Card'
import Social from './components/Social'

function App() {

  return (
    <>
      <ParticlesBackground />
      <Header />
      <Card title={"Who Am I"}/>
      <Social />
    </>
  )
}

export default App

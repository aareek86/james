import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Shop />
      <Contact />
      <Footer />
    </div>
  )
}

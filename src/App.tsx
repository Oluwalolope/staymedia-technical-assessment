import './index.css'
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import TestimonialSection from './components/TestimonialSection';
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default App

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Plans from './components/Plans/Plans';
import Features from './components/Features/Features';
import Partners from './components/Partners/Partners';
import AppCta from './components/AppCta/AppCta';
import Footer from './components/Footer/Footer';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Plans />
      <Features />
      <Partners />
      <AppCta />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
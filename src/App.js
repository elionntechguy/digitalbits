import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import MainFirst from './components/MainFirst';
import Priorities from './components/Priorities';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Stories from './components/Stories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';


function App() {


  const aos = useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <MainFirst />
      <Priorities />
      <Work />
      <Services />
      <About />
      <Stories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

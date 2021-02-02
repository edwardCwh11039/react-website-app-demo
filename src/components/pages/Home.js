import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
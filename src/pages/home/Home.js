import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Hero from './hero/Hero';
import HomeMovie from './homeMovie/HomeMovie';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HomeMovie />
      <Footer />
    </div>
  );
};

export default Home;

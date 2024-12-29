import React from 'react';
import Header from '../components/Header';
import MiddlePage from '../components/MiddlePage';
import Footer from '../components/Footer';

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Header scrollToSection={scrollToSection}></Header>
      <MiddlePage></MiddlePage>
      <Footer></Footer>
    </>
  )
}

export default Home;

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-1.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Hello I'm Jared Pi'sell"
        desc="This site is to showcase my projects and experience"
        desc2="Tech used: React, React Router, Framer Motion & Styled Components"
        desc3="I am passionate software developer that has experience in Design & Design Engineering"
        desc4="A love for all things tech, I founded this passion while serving for our Country, I served 10 years Honorable U.S. Navy Special Forces. "
        hide
        github="https://github.com/"
      />
    </motion.div>
  );
};

export default Home;

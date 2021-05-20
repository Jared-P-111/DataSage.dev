import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-5.jpg';
import { motion } from 'framer-motion';
import { animationOne } from '../animations';

const ScenicOdyssey = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
      <Header />
      <Hero
        image={Image}
        title="Scenic Odyssey (Current Project)"
        desc="React ES7, Conditional Rendering"
        desc2="State, Props, Framer Motion, Styled Components "
        github="https://codesandbox.io/s/ijuj7?file=/src/index.js"
        hide
      />
    </motion.div>
  );
};

export default ScenicOdyssey;

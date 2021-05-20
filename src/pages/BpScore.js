import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-3.jpg';
import { motion } from 'framer-motion';
import { animationThree } from '../animations';

const BpScoreBoard = () => {
  return (
    <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
      <Header />
      <Hero
        image={Image}
        title="Beer Pong Scoreboard"
        desc="Built with React ES6, Props, State"
        desc2="I knew I needed to learn the older versions of React before I went into ES7 this is where I attained that knowledge. My friends loved it, no more losing scores!"
        github="https://codesandbox.io/s/beerpong-scoreboard-t395z"
        hide
      />
    </motion.div>
  );
};

export default BpScoreBoard;

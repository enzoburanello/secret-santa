import React from 'react';
import { motion } from 'framer-motion';
import BigBlue from "./src/assets/big-blue.png"
import BigRed from "./src/assets/big-red.png"
import SmallBlue from "./src/assets/small-blue.png"
import CandyCan from "./src/assets/candy-can.png"
import SmallRed from "./src/assets/small-red.png"
import PereNoel from "./src/assets/pere-noel-1.png"


 export const WelcomeAnime = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // État initial
    visible: { opacity: 1, y: 0 }, // État final
  };

  
  return (
    <>
    
    <motion.div
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      transition={{ duration: .8 }}
      className='relative z-99 group-first:'
    >
      <img 
        src={PereNoel} 
        alt="Example" 
      />
    </motion.div>

    <motion.img
    initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
    animate={{ opacity: 1, top: -70, left: 250, scale:1   }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute'
    src={BigBlue} alt="" />
    <motion.img
    initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
    animate={{ opacity: 1, top: 0, left: -100, scale:1   }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src={BigRed} alt="" />

    <motion.img
       initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
       animate={{ opacity: 1, top: 190, left: -60, scale:1   }}
       transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src={SmallBlue} alt="" />
    <motion.img
      initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
      animate={{ opacity: 1, top: -80, left: 100, scale:1   }}
      transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src={CandyCan} alt="" />
    <motion.img
       initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
       animate={{ opacity: 1, top: 190, left: 290, scale:1   }}
       transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src={SmallRed} alt="" />




    </>
    
  );
};


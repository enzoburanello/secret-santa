import React from 'react';
import { motion } from 'framer-motion';

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
        src="./src/assets/pere-noel-1.png" 
        alt="Example" 
      />
    </motion.div>

    <motion.img
    initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
    animate={{ opacity: 1, top: -70, left: 250, scale:1   }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute'
    src="./src/assets/big-blue.png" alt="" />
    <motion.img
    initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
    animate={{ opacity: 1, top: 0, left: -100, scale:1   }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src="./src/assets/big-red.png" alt="" />

    <motion.img
       initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
       animate={{ opacity: 1, top: 190, left: -60, scale:1   }}
       transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src="./src/assets/small-blue.png" alt="" />
    <motion.img
      initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
      animate={{ opacity: 1, top: -80, left: 100, scale:1   }}
      transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src="./src/assets/candy-can.png" alt="" />
    <motion.img
       initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
       animate={{ opacity: 1, top: 190, left: 290, scale:1   }}
       transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src="./src/assets/small-red.png" alt="" />




    </>
    
  );
};


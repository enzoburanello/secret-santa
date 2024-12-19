import React from 'react';
import { motion } from 'framer-motion';
import BigBlue from "../assets/big-blue.png"
import BigRed from "../assets/big-red.png"
import SmallBlue from "../assets/small-blue.png"
import CandyCan from "../assets/candy-can.png"
import SmallRed from "../assets/small-red.png"
import Socks from "../assets/socks.png"


 export const GiftAnime = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // État initial
    visible: { opacity: 1, y: 0 }, // État final
  };

  
  return (
    <>
  

    <motion.img
    initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
    animate={{ opacity: 1, top: -20, left: 270, scale:1   }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute'
    src={CandyCan} alt="" />
    <motion.img
    initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
    animate={{ opacity: 1, top: 80, left: -80, scale:1   }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src={SmallBlue} alt="" />

    <motion.img
       initial={{ opacity: 0, top: 80, left: 80, scale:.5 }}
       animate={{ opacity: 1, top: 230, left: 290, scale:1   }}
       transition={{ duration: 0.6, delay: 0.8 }}
    className='absolute '
    src={SmallRed} alt="" />




    </>
    
  );
};


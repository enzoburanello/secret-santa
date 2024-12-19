import React from 'react';
import { motion } from 'framer-motion';

 export const TitleAnime = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 20 }, // État initial
    visible: { opacity: 1, y: 0 }, // État final
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      transition={{ duration: .8 }}
      className='text-5xl font-bold' // Durée de l'animation
    >
    It's time for secret santa!
    </motion.h1>
  );
};


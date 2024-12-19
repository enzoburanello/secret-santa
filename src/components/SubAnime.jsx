import React from 'react';
import { motion } from 'framer-motion';

 export const SubAnime = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 20 }, // État initial
    visible: { opacity: 1, y: 0 }, // État final
  };

  return (
    <motion.p
    initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      className='text-lg font-bold opacity-30' // Durée de l'animation
    >
    Enjoy a simple and quick organization for a festive and joyful Christmas.
    </motion.p>
  );
};


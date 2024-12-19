import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Gift from "../assets/gift.png"

export function AssignmentDisplay({ assignments }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion de l'index actif
  const handleNext = () => {
    if (currentIndex < assignments.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Réinitialise à la première carte
    }
  };

  const cardAnimation = {
    initial: { x: -300, opacity: 0 }, 
    animate: { x: 0, opacity: 1 },   
    exit: { x: 300, opacity: 0 },   
  };

  return (
    <div className="relative w-[18rem] h-[18rem] rounded-2xl bg-white shadow flex items-center justify-center overflow-hidden cursor-pointer">
      <AnimatePresence>
        {assignments.length > 0 && (
          <motion.div
            key={currentIndex} // Nécessaire pour qu'AnimatePresence détecte les changements
            onClick={handleNext} // Passe à la carte suivante sur clic
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardAnimation}
            transition={{ duration: 0.5 }} // Durée de l'animation
            className="p-4 absolute w-full h-full flex items-center justify-between rounded-2xl bg-white shadow-2xl text-center flex-col "
          >
            <h3 className="font-bold opacity-30 text-sm text center">Ho-ho-ho!
It's your lucky day!</h3>
            <div className=" flex flex-wrap gap-1 items-center justify-center">
              <span className="block font-bold text-lg text-green-800">{assignments[currentIndex].giver}</span>
              <span>offer a gift to</span>
              <span className="block font-bold text-lg  text-green-800">{assignments[currentIndex].receiver}</span>
            </div>

            <img src={Gift} alt="" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Indicateurs pour montrer le nombre d'assignments */}
      <div className="absolute bottom-4 flex space-x-2">
        {assignments.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart
import {Button} from"./Button"
import {WelcomeAnime} from './WelcomeAnime';
import {TitleAnime} from './TitleAnime';
import {SubAnime} from './SubAnime';
import { motion } from 'framer-motion';


export function WelcomeScreen({ onStart }) {
  return (
    <motion.div 
    exit={{ opacity: 0, scale: 1.1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col justify-between items-center text-center space-y-6 w-sm h-[50.75rem] overflow-hidden px-5">
      <div>
        <div>
          <WelcomeAnime client:load/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
          <TitleAnime client:load/>
          <SubAnime client:load/>
      </div>
    
    <Button link={onStart} text="Join the Santa team"/>

    <img src="./src/assets/start.svg" alt="" />
    </motion.div>
  );
}

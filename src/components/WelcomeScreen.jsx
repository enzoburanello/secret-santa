// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart
import {Button} from"./Button"
import {WelcomeAnime} from './WelcomeAnime';
import {TitleAnime} from './TitleAnime';
import {SubAnime} from './SubAnime';


export function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col justify-between items-center text-center space-y-6 w-sm h-[50.75rem] overflow-hidden px-5">
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
    </div>
  );
}

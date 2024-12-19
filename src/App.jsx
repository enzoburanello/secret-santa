import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";
import { Button } from "./components/Button";
import { CardName } from "./components/CardName";

import Socks from "./assets/socks.png";
import CandyCan from "./assets/candy-can.png";
import SmallBlue from "./assets/small-blue.png";
import PereGift from "./assets/pere-gift.png";
import {GiftAnime} from "./components/GiftAnime"
import { AnimatePresence, motion } from "framer-motion";


import "./index.css"; // Importation du fichier CSS principal

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <main className="w-sreen h-screen bg-[#DCF1E6]">
      <div className="relative flex w-[375px] h-[812px] mx-auto p-4 overflow-hidden bg-white rounded-2xl justify-center px-5 py-10 shadow">
        <div>
          {/* affiche l'écran en fonction de l'état de l'application // WELCOME */}
          {currentScreen === "welcome" && (
             <AnimatePresence>
                   <WelcomeScreen onStart={() => setCurrentScreen("input")} />
             </AnimatePresence>
       
          )}
          {/* // INPUT */}
          {currentScreen === "input" && (
            <AnimatePresence>
                            <motion.div
                            exit={{ opacity: 0, scale: 1.1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col relative gap-20 items-center  h-full w-[375px] ">
                <div className="flex flex-col gap-10 justify-center items-center">
                  <h2 className="text-5xl font-bold text-center">
                    Secret Santa is coming!{" "}
                  </h2>

                  <div className=" relative w-[6rem] h-[8.5rem] flex flex-col gap-4 rounded-lg bg-green-100 justify-center items-center">
                    <h3 className="font-bold text-6xl text-green-800">25</h3>
                    <p className="font-bold text-lg text-green-800">dec</p>
                  </div>
                </div>

                <img className="absolute top-20 -left-20" src={Socks} alt="" />

                <img
                  className="absolute top-10 left-60"
                  src={CandyCan}
                  alt=""
                />

                <img
                  className="absolute top-40 left-65"
                  src={SmallBlue}
                  alt=""
                />

                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="text-xl font-bold text-start">
                      Create your santa’s team :{" "}
                    </h3>
                  </div>

                  <ParticipantInput
                    onAddParticipant={addParticipant}
                    participants={participants}
                    onRemoveParticipant={removeParticipant}
                  />

                  <div className="mt-6">
                    <Button
                      link={distributeGifts}
                      text="Distribuer les cadeaux"
                    />
                    {/* <button className="button w-full" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button> */}
                  </div>
                </div>
              </motion.div>
              </AnimatePresence>
          )}
          {/* // ASSIGNMENTS */}
          {currentScreen === "assignments" && (
           <AnimatePresence>
              <motion.div
              
              
              exit={{ opacity: 0, scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              
              className="w-full h-full flex flex-col justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-10">
                  <h2 className="text-5xl font-bold mb-6 text-center">
                    Let’s create your wishlist!
                  </h2>   
                                   <img className="absolute top-30 left-10 w-[16rem] h-[16rem]" src={PereGift} alt="" />
                                  <GiftAnime client:load/>
                  <div className="h-[8rem]">
                  </div>

                  <AssignmentDisplay assignments={assignments} />
                  <div className=""></div>

                  <Button link={resetApp} text="Restart" />
                  {/* <button className="button w-full" onClick={resetApp}>
                Recommencer
              </button> */}
                </div>
              </motion.div>
              </AnimatePresence>
          )}
        </div>
      </div>
    </main>
  );
}

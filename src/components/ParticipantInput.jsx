// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="space-y-4">
      {/* // Champs de saisie pour ajouter un participant */}
      <div className="flex space-x-2">
        <input
          type="text"
          className="input flex-grow bg-gray-100 rounded-xl w-[16rem] h-[3rem] justify-start items-center p-6 py-8 font-bold text-sm"
          placeholder="enter a name..."
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        {/* <button className="button" onClick={addParticipant}>
          Ajouter
        </button> */}
      </div>
      {/* // Liste des participants ajoutés */}
      <ul className="space-y-2">
        {participants.map((name, index) => (
          <li key={index} className=" w-64 h-16 flex flex-row justify-between items-center p-4 shadow-lg rounded-lg">

            <div className=" flex flex-row gap-5 justify-center items-center">
              <div className="flex justify-center items-center rounded-sm bg-green-100 w-[48px] h-[48px]">
                   <img className="w-[28px] h-[28px]" src="./src/assets/litle-gift.png" alt="" />  
              </div>
       
              {name}
            </div>
            
            <div className="space-x-2">
              <button
                className=" flex justify-center items-center rounded-sm bg-red-200 hover:bg-red-300 w-[32px] h-[32px]"
                onClick={() => onRemoveParticipant(index)}
              >
                <img className="w-[24px] h-[24px]" src="./src/assets/trash.svg" alt="" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

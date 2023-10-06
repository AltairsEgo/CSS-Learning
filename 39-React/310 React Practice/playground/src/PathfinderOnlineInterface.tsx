import React from "react";
import logo from "./logo.svg";
import styles from "./PathfinderOnlineInterface.module.css";
import AppCalculation from "./AppCalculation";
import Details from "./Details";
import { CharacterItem } from "./CharacterItem";
import { characterSheetFields } from "./character-sheet-fields";

const PathfinderOnlineInterface: React.FC = () => {
  return (
    <div className="PathfinderOnlineInterface">
      <CharacterItem
        characterName={"Peter Leisetreter"}
        dexterity={17}
        strength={12}
        constitution={14}
      />
    </div>
  );
};

export default PathfinderOnlineInterface;

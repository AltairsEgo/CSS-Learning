import React from "react";
import { CharacterDetails } from "./types";
import styles from "./CharacterItem.module.css";
import { characterSheetFields } from "./character-sheet-fields";

const CharacterItem: React.FC<CharacterDetails> = ({
  characterName,
  dexterity,
  strength,
  constitution,
}) => {
  return (
    <React.Fragment>
      <div className={styles.characterItemContainer}>
        <p className={styles.characterName}>
          {characterSheetFields.Name + characterName}
        </p>
        <div className={styles.characterPortrait}></div>
        <div className={styles.abilityScores}>
          <span>
            <p>{characterSheetFields.Dexterity + dexterity}</p>
            <p>{characterSheetFields.Strength + strength}</p>
            <p>{characterSheetFields.Constituion + constitution}</p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { CharacterItem };
